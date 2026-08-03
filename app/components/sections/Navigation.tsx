"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { LINE_URL } from "../../siteConfig";

const navItems = [
  { label: "2FACEについて", href: "#about" },
  { label: "ガイドプラン", href: "#plan" },
  { label: "船・設備", href: "#boat" },
  { label: "料金", href: "#price" },
  { label: "空き状況", href: "#calendar" },
  { label: "アクセス", href: "#access" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={`pointer-events-auto mx-auto flex h-16 max-w-7xl items-center justify-between px-4 transition-all duration-500 md:h-[72px] md:px-5 ${
          scrolled
            ? "rounded-2xl border border-white/10 bg-black/80 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <button onClick={() => handleClick("#top")} className="group flex items-center text-left" aria-label="ページ上部へ">
          <span className="font-heading text-2xl font-black leading-none tracking-[0.14em] md:text-[28px]">
            <span className="text-brand-red">2</span>
            <span className="text-white">FACE</span>
          </span>
        </button>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleClick(item.href)} className="group relative py-2 text-[11px] font-medium tracking-wide text-gray-300 transition-colors hover:text-white">
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-red transition-transform group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-xl bg-brand-red px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-brand-red/20 transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark md:inline-flex">
            <MessageCircle size={15} />
            LINE予約
            <ArrowUpRight size={14} />
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30 text-white backdrop-blur-md xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="メニューを開閉">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <>
        {menuOpen && (
          <div className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl backdrop-blur-xl xl:hidden">
            <nav className="grid grid-cols-2 gap-1 md:grid-cols-4">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => handleClick(item.href)} className="rounded-xl px-4 py-3 text-left text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white">
                  {item.label}
                </button>
              ))}
            </nav>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white md:hidden">
              <MessageCircle size={17} /> LINEで予約相談
            </a>
          </div>
        )}
      </>
    </header>
  );
}
