"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar as CalIcon } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { LINE_URL } from "../../siteConfig";

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="AVAILABILITY" ja="空き状況カレンダー" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Calendar embed */}
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
                <span className="text-white font-medium text-sm">空き状況カレンダー</span>
              </div>
              <div className="relative">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Asia%2FTokyo&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%231A1A1A&color=%23E63329"
                  className="w-full h-[480px] md:h-[560px]"
                  frameBorder="0"
                  scrolling="no"
                  title="空き状況カレンダー"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brand-gray/95 rounded-b-2xl">
                  <div className="text-center p-8">
                    <CalIcon size={48} className="text-brand-red mx-auto mb-4 opacity-60" />
                    <p className="text-white font-bold text-lg mb-2">Googleカレンダー</p>
                    <p className="text-gray-400 text-sm mb-6">
                      実際の空き状況はGoogleカレンダーでご確認いただけます。
                      <br />
                      カレンダーIDを設定することで自動表示されます。
                    </p>
                    <a
                      href="https://calendar.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-6 py-2.5 rounded-full text-sm transition-all font-medium"
                    >
                      <CalIcon size={16} />
                      Googleカレンダーで確認
                    </a>
                  </div>
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
              <h4 className="text-white font-bold text-sm mb-4">カレンダー凡例</h4>
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
