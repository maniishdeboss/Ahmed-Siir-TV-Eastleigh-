'use client'
import { useState } from 'react'

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

  // Habka furaya link-ga browser-ka
  const openStream = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-black text-white">
          Ahmed Abdikani LIVE TV 🇸🇴 🇬🇲 🔴
        </h1>
      </header>

      {!selectedLeague ? (
        <div className="grid grid-cols-2 gap-4">
          {leagues.map(l => (
            <button key={l.id} onClick={() => setSelectedLeague(l.id)} className="bg-[#1A1A4B] p-4 rounded-xl font-bold border border-gray-700">
              {l.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedLeague(null)} className="mb-4 text-blue-400 font-bold">← Dib u noqo</button>
          <h2 className="text-2xl font-bold mb-4 text-red-500">{leagues.find(l => l.id === selectedLeague)?.name}</h2>
          
          <a href="https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847" target="_blank" className="block w-full bg-red-600 py-4 rounded-xl font-black mb-6 text-center">
            🔴 WATCH FOOTBALL LIVE NOW
          </a>

          <div className="bg-[#1A1A4B] p-6 rounded-2xl border border-gray-700">
            <p className="mb-4 font-bold text-lg">Dooro Link-ga Daawashada:</p>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => openStream('https://beinmatch26.com/bein/live/20155')} className="bg-blue-600 py-4 rounded-xl font-bold">Stream 1</button>
              <button onClick={() => openStream('https://beinmatch26.com/bein/live/20154')} className="bg-blue-600 py-4 rounded-xl font-bold">Stream 2</button>
              <button onClick={() => openStream('https://www.youtube.com/embed/live_stream?channel=UC4QobU0R94nF_N-8e0s7T5w')} className="bg-red-500 py-4 rounded-xl font-bold col-span-2">YouTube Live</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
