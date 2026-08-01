"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "../../siteConfig";

const navItems = [
  { label: "TOP", href: "#top" },
  { label: "2FACEについて", href: "#about" },
  { label: "ガイドプラン", href: "#plan" },
  { label: "船・設備", href: "#boat" },
  { label: "船長紹介", href: "#captain" },
  { label: "料金", href: "#price" },
  { label: "空き状況", href: "#calendar" },
  { label: "釣果情報", href: "#gallery" },
  { label: "アクセス", href: "#access" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleClick("#top")}
          className="font-heading font-black text-xl md:text-2xl tracking-widest"
        >
          <span className="text-brand-red">2</span>
          <span className="text-white">FACE</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-gray-300 hover:text-white text-xs xl:text-sm font-medium transition-colors hover:text-brand-red whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Reservation CTA */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
        >
          <Instagram size={16} />
          予約相談
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 border-t border-white/10"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-gray-300 hover:text-white hover:bg-white/5 px-6 py-3 text-left text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-4 pb-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-red text-white font-bold px-6 py-3 rounded-full w-full"
                >
                  <Instagram size={18} />
                  Instagramで予約相談
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
