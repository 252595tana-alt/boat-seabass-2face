"use client";

import { motion } from "framer-motion";
import { Calendar as CalIcon, Instagram, MessageCircle, Users } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { INSTAGRAM_URL } from "../../siteConfig";

const bookingSteps = [
  {
    icon: CalIcon,
    title: "希望日を決める",
    description: "希望日・時間帯と、狙いたい魚を決めます。",
  },
  {
    icon: Users,
    title: "人数を知らせる",
    description: "乗船人数と、チャーター・乗り合いの希望をお知らせください。",
  },
  {
    icon: MessageCircle,
    title: "Instagramで相談",
    description: "公式アカウントのDMで空き状況を確認し、予約を確定します。",
  },
];

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="AVAILABILITY" ja="空き状況・ご予約" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-2xl border border-white/5 bg-brand-gray p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center mb-6">
              <CalIcon size={26} className="text-brand-red" />
            </div>
            <p className="font-heading text-xs font-bold tracking-[0.24em] text-brand-red mb-3">
              LATEST AVAILABILITY
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              最新の空き状況は公式Instagramへ
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">
              出船予定や最新の釣果を随時更新しています。希望日が決まっている方は、
              InstagramのDMからお気軽にお問い合わせください。
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-brand-red/20"
            >
              <Instagram size={18} />
              空き状況を確認・予約相談する
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 rounded-2xl border border-white/5 bg-brand-gray p-6"
          >
            <h3 className="text-white font-bold text-lg mb-5">ご予約の流れ</h3>
            <div className="space-y-5">
              {bookingSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <step.icon size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      <span className="text-brand-red mr-2">{index + 1}.</span>
                      {step.title}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
