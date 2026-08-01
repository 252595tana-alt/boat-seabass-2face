"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "初心者でも参加できますか？",
    a: "はい、初心者大歓迎です！道具の使い方や釣り方まで、丁寧にサポートしますのでご安心ください。釣りが初めての方でも楽しんでいただけます。",
  },
  {
    q: "レンタルタックルはありますか？",
    a: "はい、ロッド・リール・ルアーなどのタックル一式をレンタルいただけます。手ぶらでお越しいただいても大丈夫です。詳細は公式InstagramのDMでご確認ください。",
  },
  {
    q: "雨の日は出船しますか？",
    a: "小雨程度であれば通常通り出船いたします。台風や強風・高波など、安全に支障があると判断した場合は中止となります。当日の天候は前日〜当日朝にご連絡いたします。",
  },
  {
    q: "駐車場はありますか？",
    a: "はい、四国マリーナに無料の駐車場をご用意しております。お車でお越しいただけます。",
  },
  {
    q: "キャンセル規定を教えてください。",
    a: "・前日キャンセル：料金の50%\n・当日キャンセル：料金の100%\n・悪天候による中止：キャンセル料なし（全額返金）\nご予約後のキャンセルはお早めに公式InstagramのDMでご連絡ください。",
  },
  {
    q: "何人から予約できますか？",
    a: "乗り合い便は1名様から、チャーター便は2〜4名様（プランにより異なる）からご利用いただけます。大人数の場合はオリジナルチャーター便をご相談ください（最大7名）。",
  },
  {
    q: "支払い方法は？",
    a: "現金のみとなります。当日、乗船前にお支払いいただく形となります。",
  },
  {
    q: "アカメを狙いたいのですが？",
    a: "専用の「アカメ便」をご用意しております。シーズンや水位などにより釣果は変動しますが、徳島は国内屈指のアカメフィールドです。詳細は公式InstagramのDMでお問い合わせください。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-gray">
      <div className="max-w-3xl mx-auto px-4">
        <SectionHeading en="FAQ" ja="よくある質問" center />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-brand-dark border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white font-medium text-sm md:text-base flex items-start gap-3">
                  <span className="text-brand-red font-heading font-black text-sm shrink-0 mt-0.5">
                    Q.
                  </span>
                  {faq.q}
                </span>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  {open === i ? (
                    <Minus size={12} className="text-brand-red" />
                  ) : (
                    <Plus size={12} className="text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 border-t border-white/5 pt-4">
                      <div className="flex gap-3">
                        <span className="text-brand-red font-heading font-black text-sm shrink-0">
                          A.
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          その他ご不明な点は公式InstagramのDMでお気軽にお問い合わせください。
        </p>
      </div>
    </section>
  );
}
