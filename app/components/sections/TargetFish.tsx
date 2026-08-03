"use client";

import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const fish = [
  {
    name: "シーバス",
    en: "SEABASS",
    image: "/target-seabass.jpg",
    pos: "center 51%",
    desc: "吉野川・徳島近海を代表するターゲット。年中狙えるが秋〜冬が最盛期。",
  },
  {
    name: "アカメ",
    en: "AKAME",
    image: "/target-akame.jpg",
    pos: "center 51%",
    desc: "幻の怪魚。徳島は国内屈指のアカメフィールド。専用プランあり。",
  },
  {
    name: "メバル",
    en: "MEBARU",
    image: "/target-mebaru.jpg",
    pos: "center 54%",
    desc: "数釣りの楽しさが魅力。吉野川のメバルマンションで数・型ともに狙えます。",
  },
  {
    name: "フラットフィッシュ",
    en: "FLAT FISH",
    image: "/fish-flatfish.jpg",
    pos: "center center",
    desc: "ヒラメ・マゴチ。繊細な食いを掛けた瞬間のスリルが最高の魅力。",
  },
];

export default function TargetFish() {
  return (
    <section className="overflow-hidden bg-brand-gray py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading en="TARGET FISH" ja="対象魚種" center />

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {fish.map((f, i) => (
            <div
              key={f.en}

              className="group relative aspect-[16/10] overflow-hidden rounded-[18px] border border-white/10 bg-black shadow-[0_18px_55px_rgba(0,0,0,0.42)] md:rounded-[24px]"
            >
              <Image
                src={f.image}
                alt={f.name}
                fill
                sizes="(max-width: 767px) 50vw, 45vw"
                className="object-cover scale-[1.02] transition duration-700 ease-out group-hover:scale-[1.08] group-hover:saturate-110"
                style={{ objectPosition: f.pos }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_28%,rgba(0,0,0,0.88)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="absolute left-0 top-5 h-8 w-[3px] bg-brand-red shadow-[0_0_18px_rgba(230,51,41,0.9)] md:top-7 md:h-11" />
              <span className="absolute right-3 top-3 font-heading text-[10px] font-black tracking-[0.2em] text-white/45 md:right-5 md:top-5 md:text-xs">
                0{i + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-6">
                <p className="mb-1 font-heading text-[10px] font-black tracking-[0.18em] text-brand-red md:text-xs md:tracking-[0.24em]">
                  {f.en}
                </p>
                <h3 className="text-base font-black tracking-[0.03em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.85)] md:text-2xl">
                  {f.name}
                </h3>
                <p className="mt-2 hidden max-w-md translate-y-2 text-xs leading-relaxed text-gray-300 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
