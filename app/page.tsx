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
  const [activeIframe, setActiveIframe] = useState<string | null>(null);
  const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-black text-white">
          Ahmed Abdikani LIVE TV 🇸🇴 🇬🇲 🔴
        </h1>
      </header>

      {/* Qaybta Horyaallada */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {leagues.map(l => (
          <button key={l.id} className="bg-[#1A1A4B] p-4 rounded-xl font-bold border border-gray-700">
            {l.name}
          </button>
        ))}
      </div>

      {/* Qaybta Kanaallada iyo Stream-ka oo hadda wada socda */}
      <div className="bg-[#1A1A4B] p-6 rounded-2xl border border-gray-700 mb-8">
        <p className="mb-4 font-bold text-lg">Dooro Kanaalka:</p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button className="bg-gray-700 py-2 rounded-lg font-bold">Channel 1</button>
          <button className="bg-gray-700 py-2 rounded-lg font-bold">Channel 2</button>
          <button className="bg-gray-700 py-2 rounded-lg font-bold">Channel 3</button>
        </div>

        <p className="mb-4 font-bold text-lg">Dooro Stream-ka:</p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button onClick={() => openExternal('https://beinmatch26.com/bein/live/20155')} className="bg-blue-600 py-2 rounded-xl font-bold">Stream 1</button>
          <button onClick={() => openExternal('https://beinmatch26.com/bein/live/20154')} className="bg-blue-600 py-2 rounded-xl font-bold">Stream 2</button>
          <button onClick={() => openExternal('https://beinmatch26.com/bein/live/20153')} className="bg-blue-600 py-2 rounded-xl font-bold">Stream 3</button>
        </div>

        <button onClick={() => setActiveIframe('https://www.youtube.com/embed/7UlI4-Gcbok')} className="w-full bg-red-500 py-4 rounded-xl font-bold">
          YouTube Live (App-ka dhexdiisa)
        </button>
      </div>

      {/* Qaybta Player-ka */}
      {activeIframe && (
        <div className="bg-black p-2 rounded-xl mb-6">
          <iframe src={activeIframe} className="w-full h-64 rounded-lg" allowFullScreen />
          <button onClick={() => setActiveIframe(null)} className="w-full mt-2 bg-red-600 py-2 rounded-lg font-bold">Xir Player-ka</button>
        </div>
      )}
    </div>
  )
}
