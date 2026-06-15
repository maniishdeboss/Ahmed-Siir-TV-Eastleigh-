'use client'
import { useState } from 'react'

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026 🏆", bg: "from-amber-500 to-yellow-600" },
  { id: 2, title: "Champions league 🏆", bg: "from-amber-500 to-yellow-600" },
  { id: 3, title: "Premier League ⚽", bg: "from-purple-600 to-indigo-700" },
  { id: 4, title: "Wrestling WWE 💥", bg: "from-amber-500 to-yellow-600" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia 🇸🇴", status: "Live", bg: "from-blue-500 to-blue-600", url: "https://www.youtube.com/embed/L0H0h6i8Lvs" },
  { country: "Ogadenia 🇬🇲", status: "Live", bg: "from-red-500 to-green-600", url: "https://siir-tv.com/bein-sport-1/" },
  { country: "Kenya 🇰🇪", status: "Live Stream", bg: "from-green-700 to-black", url: "https://www.youtube.com/embed/PdYWHAru73g" },
];

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans pb-10">
      {/* Header-kaaga cagaaran */}
      <div className="bg-[#84cc16] p-4 text-black font-bold text-lg shadow-lg">
        Ahmed sports live TV
      </div>
      
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Ahmed Abdikani LIVE TV 📺</h1>
        
        {/* Meesha fiidyowga (Wuxuu ahaanayaa mid madhan marka ugu horeysa) */}
        <div className="w-full aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
          {activeStream ? (
            <iframe 
              src={`${activeStream}?autoplay=1`} 
              className="w-full h-full rounded-2xl"
              allow="autoplay; encrypted-media" 
              allowFullScreen
            />
          ) : (
            <p className="text-white/40 text-sm">Fadlan dooro kanaal si aad u daawato</p>
          )}
        </div>

        {/* Featured Sports */}
        <h2 className="font-bold mb-3 text-white/90">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-6">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} className={`shrink-0 w-64 h-32 bg-gradient-to-br ${ch.bg} rounded-2xl p-4 flex flex-col justify-end shadow-md`}>
              <h3 className="font-bold text-sm">{ch.title}</h3>
            </div>
          ))}
        </div>

        {/* Watch By Country */}
        <h2 className="font-bold mb-3 text-white/90">Watch By Country</h2>
        <div className="flex gap-3">
          {WATCH_BY_COUNTRY.map((c, i) => (
            <div 
              key={i} 
              className={`flex-1 h-24 bg-gradient-to-b ${c.bg} rounded-2xl p-3 cursor-pointer border border-white/10 shadow-lg hover:opacity-90 transition-opacity`}
              onClick={() => setActiveStream(c.url)}
            >
              <p className="font-bold text-sm">{c.country}</p>
              <p className="text-[10px] text-white/70">{c.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
