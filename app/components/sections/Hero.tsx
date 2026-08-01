"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, HelpCircle, Instagram, MessageCircle, Youtube } from "lucide-react";
import { INSTAGRAM_URL, LINE_URL, YOUTUBE_URL } from "../../siteConfig";

const availability = [
  { label: "今週末　ナイト便", status: "空きあり", color: "text-green-400", icon: CheckCircle },
  { label: "平日便", status: "予約受付中", color: "text-green-400", icon: CheckCircle },
  { label: "アカメ便", status: "要相談", color: "text-yellow-400", icon: HelpCircle },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-0 z-0 h-[64svh] min-h-[430px] max-h-[590px] overflow-hidden bg-black md:inset-0 md:h-full md:min-h-0 md:max-h-none">
        <video autoPlay muted loop playsInline preload="metadata" className="absolute left-1/2 top-14 h-auto w-[145vw] max-w-none -translate-x-1/2 object-contain sm:top-4 sm:w-[125vw] md:static md:h-full md:w-full md:translate-x-0 md:object-cover md:object-center">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        <div className="absolute left-[8%] top-1/4 h-72 w-72 rounded-full bg-brand-red/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black md:hidden" />

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-[1] hidden overflow-hidden lg:block">
        <p className="translate-y-1/3 whitespace-nowrap text-center font-heading text-[10vw] font-black tracking-[0.16em] text-white/[0.025]">YOSHINOGAWA</p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-2">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-2 font-heading text-[10px] font-bold tracking-[0.3em] text-gray-200 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_12px_rgba(230,51,41,0.9)]" />
                TOKUSHIMA / YOSHINOGAWA
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="gradient-text mt-5 font-heading font-black text-7xl md:text-8xl lg:text-[9rem] leading-[0.82] tracking-[0.04em] mb-8 drop-shadow-2xl">
              2FACE
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              徳島・吉野川で、
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-2xl md:text-3xl font-bold text-white leading-tight mb-10">
              一生忘れられない一匹を。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all pulse-red shadow-lg shadow-brand-red/30">
                <MessageCircle size={22} />
                LINEで予約相談
              </a>
              <button onClick={() => document.querySelector("#plan")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium text-base px-8 py-4 rounded-full transition-all backdrop-blur-sm">
                ガイドプランを見る
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }} className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xs transition-colors font-heading tracking-wider inline-flex items-center gap-1">
                <Instagram size={14} /> @boat_seabass_2face
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xs transition-colors font-heading tracking-wider inline-flex items-center gap-1" aria-label="YouTube公式チャンネル">
                <Youtube size={14} /> YouTube
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="mt-8 flex items-center justify-center gap-5 text-left lg:justify-start">
              {[
                ["27FT", "CUSTOM BOAT"],
                ["MAX 7", "CAPACITY"],
                ["ALL", "SEASON"],
              ].map(([value, label], index) => (
                <div key={value} className={`pr-5 ${index < 2 ? "border-r border-white/10" : ""}`}>
                  <p className="font-heading text-sm font-black tracking-wider text-white">{value}</p>
                  <p className="mt-0.5 text-[8px] font-bold tracking-[0.2em] text-gray-500">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="w-full lg:w-80 shrink-0">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/65 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-red/20 blur-3xl" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="mb-1 text-[10px] font-bold tracking-[0.25em] text-brand-red uppercase">LIVE AVAILABILITY</p>
                    <h3 className="text-white font-bold text-base">直近の空き状況</h3>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-[10px] font-medium text-green-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
                    更新中
                  </span>
                </div>
              <div className="space-y-2.5">
                {availability.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2.5">
                    <span className="text-gray-200 text-xs">{item.label}</span>
                    <div className="flex items-center gap-1.5">
                      <item.icon size={14} className={item.color} />
                      <span className={`text-xs font-bold ${item.color}`}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#calendar" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red-dark hover:shadow-brand-red/40">
                <Calendar size={16} /> Googleカレンダーで確認
              </a>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/15 py-2.5 text-xs font-medium text-gray-300 transition-colors hover:border-white/35 hover:text-white w-full">
                <MessageCircle size={14} /> 空き確認後、LINEで予約相談
              </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-400 text-xs tracking-widest font-heading uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  );
}
