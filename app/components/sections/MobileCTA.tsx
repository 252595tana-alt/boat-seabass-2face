"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { LINE_URL } from "../../siteConfig";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {visible && (
        <div

          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-bottom">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-red text-white font-bold px-6 py-3.5 rounded-full w-full text-base shadow-lg shadow-brand-red/30"
            >
              <MessageCircle size={20} />
              LINEで予約相談
            </a>
          </div>
        </div>
      )}
    </>
  );
}
