'use client'
import { useState } from 'react'

const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

// Xogta la diyaariyey si ay sawirro iyo qoraallo xirfad leh u yeeshaan
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026🏆📺⚽🇸🇴 ", subtitle: "Live Match", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Premier League🏆📺🇸🇴⚽ ", subtitle: "Super Sunday", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 3, title: "Champions League🏆📺🇸🇴⚽ ", subtitle: "Europe Nights", bg: "from-blue-600 to-cyan-700", icon: "🌍" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia 🇸🇴📺⚽ ", status: "Live Streaming", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia🇬🇲📺⚽ ", status: "Live Streaming", bg: "from-red-500 to-green-600" },
  { country: "Kenya 🇰🇪📺⚽ ", status: "Available", bg: "from-green-700 to-white/10" },
];

const HIGHLIGHTS = [
  { title: "Goals Highlights 🔥", duration: "10 min", desc: "All weekend goals" },
  { title: "Match Recap 📋", duration: "15 min", desc: "Full tactical breakdown" },
  { title: "Top Saves 🧤", duration: "5 min", desc: "Best goalkeeping" },
];

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<'home' | 'live' | 'movies'>('home');

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28 font-sans antialiased selection:bg-blue-500">
      
      {/* Top Banner & Header */}
      <div className="p-4 bg-gradient-to-b from-blue-950/40 to-[#06060f] border-b border-white/5">
        {/* Midabka magaca ayaa laga dhigay white aad u dhalaalaya oo leh shadow */}
        <h1 className="text-xl font-black tracking-wider text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-4">
          🇸🇴 Ahmed Abdikani LIVE TV 🇬🇲 📺
        </h1>

        {/* Dynamic Video Player Area */}
        {activeStream ? (
          <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 relative group">
            <iframe src={`${activeStream}?autoplay=1&mute=1`} className="w-full h-full" allowFullScreen />
            <button 
              onClick={() => setActiveStream(null)} 
              className="absolute top-3 right-3 bg-black/70 hover:bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold transition backdrop-blur-md"
            >
              ✕ Close Player
            </button>
          </div>
        ) : (
          <div 
            onClick={() => setActiveStream(STREAM_URL)}
            className="w-full aspect-video bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl flex flex-col items-center justify-center cursor-pointer border border-white/10 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center pl-1 text-2xl font-bold shadow-xl shadow-indigo-500/30 group-hover:scale-110 transition duration-300 z-10">▶</div>
            <p className="mt-4 font-bold tracking-wide text-sm text-white/90 z-10">Tap to Stream beIN SPORTS 1 HD</p>
          </div>
        )}
      </div>

      {/* HORIZONTAL SECTION 1: Sports Live (Cards Like StreamNext) */}
      <div className="mt-6">
        <div className="px-4 flex justify-between items-center mb-3">
          <h2 className="text-md font-extrabold tracking-wide text-white/90">Featured Sports</h2>
          <span className="text-xs text-blue-400 font-semibold cursor-pointer">See All</span>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 pb-3 scrollbar-none snap-x overflow-y-hidden">
          {SPORTS_CHANNELS.map((ch) => (
            <div 
              key={ch.id}
              onClick={() => setActiveStream(STREAM_URL)}
              className={`snap-center shrink-0 w-64 h-36 bg-gradient-to-br ${ch.bg} rounded-xl p-4 flex flex-col justify-between cursor-pointer border border-white/10 hover:scale-[1.02] transition active:scale-95`}
            >
              <div className="text-3xl bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">{ch.icon}</div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-black text-white/60">{ch.subtitle}</span>
                <h3 className="font-bold text-sm text-white leading-tight mt-0.5">{ch.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HORIZONTAL SECTION 2: Watch By Country */}
      <div className="mt-6">
        <div className="px-4 flex justify-between items-center mb-3">
          <h2 className="text-md font-extrabold tracking-wide text-white/90">Watch By Country</h2>
        </div>
        <div className="flex overflow-x-auto gap-3 px-4 pb-3 scrollbar-none snap-x overflow-y-hidden">
          {WATCH_BY_COUNTRY.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveStream(STREAM_URL)}
              className={`snap-center shrink-0 w-40 bg-gradient-to-b ${item.bg} p-4 rounded-xl flex flex-col justify-between h-28 border border-white/5 cursor-pointer`}
            >
              <div className="font-black text-lg">{item.country.split(' ')[1]}</div>
              <div>
                <h4 className="font-bold text-xs text-white">{item.country.split(' ')[0]}</h4>
                <p className="text-[10px] text-white/70 mt-0.5">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VERTICAL SECTION 3: Highlights List */}
      <div className="mt-6 px-4">
        <h2 className="text-md font-extrabold tracking-wide text-white/90 mb-3">Recent Match Highlights</h2>
        <div className="space-y-3">
          {HIGHLIGHTS.map((hl, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveStream(STREAM_URL)}
              className="bg-[#111122] p-3 rounded-xl border border-white/5 flex items-center justify-between cursor-pointer hover:bg-[#15152d] transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center text-md border border-white/5">🎬</div>
                <div>
                  <h4 className="font-bold text-xs text-white">{hl.title}</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">{hl.desc}</p>
                </div>
              </div>
              <span className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-gray-400 font-mono">{hl.duration}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STICKY BOTTOM NAVIGATION BAR (Sida StreamNext) */}
      <div className="fixed bottom-0 inset-x-0 bg-[#0c0c1a]/95 border-t border-white/10 backdrop-blur-lg px-6 py-3 flex justify-between items-center z-50">
        <button 
          onClick={() => setCurrentTab('home')}
          className={`flex flex-col items-center gap-1 transition ${currentTab === 'home' ? 'text-blue-400 font-bold scale-105' : 'text-gray-400 text-xs'}`}
        >
          <span className="text-lg">🏠</span>
          <span className="text-[10px]">Home</span>
        </button>
        <button 
          onClick={() => setCurrentTab('live')}
          className={`flex flex-col items-center gap-1 transition ${currentTab === 'live' ? 'text-blue-400 font-bold scale-105' : 'text-gray-400 text-xs'}`}
        >
          <span className="text-lg">📡</span>
          <span className="text-[10px]">Live TV</span>
        </button>
        <button 
          onClick={() => setCurrentTab('movies')}
          className={`flex flex-col items-center gap-1 transition ${currentTab === 'movies' ? 'text-blue-400 font-bold scale-105' : 'text-gray-400 text-xs'}`}
        >
          <span className="text-lg">🎬</span>
          <span className="text-[10px]">Browse</span>
        </button>
      </div>

    </div>
  );
}
