"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar, CheckCircle, HelpCircle } from "lucide-react";

const availability = [
  { label: "今週末　ナイト便", status: "空きあり", color: "text-green-400", icon: CheckCircle },
  { label: "平日便", status: "予約受付中", color: "text-green-400", icon: CheckCircle },
  { label: "アカメ便", status: "要相談", color: "text-yellow-400", icon: HelpCircle },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Left: Headline */}
          <div className="flex-1 text-center lg:text-left">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <span className="font-heading text-brand-red text-sm tracking-[0.4em] uppercase font-bold">
                BOAT SEABASS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-wider text-white mb-6"
            >
              2FACE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2"
            >
              徳島・吉野川で、
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-white leading-tight mb-10"
            >
              一生忘れられない一匹を。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://line.me/R/ti/p/@2face"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all pulse-red shadow-lg shadow-brand-red/30"
              >
                <MessageCircle size={22} />
                LINEで予約する
              </a>
              <button
                onClick={() => {
                  document.querySelector("#plan")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium text-base px-8 py-4 rounded-full transition-all backdrop-blur-sm"
              >
                ガイドプランを見る
              </button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xs transition-colors font-heading tracking-wider"
              >
                Instagram
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xs transition-colors font-heading tracking-wider"
              >
                YouTube
              </a>
            </motion.div>
          </div>

          {/* Right: Availability Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full lg:w-72 shrink-0"
          >
            <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl">
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4 border-b border-white/10 pb-3">
                直近の空き状況
              </h3>
              <div className="space-y-3">
                {availability.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{item.label}</span>
                    <div className="flex items-center gap-1.5">
                      <item.icon size={14} className={item.color} />
                      <span className={`text-sm font-medium ${item.color}`}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 border border-white/20 hover:border-brand-red text-white hover:text-brand-red text-sm py-2.5 rounded-xl transition-colors w-full"
              >
                <Calendar size={15} />
                空き状況カレンダーを見る
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 text-xs tracking-widest font-heading uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-brand-red to-transparent"
        />
      </motion.div>
    </section>
  );
}
