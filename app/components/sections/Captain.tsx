"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

export default function Captain() {
  return (
    <section id="captain" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-black text-[200px] text-white/[0.02] select-none pointer-events-none">
        CAPTAIN
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeading en="CAPTAIN" ja="船長紹介" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
              <Image
                src="/captain-photo.jpg"
                alt="船長 森本健太郎"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              {/* Name card */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-brand-red text-xs font-heading font-bold tracking-widest uppercase mb-1">
                  Captain
                </p>
                <h3 className="text-white font-bold text-3xl mb-0.5">森本 健太郎</h3>
                <p className="text-gray-400 text-sm">LATES / ボートシーバス2FACE</p>
              </div>
            </div>
            {/* Decorative red corner */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-red rounded-tl-xl" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-brand-red rounded-br-xl" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="text-brand-red font-heading font-black text-2xl md:text-3xl leading-tight mb-8 border-l-4 border-brand-red pl-5">
              "一生忘れられない一匹"
              <br />
              <span className="text-white text-xl font-bold">をテーマにガイドしています。</span>
            </blockquote>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                幼少期から釣りを始め、現在も全国へ遠征を重ねながら、
                吉野川をホームフィールドとして活動しています。
              </p>
              <p>
                徳島・吉野川の194kmにわたる流域を知り尽くし、シーバス・アカメ・青物など
                様々なターゲットに精通したガイドが全力でサポートします。
              </p>
              <p>
                セーフティーファーストを心掛け、当艇の最高の一匹を
                安全に、確実に、全力でご案内します。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { num: "194km", label: "吉野川の全長" },
                { num: "7名", label: "最大定員" },
                { num: "年中", label: "ガイド対応" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-brand-gray rounded-xl p-4">
                  <p className="font-heading font-black text-2xl text-brand-red">{stat.num}</p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document.querySelector("#calendar")?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-6 py-3 rounded-full text-sm transition-all inline-flex items-center gap-2"
            >
              予約・お問い合わせはこちら
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
