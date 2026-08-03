"use client";

import { Clock, Fish, Sunrise, Star, Anchor } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const plans = [
  {
    icon: Clock,
    name: "ショート便",
    duration: "4時間",
    desc: "短時間で気軽に楽しみたい方におすすめのプラン。",
    tag: "気軽に体験",
  },
  {
    icon: Anchor,
    name: "ロング便",
    duration: "8時間",
    desc: "じっくり一日楽しみたい方に。人気のスタンダードプラン。",
    tag: "人気No.1",
    highlight: true,
  },
  {
    icon: Sunrise,
    name: "半日便",
    duration: "12時間（半日）",
    desc: "遠征釣行にも対応したゆったりロングプラン。",
    tag: "遠征対応",
  },
  {
    icon: Fish,
    name: "アカメ便",
    duration: "6時間",
    desc: "アカメ狙いに特化した専用プラン。",
    tag: "幻の怪魚",
  },
  {
    icon: Star,
    name: "オリジナルチャーター便",
    duration: "応相談",
    desc: "花火・蟹釣り・秘密釣行・エサ釣りなどあなただけの特別なプラン。",
    tag: "完全カスタム",
  },
];

export default function GuidePlan() {
  return (
    <section id="plan" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="GUIDE PLAN" ja="ガイドプラン" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan, i) => (
            <div
              key={plan.name}

              className={`relative rounded-2xl p-6 border card-hover group transition-all ${
                plan.highlight
                  ? "bg-brand-red border-brand-red text-white"
                  : "bg-brand-gray border-white/5 hover:border-brand-red/30"
              }`}
            >
              {/* Tag */}
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full mb-4 inline-block ${
                  plan.highlight ? "bg-white/20 text-white" : "bg-brand-red/10 text-brand-red"
                }`}
              >
                {plan.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  plan.highlight ? "bg-white/20" : "bg-brand-red/10 group-hover:bg-brand-red/20"
                } transition-colors`}
              >
                <plan.icon
                  size={22}
                  className={plan.highlight ? "text-white" : "text-brand-red"}
                />
              </div>

              <h3
                className={`font-bold text-lg mb-1 ${
                  plan.highlight ? "text-white" : "text-white"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`font-heading font-black text-2xl mb-3 ${
                  plan.highlight ? "text-white" : "text-brand-red"
                }`}
              >
                {plan.duration}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  plan.highlight ? "text-white/80" : "text-gray-400"
                }`}
              >
                {plan.desc}
              </p>

              <button
                onClick={() =>
                  document.querySelector("#price")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`mt-5 text-xs font-medium flex items-center gap-1 transition-colors ${
                  plan.highlight
                    ? "text-white/70 hover:text-white"
                    : "text-gray-500 hover:text-brand-red"
                }`}
              >
                詳しく見る →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
