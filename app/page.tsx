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
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

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
          <button onClick={() => { setSelectedLeague(null); setActiveIframe(null); }} className="mb-4 text-blue-400 font-bold">← Dib u noqo</button>
          <h2 className="text-2xl font-bold mb-4 text-red-500">{leagues.find(l => l.id === selectedLeague)?.name}</h2>
          
          {activeIframe ? (
            <div className="bg-black p-2 rounded-xl mb-6">
              <iframe src={activeIframe} className="w-full h-64 rounded-lg" allowFullScreen />
              <button onClick={() => setActiveIframe(null)} className="w-full mt-2 bg-red-600 py-2 rounded-lg font-bold">Xir Player-ka</button>
            </div>
          ) : (
            <div className="bg-[#1A1A4B] p-6 rounded-2xl border border-gray-700">
              <p className="mb-4 font-bold text-lg">Dooro Link-ga Daawashada:</p>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => openExternal('https://beinmatch26.com/bein/live/20155')} className="bg-blue-600 py-4 rounded-xl font-bold">Stream 1</button>
                <button onClick={() => openExternal('https://beinmatch26.com/bein/live/20154')} className="bg-blue-600 py-4 rounded-xl font-bold">Stream 2</button>
                {/* Link-ga YouTube-ka cusub oo la geliyay */}
                <button onClick={() => setActiveIframe('https://www.youtube.com/embed/7UlI4-Gcbok')} className="bg-red-500 py-4 rounded-xl font-bold col-span-2">YouTube Live (App-ka dhexdiisa)</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
