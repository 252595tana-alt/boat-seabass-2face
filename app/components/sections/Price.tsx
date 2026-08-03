"use client";

import SectionHeading from "../ui/SectionHeading";
import { MessageCircle, Info } from "lucide-react";
import { LINE_URL } from "../../siteConfig";

const plans = [
  {
    name: "ショート便",
    duration: "4時間",
    rates: [
      { label: "3名チャーター", price: "¥36,000" },
      { label: "4名チャーター", price: "¥40,000" },
      { label: "乗り合い（1名）", price: "¥11,000" },
    ],
    note: null,
    highlight: false,
  },
  {
    name: "ロング便",
    duration: "8時間",
    rates: [
      { label: "3名チャーター", price: "¥48,000" },
      { label: "4名チャーター", price: "¥56,000" },
      { label: "乗り合い（1名）", price: "¥14,000" },
    ],
    note: null,
    highlight: true,
    tag: "人気No.1",
  },
  {
    name: "半日便",
    duration: "12時間（半日）",
    rates: [
      { label: "3名チャーター", price: "¥60,000" },
      { label: "4名チャーター", price: "¥72,000" },
      { label: "乗り合い（1名）", price: "¥18,000" },
    ],
    note: null,
    highlight: false,
  },
  {
    name: "アカメ便",
    duration: "6時間",
    rates: [
      { label: "2名まで（チャーター）", price: "¥60,000" },
      { label: "延長（1時間）", price: "¥10,000" },
    ],
    note: "アカメ専用プラン。要相談にて受付。",
    highlight: false,
    tag: "幻の怪魚",
  },
];

export default function Price() {
  return (
    <section id="price" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="PRICE" ja="料金" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}

              className={`relative rounded-2xl overflow-hidden border card-hover ${
                plan.highlight
                  ? "border-brand-red bg-gradient-to-b from-brand-red/10 to-brand-dark"
                  : "border-white/5 bg-brand-dark"
              }`}
            >
              {/* Top accent */}
              {plan.highlight && (
                <div className="h-1 bg-brand-red w-full" />
              )}

              <div className="p-6">
                {/* Tag */}
                {"tag" in plan && plan.tag && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-red text-white mb-3 inline-block">
                    {plan.tag}
                  </span>
                )}

                <h3 className="font-bold text-xl text-white mb-1">{plan.name}</h3>
                <p className="text-brand-red font-heading font-black text-lg mb-5">
                  {plan.duration}
                </p>

                <div className="space-y-3 border-t border-white/10 pt-5">
                  {plan.rates.map((rate) => (
                    <div key={rate.label} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{rate.label}</span>
                      <span className="text-white font-bold text-base font-heading">
                        {rate.price}
                      </span>
                    </div>
                  ))}
                </div>

                {plan.note && (
                  <div className="mt-4 flex items-start gap-2 bg-brand-red/5 rounded-lg p-3">
                    <Info size={14} className="text-brand-red shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-xs">{plan.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div

          className="mt-8 bg-brand-dark rounded-2xl border border-white/5 p-6"
        >
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <Info size={16} className="text-brand-red" />
            料金に関する注意事項
          </h4>
          <ul className="text-gray-400 text-sm space-y-1.5">
            <li>・ お支払いは<span className="text-white font-medium">現金のみ</span>となります</li>
            <li>・ 料金は税込み価格です</li>
            <li>・ 5名以上の場合は別途お見積りとなります</li>
            <li>・ キャンセル規定はFAQをご確認ください</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all pulse-red shadow-lg shadow-brand-red/20"
          >
            <MessageCircle size={20} />
            LINEで予約・お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
