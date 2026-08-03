import availabilityData from "../data/availability.json";

export type AvailabilityTone = "available" | "consult" | "closed";

export type AvailabilityItem = {
  label: string;
  status: string;
  tone: AvailabilityTone;
};

export const availabilityItems = availabilityData as AvailabilityItem[];

export function normalizeAvailabilityItems(items: unknown): AvailabilityItem[] {
  if (!Array.isArray(items)) {
    throw new Error("空き状況の形式が正しくありません。");
  }

  const normalized = items.slice(0, 3).map((item) => {
    if (!item || typeof item !== "object") {
      throw new Error("空き状況の項目が正しくありません。");
    }

    const record = item as Record<string, unknown>;
    const label = String(record.label ?? "").trim();
    const status = String(record.status ?? "").trim();
    const tone = String(record.tone ?? "available") as AvailabilityTone;

    if (!label || !status) {
      throw new Error("表示名と状態を入力してください。");
    }

    if (!["available", "consult", "closed"].includes(tone)) {
      throw new Error("状態カラーが正しくありません。");
    }

    return { label, status, tone };
  });

  if (normalized.length !== 3) {
    throw new Error("空き状況は3件で登録してください。");
  }

  return normalized;
}
