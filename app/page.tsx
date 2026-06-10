'use client'
import { useState } from 'react'

const leagues = [
  { name: 'FIFA World Cup 2026 🏆', id: 'fifa', url: 'https://beinmatch26.com/bein/live/20155' },
  { name: 'Premier League ⚽', id: 'epl', url: 'https://beinmatch26.com/bein/live/20154' },
  { name: 'UEFA Champions League 🏆', id: 'ucl', url: 'https://www.youtube.com/embed/7UlI4-Gcbok' },
  { name: 'La Liga 🇪🇸', id: 'laliga', url: 'https://beinmatch26.com/bein/live/20153' },
  { name: 'Serie A 🇮🇹', id: 'seriea', url: 'https://beinmatch26.com/bein/live/20152' },
  { name: 'Bundesliga 🇩🇪', id: 'bundesliga', url: 'https://beinmatch26.com/bein/live/20151' },
];

export default function HomePage() {
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  const handleLeagueClick = (url: string) => {
    setActiveIframe(url);
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-black text-white">
          Ahmed Abdikani LIVE TV 🔴
        </h1>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {leagues.map(l => (
          <button key={l.id} onClick={() => handleLeagueClick(l.url)} className="bg-[#1A1A4B] p-4 rounded-xl font-bold border border-gray-700">
            {l.name}
          </button>
        ))}
      </div>

      <div className="bg-[#1A1A4B] p-6 rounded-2xl border border-gray-700 mb-8">
        <p className="mb-4 font-bold text-lg">Select Stream:</p>
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button 
            onClick={() => { 
              window.open('https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847', '_blank'); 
              setActiveIframe('https://beinmatch26.com/bein/live/20155'); 
            }} 
            className="bg-blue-600 py-2 rounded-xl font-bold"
          >
            Stream 1
          </button>
          <button onClick={() => setActiveIframe('https://beinmatch26.com/bein/live/20154')} className="bg-blue-600 py-2 rounded-xl font-bold">Stream 2</button>
          <button onClick={() => setActiveIframe('https://beinmatch26.com/bein/live/20153')} className="bg-blue-600 py-2 rounded-xl font-bold">Stream 3</button>
        </div>
      </div>

      {activeIframe && (
        <div className="bg-black p-2 rounded-xl mb-6">
          <iframe src={activeIframe} className="w-full h-64 rounded-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <button onClick={() => setActiveIframe(null)} className="w-full mt-2 bg-red-600 py-2 rounded-lg font-bold">Close Player</button>
        </div>
      )}
    </div>
  )
}
