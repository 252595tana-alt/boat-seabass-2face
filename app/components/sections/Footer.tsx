"use client";

import { Instagram, Youtube, MessageCircle, ChevronUp } from "lucide-react";
import { INSTAGRAM_URL, LINE_URL, YOUTUBE_URL, MARINA_ADDRESS } from "../../siteConfig";

const footerLinks = {
  left: [
    { label: "TOP", href: "#top" },
    { label: "2FACEについて", href: "#about" },
    { label: "ガイドプラン", href: "#plan" },
    { label: "船・設備", href: "#boat" },
  ],
  right: [
    { label: "料金", href: "#price" },
    { label: "空き状況", href: "#calendar" },
    { label: "アクセス", href: "#access" },
    { label: "FAQ", href: "#faq" },
  ],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-brand-red py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/80 text-sm mb-2 font-heading tracking-widest uppercase">
            Boat Seabass 2FACE
          </p>
          <h2 className="text-white font-bold text-2xl md:text-4xl mb-6">
            徳島・吉野川で、最高の一匹を。
          </h2>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-4 rounded-full text-base hover:bg-gray-100 transition-colors shadow-lg"
          >
            <MessageCircle size={20} />
            LINEで予約相談
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-heading font-black text-3xl mb-3">
              <span className="text-brand-red">2</span>
              <span className="text-white">FACE</span>
            </div>
            <p className="text-gray-500 text-xs mb-6 leading-relaxed">
              ボートシーバス2FACE（LATES）
              <br />
              代表：森本健太郎
              <br />
              集合場所：四国マリーナ
              <br />
              住所：{MARINA_ADDRESS}
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              {footerLinks.left.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 opacity-0 select-none">links</h4>
            <ul className="space-y-2">
              {footerLinks.right.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <p className="text-gray-600 text-xs">
            © Boat Seabass 2FACE All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              プライバシーポリシー
            </a>
            <button
              onClick={scrollTop}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white/30 hover:text-white transition-colors"
              aria-label="ページトップへ"
            >
              <ChevronUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
