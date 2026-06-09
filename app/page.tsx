'use client'
import { useState } from 'react'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

const leagues = [
  { name: 'FIFA World Cup 2026', id: 'fifa' },
  { name: 'EPL', id: 'epl' },
  { name: 'UEFA Champions League', id: 'ucl' },
  { name: 'La Liga', id: 'laliga' },
  { name: 'Serie A', id: 'seriea' },
  { name: 'Bundesliga', id: 'bundesliga' },
];

export default function HomePage() {
  const [selectedLeague, setSelectedLeague] = useState<string | null>(null);

  const handleStreamClick = () => {
    window.open('https://beinmatch26.com/bein/live/20155', '_blank');
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      {/* Magacaaga oo si fiican u muuqda */}
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
          Ahmed Abdikani LIVE TV 🇸🇴🇬🇲🔴
        </h1>
      </header>

      {!selectedLeague ? (
        <>
          <div className="grid grid-cols-2 gap-4">
            {leagues.map(l => (
              <button key={l.id} onClick={() => setSelectedLeague(l.id)} className="bg-[#1A1A4B] p-4 rounded-xl text-center font-bold border border-gray-700 hover:border-red-500 transition-all">
                {l.name}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => setSelectedLeague(null)} className="mb-4 text-blue-400 font-bold">← Dib u noqo</button>
          <h2 className="text-xl font-bold mb-4 text-red-500">{leagues.find(l => l.id === selectedLeague)?.name}</h2>
          
          <a href={ADSTERRA_URL} target="_blank" className="block w-full bg-red-600 py-4 rounded-xl font-black mb-6 text-center animate-pulse">
            🔴 WATCH FOOTBALL LIVE NOW
          </a>

          <div className="bg-[#1A1A4B] p-6 rounded-2xl border border-gray-700">
            <p className="mb-4 font-bold text-lg">Dooro Link-ga Daawashada:</p>
            {/* Badhannada Stream-ka oo si fudud loo taaban karo */}
            <div className="grid grid-cols-2 gap-4">
              <button onClick={handleStreamClick} className="bg-blue-600 py-5 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform">
                Stream 1
              </button>
              <button onClick={handleStreamClick} className="bg-blue-600 py-5 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform">
                Stream 2
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
