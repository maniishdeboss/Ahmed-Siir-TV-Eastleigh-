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
  // Link-ga aan soo helnay
  const m3u8Link = "https://tromeligheal.enrigeplsa202362to.site/live/ad3/index.m3u8";

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
            onClick={() => window.open(m3u8Link, '_blank')}
          >
            <div className="text-2xl mb-1">{league.icon}</div>
            <div className="font-semibold text-sm">{league.name}</div>
          </button>
        ))}
      </div>

      {/* Qaybta Stream-ka oo toos u furaya browser-ka */}
      <div className="bg-[#1A1A4B] p-6 rounded-2xl border border-gray-700 mb-8">
        <p className="mb-4 font-bold text-lg">Dooro Stream-ka:</p>
        <button 
          onClick={() => window.open(m3u8Link, '_blank')} 
          className="w-full bg-green-600 py-4 rounded-xl font-bold"
        >
          WATCH LIVE NOW
        </button>
      </div>
    </div>
  )
}
