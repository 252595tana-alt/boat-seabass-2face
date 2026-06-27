"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-bottom">
            <a
              href="https://line.me/R/ti/p/@2face"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-red text-white font-bold px-6 py-3.5 rounded-full w-full text-base shadow-lg shadow-brand-red/30"
            >
              <MessageCircle size={20} />
              LINEで予約する
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
