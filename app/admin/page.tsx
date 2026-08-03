"use client";

import { Save } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import type { AvailabilityItem, AvailabilityTone } from "../lib/availability";

const toneOptions: { value: AvailabilityTone; label: string }[] = [
  { value: "available", label: "緑：空きあり" },
  { value: "consult", label: "黄：要相談" },
  { value: "closed", label: "赤：満席" },
];

const defaultItems: AvailabilityItem[] = [
  { label: "今週末　ナイト便", status: "空きあり", tone: "available" },
  { label: "平日便", status: "予約受付中", tone: "available" },
  { label: "アカメ便", status: "要相談", tone: "consult" },
];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [items, setItems] = useState<AvailabilityItem[]>(defaultItems);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/availability", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.items)) {
          setItems(data.items);
        }
      })
      .catch(() => undefined);
  }, []);

  const updateItem = (index: number, field: keyof AvailabilityItem, value: string) => {
    setItems((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: field === "tone" ? (value as AvailabilityTone) : value } : item,
      ),
    );
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const response = await fetch("/api/admin/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, items }),
    });
    const data = await response.json().catch(() => ({}));

    setSaving(false);
    if (!response.ok) {
      setMessage(data.error || "保存に失敗しました。");
      return;
    }

    setMessage("保存しました。Vercelの反映まで1〜2分ほど待ってから本番サイトを確認してください。");
  };

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 font-heading text-xs font-bold tracking-[0.28em] text-brand-red">2FACE ADMIN</p>
        <h1 className="font-heading text-3xl font-black tracking-wide md:text-5xl">直近の空き状況</h1>
        <p className="mt-4 text-sm leading-7 text-gray-400">
          上部の3行だけを手動で変更します。保存後、本番サイトへの反映には少し時間がかかります。
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 md:p-7">
          <label className="block">
            <span className="text-xs font-bold text-gray-300">管理パスワード</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-brand-red"
              autoComplete="current-password"
              required
            />
          </label>

          {items.map((item, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-black/60 p-4">
              <p className="mb-3 font-heading text-xs font-black tracking-[0.2em] text-gray-500">ROW {index + 1}</p>
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_150px]">
                <label className="block">
                  <span className="text-xs font-bold text-gray-300">表示名</span>
                  <input
                    value={item.label}
                    onChange={(event) => updateItem(index, "label", event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-red"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-gray-300">状態文言</span>
                  <input
                    value={item.status}
                    onChange={(event) => updateItem(index, "status", event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-red"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-gray-300">色</span>
                  <select
                    value={item.tone}
                    onChange={(event) => updateItem(index, "tone", event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-red"
                  >
                    {toneOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          ))}

          <button disabled={saving} className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-4 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60">
            <Save size={18} />
            {saving ? "保存中..." : "保存する"}
          </button>

          {message && <p className="rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-gray-200">{message}</p>}
        </form>
      </div>
    </main>
  );
}
