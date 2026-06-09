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
  const [showStream, setShowStream] = useState(false);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      {/* Haddii aan Horyaal la dooran, tus liiska */}
      {!selectedLeague ? (
        <>
          <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani Live</h1>
          <p className="text-center text-sm mb-4">Select a league to watch live</p>
          <div className="grid grid-cols-2 gap-4">
            {leagues.map(l => (
              <button key={l.id} onClick={() => setSelectedLeague(l.id)} className="bg-[#1A1A4B] p-6 rounded-lg text-center font-bold">
                {l.name}
              </button>
            ))}
          </div>
        </>
      ) : (
        /* Haddii Horyaal la doorto, tus bogga ciyaarta */
        <div>
          <button onClick={() => { setSelectedLeague(null); setShowStream(false); }} className="mb-4 text-blue-400">← Back</button>
          <h2 className="text-xl font-bold mb-4">{leagues.find(l => l.id === selectedLeague)?.name}</h2>
          
          <a href="https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847" target="_blank" className="block w-full bg-red-600 py-3 rounded-lg font-black mb-6 text-center">
            🔴 WATCH FOOTBALL LIVE NOW
          </a>

          <div className="bg-[#1A1A4B] p-4 rounded-lg">
            <p className="mb-4">beIN SPORTS 5 HD <span className="bg-red-600 text-[10px] p-1 rounded ml-2">LIVE</span></p>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setShowStream(true)} className="bg-blue-600 py-2 rounded">Stream 1</button>
              <button onClick={() => setShowStream(true)} className="bg-blue-600 py-2 rounded">Stream 2</button>
            </div>
          </div>

          {/* Qaybta Player-ka */}
          {showStream && (
            <div className="mt-6 bg-[#0A0A23] border border-gray-600 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Ahmed LIVE TV PLAYER</span>
                <button onClick={() => setShowStream(false)} className="bg-gray-700 px-3 py-1 rounded text-xs">Xir Player-ka</button>
              </div>
              <p className="text-sm mb-4">Baahintu Waxay Diyaar Ku Tahay Stream-ka. Si aad u daawato ciyaarta... <br/> <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="text-red-500 font-bold block mt-2">Foor Baahinta Tooska Ah ↗</a></p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
