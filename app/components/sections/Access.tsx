"use client";

import SectionHeading from "../ui/SectionHeading";
import { MapPin, Car, Clock } from "lucide-react";
import { MAP_EMBED_URL, MAP_URL, MARINA_ADDRESS } from "../../siteConfig";

const info = [
  { icon: MapPin, label: "集合場所", value: "四国マリーナ" },
  { icon: MapPin, label: "住所", value: MARINA_ADDRESS },
  { icon: Car, label: "駐車場", value: "無料駐車場あり" },
  { icon: Clock, label: "集合時間", value: "出発時間の30分前（要確認）" },
];

export default function Access() {
  return (
    <section id="access" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading en="ACCESS" ja="アクセス" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div

            className="rounded-2xl overflow-hidden border border-white/5"
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="四国マリーナ マップ"
            />
          </div>

          {/* Info */}
          <div

          >
            <div className="bg-brand-gray border border-white/5 rounded-2xl p-6 mb-6">
              <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                <MapPin size={18} className="text-brand-red" />
                四国マリーナ
              </h3>
              <div className="space-y-4">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={14} className="text-brand-red" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-medium px-6 py-3 rounded-full text-sm transition-all w-full"
            >
              <MapPin size={16} />
              Googleマップで見る
            </a>

            <div className="mt-6 bg-brand-red/5 border border-brand-red/20 rounded-xl p-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-brand-red font-bold">集合場所：</span>
                四国マリーナ（徳島市川内町）です。
                駐車場は無料でご利用いただけます。
                集合時間の詳細はLINEにてご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
