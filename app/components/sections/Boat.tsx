"use client";

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
          <div

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
          </div>

          <div

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
                <div
                  key={spec}

                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand-red" />
                  </div>
                  <span className="text-gray-300 text-sm">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
