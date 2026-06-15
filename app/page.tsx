'use client'
import { useState } from 'react'

// --- DATA CONFIGURATION ---
const CHANNELS = [
  { id: 1, name: "beIN Sports 1", url: "https://siir-tv.com/bein-sport-1/" },
  { id: 2, name: "beIN Sports 2", url: "https://siir-tv.com/bein-sport-2/" },
  { id: 3, name: "Sky Sports", url: "https://siir-tv.com/sky-sports/" },
  { id: 4, name: "Kooora Live", url: "https://siir-tv.com/koora/" }
];

const LEAGUES = [
  { name: "World Cup 2026", icon: "🏆⚽📺🇸🇴🇬🇲", color: "from-amber-500 to-orange-700" },
  { name: "Premier League", icon: "⚽🇸🇴🇬🇲📺", color: "from-blue-500 to-indigo-700" },
  { name: "Champions League", icon: "⭐🇬🇲📺🇸🇴⚽", color: "from-indigo-600 to-purple-700" },
  { name: "La Liga", icon: "🇪🇸🇸🇴📺🇬🇲", color: "from-red-500 to-pink-700" },
  { name: "Serie A", icon: "🇮🇹🇬🇲🇸🇴📺⚽", color: "from-sky-500 to-blue-700" },
  { name: "Bundesliga", icon: "🇩🇪🇸🇴🇬🇲📺⚽", color: "from-gray-600 to-slate-800" }
];

export default function AhmedAbdikaniLiveTV() {
  const [activeTab, setActiveTab] = useState('LIVE');
  const [stream, setStream] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 font-sans selection:bg-purple-500">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-black italic tracking-tighter">AHMED <span className="text-purple-500">LIVE</span></h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Global Sports Broadcasting</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 animate-pulse" />
      </header>

      {/* PLAYER CONTAINER */}
      {stream && (
        <div className="mb-6 aspect-video rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/20 relative group">
          <iframe 
            src={stream} 
            className="w-full h-full" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            title="Live Stream"
          />
          <button 
            onClick={() => setStream(null)}
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold hover:bg-red-600 transition-colors"
          >
            STOP STREAM
          </button>
        </div>
      )}

      {/* NAVIGATION TABS */}
      <div className="flex gap-2 mb-6 bg-white/5 p-1 rounded-2xl">
        {['LIVE', 'HIGHLIGHTS', 'NEWS'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${activeTab === tab ? 'bg-purple-600 shadow-lg' : 'hover:bg-white/5'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT GRID */}
      <section>
        <h2 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Featured Leagues</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {LEAGUES.map((l) => (
            <button 
              key={l.name}
              className={`bg-gradient-to-br ${l.color} p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform shadow-lg`}
              onClick={() => setStream(CHANNELS[0].url)}
            >
              <span className="text-2xl">{l.icon}</span>
              <p className="font-bold text-sm mt-2">{l.name}</p>
            </button>
          ))}
        </div>

        {/* CHANNELS LIST */}
        <h2 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Available Streams</h2>
        <div className="space-y-3">
          {CHANNELS.map((ch) => (
            <button 
              key={ch.id}
              onClick={() => setStream(ch.url)}
              className="w-full flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all"
            >
              <span className="font-semibold text-sm">{ch.name}</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER AD */}
      <button 
        onClick={() => window.open("https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847", '_blank')}
        className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-black text-sm uppercase tracking-wider"
      >
        Support Ahmed TV
      </button>
    </div>
  );
}
