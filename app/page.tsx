'use client'
import { useState } from 'react'

const LEAGUES = [
  { name: "FIFA World Cup 2026", icon: "🇸🇴 🏆🇬🇲 " },
  { name: "Premier League", icon: "🇬🇲🇸🇴 ⚽" },
  { name: "Champions League", icon: "⚽🇸🇴🇬🇲 " },
  { name: "La Liga", icon: "🇪🇸🇸🇴🇬🇲 " },
  { name: "Serie A", icon: "🇮🇹🇬🇲🇸🇴 " },
  { name: "Bundesliga", icon: "🇩🇪🇬🇲🇸🇴 " }
];

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>

      {/* Video Player Section */}
      {activeStream && (
        <div className="mb-6 w-full aspect-video">
          <iframe
            src={activeStream}
            className="w-full h-full rounded-lg border-2 border-white/20"
            allowFullScreen
          />
          <button 
            onClick={() => setActiveStream(null)}
            className="mt-2 w-full bg-slate-600 py-2 rounded-lg font-bold"
          >
            Close Player
          </button>
        </div>
      )}

      {/* League Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {LEAGUES.map((league) => (
          <button 
            key={league.name}
            className="bg-[#1A1A3F] p-4 rounded-lg text-left"
            onClick={() => setActiveStream("https://korazon.life/hard/2908c7d4425d87350.html?match=4697699")}
          >
            <div className="text-2xl mb-1">{league.icon}</div>
            <div className="font-semibold text-sm">{league.name}</div>
          </button>
        ))}
      </div>

      {/* Stream Selection Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          className="bg-blue-600 p-4 rounded-lg font-bold"
          onClick={() => setActiveStream("https://korazon.life/hard/2908c7d4425d87350.html?match=4697699")}
        >
          beIN SPORTS HD 1
        </button>
        
        <button 
          className="bg-green-600 p-4 rounded-lg font-bold"
          onClick={() => setActiveStream("https://korazon.life/hard/2908c7d4425d87350.html?match=4697699")}
        >
          Channel 5 (Test)
        </button>
      </div>

      {/* Support Button */}
      <div className="mt-6">
        <button className="w-full bg-purple-600 p-4 rounded-lg font-bold">
          Support Ahmed TV (Ad)
        </button>
      </div>
    </div>
  );
}
