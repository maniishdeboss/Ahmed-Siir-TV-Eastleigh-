'use client'
import { useState } from 'react'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

const LEAGUES = [
  { name: "FIFA World Cup 2026", icon: "🏆" },
  { name: "Premier League", icon: "⚽" },
  { name: "Champions League", icon: "⚽" },
  { name: "La Liga", icon: "🇪🇸" },
  { name: "Serie A", icon: "🇮🇹" },
  { name: "Bundesliga", icon: "🇩🇪" }
];

export default function HomePage() {
  const handleStreamClick = (url: string) => {
    window.open(ADSTERRA_URL, "_blank");
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV</h1>
      
      {/* Badhanka Cas ee WATCH NOW LIVE */}
      <button 
        onClick={() => handleStreamClick('https://beinmatch26.com/bein/live/20160')}
        className="w-full bg-red-600 py-4 rounded-lg font-black mb-6 animate-pulse flex justify-center items-center gap-2"
      >
        WATCH NOW LIVE 🔴
      </button>

      {/* Liiska Horyaallada */}
      <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase">LEAGUES</h2>
      <div className="grid grid-cols-2 gap-3">
        {LEAGUES.map((league) => (
          <div key={league.name} className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
            <span className="text-xl">{league.icon}</span>
            <p className="text-xs font-bold mt-2">{league.name}</p>
            <div className="flex gap-2 mt-3">
              <button onClick={() => handleStreamClick('https://beinmatch26.com/bein/live/20160')} className="flex-1 bg-blue-600 text-[10px] py-1 rounded font-bold">Stream 1</button>
              <button onClick={() => handleStreamClick('https://beinmatch26.com/bein/live/20160')} className="flex-1 bg-gray-600 text-[10px] py-1 rounded font-bold">Stream 2</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
