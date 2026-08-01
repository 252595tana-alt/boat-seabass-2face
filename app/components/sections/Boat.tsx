"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { Check } from "lucide-react";

const specs = [
  "27ft ハイパーシャローカスタム（千葉造船）",
  "Garmin 魚探・GPS",
  "ロッドホルダー10本（増設中）",
  "大型クーラーボックス充備",
  "ハイパーシャロー対応",
  "定員7名（船長含む）",
  "SUZUKI 船外機",
];

const images = [
  "/boat-1.jpg",
  "https://images.unsplash.com/photo-1504983875732-7a6752f1b6c7?w=800&q=80",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
];

export default function Boat() {
  const [active, setActive] = useState(0);

  return (
    <section id="boat" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="OUR BOAT" ja="船・設備" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Main image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-3">
              <Image
                src={images[active]}
                alt="ボート画像"
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative h-16 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    active === i ? "border-brand-red" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt={`ボート ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading font-black text-2xl text-white mb-2">
              27ft ハイパーシャローカスタム
            </h3>
            <p className="text-brand-red font-medium text-sm tracking-widest mb-6">
              千葉造船 / SUZUKI Marine
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              吉野川のシャローエリアを隅々まで攻略するため、特注のハイパーシャロー仕様にカスタム。
              最新の魚探・GPSを搭載し、快適かつ安全な釣行を実現します。
            </p>

            <div className="space-y-3">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand-red" />
                  </div>
                  <span className="text-gray-300 text-sm">{spec}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
