"use client";

import { Instagram } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="GALLERY" ja="釣果情報" center />

        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-medium px-6 py-3 rounded-full text-sm transition-all"
          >
            <Instagram size={18} />
            Instagramで最新釣果をチェック
          </a>
        </div>
      </div>
    </section>
  );
}
