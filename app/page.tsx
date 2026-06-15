'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

// Waxaan ka saarnay STREAM_URL oo toos loo rarto
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026 🏆", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Champions league 🏆", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 3, title: "Premier League ⚽", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 4, title: "Wrestling WWE 💥", bg: "from-amber-500 to-yellow-600", icon: "💥" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia 🇸🇴", status: "Live", bg: "from-blue-500 to-blue-600", url: "https://www.youtube.com/embed/L0H0h6i8Lvs" },
  { country: "Ogadenia 🇬🇲", status: "Live", bg: "from-red-500 to-green-600", url: "https://siir-tv.com/bein-sport-1/" },
  { country: "Kenya 🇰🇪", status: "Live Stream", bg: "from-green-700 to-black", url: "https://www.youtube.com/embed/PdYWHAru73g" },
];

export default function HomePage() {
  // Waxaan ka dhignay initial state "null" si uusan waxba u rarin marka ugu horeysa
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28 font-sans">
      <div className="p-4 flex justify-between items-center border-b border-white/5">
        <h1 className="text-lg font-black truncate">Ahmed Abdikani LIVE TV 📺</h1>
      </div>

      <div className="p-4">
        {/* Haddii aysan jirin stream firfircoon, muuji fariin ama sanduuq madow */}
        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center relative">
          {activeStream ? (
            <iframe 
              src={`${activeStream}?autoplay=1`} 
              className="w-full h-full"
              allow="autoplay; encrypted-media" 
              allowFullScreen
            />
          ) : (
            <p className="text-white/50 text-sm">Fadlan dooro kanaal si aad u daawato</p>
          )}
        </div>
      </div>

      {/* Qaybta hoose sidiisii ayay u shaqaynaysaa */}
      <div className="px-4 mb-6">
        <h2 className="font-bold mb-3">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} className={`shrink-0 w-64 h-36 bg-gradient-to-br ${ch.bg} rounded-xl p-4`}>
              <h3 className="font-bold text-sm">{ch.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mb-6">
        <h2 className="font-bold mb-3">Watch By Country</h2>
        <div className="flex gap-3 overflow-x-auto">
          {WATCH_BY_COUNTRY.map((c, i) => (
            <div 
              key={i} 
              className={`shrink-0 w-32 h-24 bg-gradient-to-b ${c.bg} rounded-xl p-3 cursor-pointer`}
              onClick={() => setActiveStream(c.url)}
            >
              <p className="font-bold text-sm">{c.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
