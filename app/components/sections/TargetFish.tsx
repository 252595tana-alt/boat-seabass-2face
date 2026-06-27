"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

const fish = [
  {
    name: "シーバス",
    en: "SEABASS",
    image: "/fish-seabass.jpg",
    pos: "center center",
    desc: "吉野川・徳島近海を代表するターゲット。年中狙えるが秋〜冬が最盛期。",
  },
  {
    name: "アカメ",
    en: "AKAME",
    image: "/fish-akame.jpg",
    pos: "center center",
    desc: "幻の怪魚。徳島は国内屈指のアカメフィールド。専用プランあり。",
  },
  {
    name: "メバル",
    en: "MEBARU",
    image: "/fish-mebaru.jpg",
    pos: "center 40%",
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
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="TARGET FISH" ja="対象魚種" center />

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {fish.map((f, i) => (
            <motion.div
              key={f.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={f.image}
                alt={f.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: f.pos }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* Red line accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-brand-red font-heading font-black text-xs tracking-widest mb-1">
                  {f.en}
                </p>
                <h3 className="text-white font-bold text-lg md:text-xl mb-1">{f.name}</h3>
                <p className="text-gray-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
