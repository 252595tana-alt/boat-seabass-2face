import { availabilityItems, normalizeAvailabilityItems } from "../../../lib/availability";

export const dynamic = "force-dynamic";

const OWNER = process.env.GITHUB_OWNER || "252595tana-alt";
const REPO = process.env.GITHUB_REPO || "boat-seabass-2face";
const BRANCH = process.env.GITHUB_BRANCH || "main";
const FILE_PATH = "app/data/availability.json";

function unauthorized(message = "パスワードが違います。") {
  return Response.json({ error: message }, { status: 401 });
}

export async function GET() {
  return Response.json({ items: availabilityItems }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const password = String(body?.password ?? "");

  if (!process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "ADMIN_PASSWORD が未設定です。" }, { status: 500 });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return unauthorized();
  }

  if (!process.env.GITHUB_TOKEN) {
    return Response.json({ error: "GITHUB_TOKEN が未設定です。" }, { status: 500 });
  }

  let items;
  try {
    items = normalizeAvailabilityItems(body?.items);
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "入力内容を確認してください。" }, { status: 400 });
  }

  const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "boat-seabass-2face-admin",
  };

  const current = await fetch(`${apiUrl}?ref=${BRANCH}`, { headers, cache: "no-store" });
  if (!current.ok) {
    return Response.json({ error: "GitHub上の現在データを取得できませんでした。" }, { status: 502 });
  }

  const currentJson = await current.json();
  const content = Buffer.from(`${JSON.stringify(items, null, 2)}\n`, "utf8").toString("base64");

  const update = await fetch(apiUrl, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: "Update availability from admin",
      content,
      sha: currentJson.sha,
      branch: BRANCH,
    }),
  });

  if (!update.ok) {
    const detail = await update.text();
    return Response.json({ error: "GitHubへの保存に失敗しました。", detail }, { status: 502 });
  }

  return Response.json({ ok: true, items });
}
