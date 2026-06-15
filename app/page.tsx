'use client'
import { useState } from 'react'

const LEAGUES = [
  { name: "FIFA World Cup 2026", icon: "🏆", color: "from-amber-500 to-orange-600" },
  { name: "Premier League", icon: "⚽", color: "from-blue-500 to-indigo-600" },
  { name: "Champions League", icon: "⚽", color: "from-emerald-500 to-green-600" },
  { name: "La Liga", icon: "🇪🇸", color: "from-red-500 to-pink-600" },
  { name: "Serie A", icon: "🇮🇹", color: "from-sky-500 to-blue-600" },
  { name: "Bundesliga", icon: "🇩🇪", color: "from-gray-600 to-slate-700" }
];

const ADSTERRA_LINK = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";
const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  const handlePlay = (isAd: boolean) => {
    if (isAd) window.open(ADSTERRA_LINK, '_blank');
    setActiveStream(STREAM_URL);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Ahmeed Abdikani LIVE TV 🔴</h1>

      {activeStream && (
        <div className="mb-8 w-full aspect-video relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <iframe src={activeStream} className="w-full h-full" allowFullScreen />
          <button onClick={() => setActiveStream(null)} className="absolute top-2 right-2 bg-black/50 px-4 py-1 rounded-full text-xs font-bold">CLOSE</button>
        </div>
      )}

      {/* Featured Section */}
      <h2 className="text-lg font-semibold mb-4">Featured Sports</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {LEAGUES.map((league) => (
          <button 
            key={league.name}
            className={`bg-gradient-to-br ${league.color} p-5 rounded-2xl text-left transition-transform hover:scale-[1.02] shadow-lg`}
            onClick={() => handlePlay(league.name === "FIFA World Cup 2026")}
          >
            <div className="text-3xl mb-2">{league.icon}</div>
            <div className="font-bold text-sm leading-tight">{league.name}</div>
            <div className="text-[10px] opacity-80 mt-1">WATCH NOW</div>
          </button>
        ))}
      </div>

      {/* Support Button */}
      <button 
        className="w-full bg-white/5 border border-white/10 p-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white/10"
        onClick={() => window.open(ADSTERRA_LINK, '_blank')}
      >
        <span>Support Ahmed TV (Ad)</span>
      </button>
    </div>
  );
}
