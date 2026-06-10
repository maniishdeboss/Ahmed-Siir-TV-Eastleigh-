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
  // Waxaan isticmaali doonaa 'activeIframe' si aan u xakameyno waxa soo baxaya
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>
      
      {/* Badhanka WATCH NOW */}
      <button 
        onClick={() => setActiveIframe('https://www.koratzone.com/  ')}
        className="w-full bg-red-600 py-4 rounded-lg font-black mb-6 animate-pulse"
      >
        WATCH NOW LIVE 🔴
      </button>

      {/* Liiska Horyaallada */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {LEAGUES.map((league) => (
          <div key={league.name} className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
            <span className="text-xl">{league.icon}</span>
            <p className="text-xs font-bold mt-2">{league.name}</p>
          </div>
        ))}
      </div>

      {/* Halkan waxaa ka muuqanaya Iframe-ka */}
      {activeIframe && (
        <div className="mb-6">
          <iframe 
            src={activeIframe} 
            className="w-full h-64 rounded-lg" 
            allow="autoplay; encrypted-media" 
            allowFullScreen
          ></iframe>
          <button 
            onClick={() => setActiveIframe(null)} 
            className="w-full mt-2 bg-gray-600 py-2 rounded-lg font-bold"
          >
            Close Player
          </button>
        </div>
      )}

      {/* Qaybta Stream-ka */}
      <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase">SELECT STREAM</h2>
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => window.open('https://beinmatch26.com/bein/live/20168', '_blank')} className="bg-blue-600 py-3 rounded-lg font-bold">Stream 1</button>
        <button onClick={() => window.open('https://beinmatch26.com/bein/live/20160', '_blank')} className="bg-blue-600 py-3 rounded-lg font-bold">Stream 2</button>
        <button onClick={() => setActiveIframe('https://www.youtube.com/embed/7UlI4-Gcbok')} className="bg-green-600 py-3 rounded-lg font-bold">Stream 3</button>
        <button onClick={() => setActiveIframe('https://www.youtube.com/embed/ntjJKCjNmcE')} className="bg-green-600 py-3 rounded-lg font-bold">Stream 4</button>
      </div>
    </div>
  )
}
