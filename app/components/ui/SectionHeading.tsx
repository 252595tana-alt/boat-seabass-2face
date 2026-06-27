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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="w-1 h-10 bg-brand-red inline-block rounded-full" />
        <h2 className="font-heading font-black text-3xl md:text-4xl tracking-wider text-white uppercase">
          {en}
        </h2>
      </div>
      {ja && (
        <p className="mt-2 text-gray-400 text-sm md:text-base font-sans ml-7">
          {ja}
        </p>
      )}
    </motion.div>
  );
}
