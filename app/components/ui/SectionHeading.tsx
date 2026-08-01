"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  en: string;
  ja?: string;
  center?: boolean;
}

export default function SectionHeading({ en, ja, center = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 md:mb-16 ${center ? "text-center" : ""}`}
    >
      <div className={`mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-9 bg-brand-red" />
        <span className="font-heading text-[10px] font-bold tracking-[0.3em] text-brand-red">BOAT SEABASS 2FACE</span>
        {center && <span className="h-px w-9 bg-brand-red" />}
      </div>
      <h2 className="gradient-text font-heading text-4xl font-black leading-none tracking-[0.06em] md:text-6xl">
        {en}
      </h2>
      {ja && (
        <p className={`mt-4 text-xs font-medium tracking-[0.18em] text-gray-400 md:text-sm ${center ? "" : "ml-1"}`}>
          {ja}
        </p>
      )}
    </motion.div>
  );
}
