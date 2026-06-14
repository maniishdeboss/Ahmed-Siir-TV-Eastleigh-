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
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <header className="mb-8 text-center">
        <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>
      </header>

      {/* Qaybta Horyaallada */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {LEAGUES.map((league) => (
          <button 
            key={league.name}
            className="bg-[#1A1A3F] p-4 rounded-lg text-left border border-gray-700"
            onClick={() => setActiveUrl('https://siiiir.tv')}
          >
            <div className="text-2xl mb-1">{league.icon}</div>
            <div className="font-semibold text-sm">{league.name}</div>
          </button>
        ))}
      </div>

      {/* Qaybta Player-ka */}
      {activeUrl && (
        <div className="fixed inset-0 bg-black z-50 p-2 flex flex-col">
          <div className="flex-1">
            <iframe 
              src={activeUrl}
              className="w-full h-full border-none"
              allow="autoplay; fullscreen; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
          <button 
            onClick={() => setActiveUrl(null)} 
            className="bg-red-600 py-4 mt-2 rounded-xl font-bold"
          >
            Close Player
          </button>
        </div>
      )}
    </div>
  )
}
