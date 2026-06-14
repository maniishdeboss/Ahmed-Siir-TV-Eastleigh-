'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Waxaan u isticmaalay dynamic import si looga fogaado khaladka server-side rendering (SSR)
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

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
  const [isClient, setIsClient] = useState(false);
  const m3u8Link = "https://tromeligheal.enrigeplsa202362to.site/live/ad3/index.m3u8";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <header className="mb-8 text-center">
        <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {LEAGUES.map((league) => (
          <button 
            key={league.name}
            className="bg-[#1A1A3F] p-4 rounded-lg text-left border border-gray-700"
            onClick={() => setActiveStream(m3u8Link)}
          >
            <div className="text-2xl mb-1">{league.icon}</div>
            <div className="font-semibold text-sm">{league.name}</div>
          </button>
        ))}
      </div>

      <div className="bg-[#1A1A4B] p-6 rounded-2xl border border-gray-700 mb-8">
        <p className="mb-4 font-bold text-lg">Dooro Stream-ka:</p>
        <button 
          onClick={() => setActiveStream(m3u8Link)} 
          className="w-full bg-green-600 py-4 rounded-xl font-bold"
        >
          WATCH LIVE NOW
        </button>
      </div>

      {activeStream && isClient && (
        <div className="bg-black p-2 rounded-xl mb-6">
          <ReactPlayer 
            url={activeStream} 
            playing={true} 
            controls={true} 
            width="100%" 
            height="300px"
            config={{
              file: {
                forceHLS: true, // Waxay ku qasbaysaa player-ka inuu ula dhaqmo sidii HLS
              }
            }}
          />
          <button 
            onClick={() => setActiveStream(null)} 
            className="w-full mt-2 bg-red-600 py-2 rounded-lg font-bold"
          >
            Xir Player-ka
          </button>
        </div>
      )}
    </div>
  )
}
