"use client";

import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { Users, Shield, MapPin, Award } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "吉野川を知り尽くしたガイド",
    desc: "194kmの一級河川・吉野川を知り尽くした船長がご案内。",
  },
  {
    icon: Users,
    title: "初心者歓迎",
    desc: "道具の使い方から釣り方まで丁寧にサポートします。",
  },
  {
    icon: Shield,
    title: "27ftカスタムボート",
    desc: "ハイパーシャロー対応のカスタム和船で快適・安全。",
  },
  {
    icon: Award,
    title: "大型魚実績多数",
    desc: "シーバス・アカメ・青物など多くのビッグフィッシュ実績。",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="ABOUT 2FACE" ja="2FACEとは" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div

            className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/about-captain.jpg"
              alt="2FACEについて - 船長 森本健太郎"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-brand-red font-heading font-black text-5xl opacity-30 select-none">
                2FACE
              </span>
            </div>
          </div>

          {/* Content */}
          <div

          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              徳島・吉野川をメインフィールドに、
              <br />
              <span className="text-white font-medium">
                シーバス・アカメ・青物・フラットフィッシュ
              </span>
              を対象としたボートフィッシングガイドです。
              <br />
              <br />
              初心者からベテランアングラーまで、安全第一で最高の一日をご案内します。
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div
                  key={item.title}

                  className="bg-brand-gray border border-white/5 rounded-xl p-4 card-hover group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-brand-red/10 group-hover:bg-brand-red/20 flex items-center justify-center transition-colors">
                      <item.icon size={18} className="text-brand-red" />
                    </div>
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
