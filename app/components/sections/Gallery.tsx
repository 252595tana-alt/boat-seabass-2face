"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { INSTAGRAM_URL } from "../../siteConfig";

const catches = [
  {
    src: "/catch-seabass.jpg",
    alt: "ビッグベイトで釣り上げたシーバス",
    label: "SEABASS",
    title: "ビッグベイトシーバス",
  },
  {
    src: "/catch-akame.jpg",
    alt: "ボートから釣り上げた大型のアカメ",
    label: "AKAME",
    title: "憧れのアカメ",
  },
  {
    src: "/catch-hirame.jpg",
    alt: "吉野川で釣り上げた大型のヒラメ",
    label: "FLATFISH",
    title: "モンスターヒラメ",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="GALLERY" ja="釣果情報" center />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {catches.map((item, index) => (
            <a
              key={item.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"

              className="group relative h-80 overflow-hidden rounded-2xl border border-white/5 bg-brand-dark"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-heading text-xs font-bold tracking-[0.22em] text-brand-red">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-bold text-white">{item.title}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-red text-white hover:text-brand-red font-medium px-6 py-3 rounded-full text-sm transition-all"
          >
            <Instagram size={18} />
            公式Instagramで最新釣果を見る
          </a>
        </div>
      </div>
    </section>
  );
}
