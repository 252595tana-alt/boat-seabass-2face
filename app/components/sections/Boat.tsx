"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { Check } from "lucide-react";

const specs = [
  "27ft ハイパーシャローカスタム（超浅場対応）",
  "Garmin 魚探・GPS",
  "ロッドホルダー10本（貸出準備中）",
  "大型クーラーボックス完備",
  "ハイパーシャロー対応",
  "定員7名（船長含む）",
  "SUZUKI 船外機",
];

export default function Boat() {
  return (
    <section id="boat" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="OUR BOAT" ja="船・設備" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/boat-1.jpg"
                alt="2FACEのボート"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

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
              超浅場対応 / SUZUKI Marine
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              吉野川のシャローエリアを攻略するため、特別仕様のハイパーシャローカスタムに仕上げています。
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
