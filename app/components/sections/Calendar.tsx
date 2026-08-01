"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar as CalIcon } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { LINE_URL } from "../../siteConfig";

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="AVAILABILITY" ja="空き状況・予約相談" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-brand-gray rounded-2xl overflow-hidden border border-white/5">
              <div className="p-4 border-b border-white/5 flex items-center gap-2">
                <CalIcon size={16} className="text-brand-red" />
                <span className="text-white font-medium text-sm">最新の空き状況</span>
              </div>
              <div className="flex min-h-[420px] items-center justify-center p-8 md:min-h-[500px]">
                <div className="max-w-lg text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brand-red/30 bg-brand-red/10">
                    <MessageCircle size={28} className="text-brand-red" />
                  </div>
                  <p className="mb-3 text-2xl font-bold text-white">空き状況はLINEでご案内します</p>
                  <p className="mb-8 text-sm leading-relaxed text-gray-400">
                    希望日・人数・ご希望のプランをお送りください。最新の出船状況を確認してご返信します。
                  </p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red-dark"
                  >
                    <MessageCircle size={17} />
                    LINEで空き状況を確認
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">
              ※ 最新の情報はLINEにてお問い合わせください。
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-brand-gray border border-white/5 rounded-2xl p-5">
              <h4 className="text-white font-bold text-sm mb-4">空き状況の目安</h4>
              <div className="space-y-2.5">
                {[
                  { color: "bg-green-500", label: "空きあり" },
                  { color: "bg-yellow-500", label: "要相談" },
                  { color: "bg-red-600", label: "満船" },
                  { color: "bg-gray-600", label: "休船" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-gray-300 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-5">
              <h4 className="text-white font-bold mb-2">ご予約・お問い合わせ</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                ご予約はLINEから簡単に受け付けております。お気軽にご連絡ください。
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-5 py-3 rounded-full text-sm transition-all w-full"
              >
                <MessageCircle size={16} />
                LINEで予約・お問い合わせ
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
