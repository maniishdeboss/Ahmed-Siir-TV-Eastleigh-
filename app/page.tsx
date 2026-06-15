'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026🇸🇴⚽📺🏆 ", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Champions league 🇸🇴⚽📺🏆 ", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 3, title: "Premier League⚽📺🏆🇸🇴 ", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 4, title: "Wrestling WWE💥💫 🇸🇴⚽📺🏆 ", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia🇸🇴🇬🇲⚽📺 ", status: "Live", bg: "from-blue-500 to-blue-600", url: "" },
  { country: "Ogadenia🇬🇲🇸🇴📺 ", status: "Live", bg: "from-red-500 to-green-600", url: "" },
  { country: "Kenya🇰🇪📺 ", status: "Live Stream", bg: "from-green-700 to-black", url: "https://www.youtube.com/embed/PdYWHAru73g" },
];

const HIGHLIGHTS = [
  { title: "Goals Highlights 🔥", duration: "10 min", url: "https://www.youtube.com/embed/5h-camjSQ-4" },
  { title: "Best of Rey Mysterio Match Recap 📋", duration: "Live", url: "https://www.youtube.com/embed/2A_OLvCo_q8" },
  { title: "News Aljazira📺🇸🇴🇬🇲 ", duration: "Live", url: "https://www.youtube.com/embed/gCNeDWCI0vo" },
];

// ... (AdsterraBanner & OneSignalNotification components stay same)

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28 font-sans">
      {/* ... (Header) ... */}

      <div className="p-4">
        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 relative">
          <iframe 
            src={`${activeStream || STREAM_URL}?autoplay=1&mute=1`} 
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      </div>

      {/* ... (Adsterra & Featured Sports) ... */}

      <div className="px-4 mb-6">
        <h2 className="font-bold mb-3">Watch By Country</h2>
        <div className="flex gap-3 overflow-x-auto">
          {WATCH_BY_COUNTRY.map((c, i) => (
            <div 
              key={i} 
              className={`shrink-0 w-40 h-24 bg-gradient-to-b ${c.bg} rounded-xl p-3 cursor-pointer`}
              onClick={() => c.url && setActiveStream(c.url)}
            >
              <p className="font-bold text-sm">{c.country}</p>
              <p className="text-[10px] text-white/70">{c.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ... (Highlights section) ... */}
    </div>
  );
}
