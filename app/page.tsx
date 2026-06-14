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
  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>

      {/* XAYAYSIIN SARE OO WATSH NOW AH */}
      <div className="bg-gray-800 p-4 text-center rounded mb-6 border border-yellow-500">
        <p className="mb-2 text-sm">📺🇬🇲 Kusodawow Ahmed live 🇸🇴 TV adiga oo riixaya gambaleel😜 </p>
        <a 
          href="https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full bg-yellow-500 py-3 rounded-lg font-bold text-black"
        >
          WATCH NOW
        </a>
      </div>

      {/* League Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {LEAGUES.map((league) => (
          <a 
            key={league.name}
            href="https://www.siiiir.tv/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A3F] p-4 rounded-lg text-left block"
          >
            <div className="text-2xl mb-1">{league.icon}</div>
            <div className="font-semibold text-sm">{league.name}</div>
          </a>
        ))}
      </div>

      {/* Stream Selection Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <a href="https://www.siiiir.tv/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-lg font-bold text-center">beIN SPORTS HD 1</a>
        <a href="https://www.siiiir.tv/" target="_blank" rel="noopener noreferrer" className="bg-green-600 p-4 rounded-lg font-bold text-center">Stream 3</a>
        <a href="https://www.siiiir.tv/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-lg font-bold text-center">Stream 4</a>
        <a href="https://www.siiiir.tv/" target="_blank" rel="noopener noreferrer" className="bg-green-600 p-4 rounded-lg font-bold text-center">Stream 5</a>
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
