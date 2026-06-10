'use client'
import { useState } from 'react'
import ReactPlayer from 'react-player'

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

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>
      
      {activeStream && (
        <div className="mb-6">
          <div className="w-full h-[50vh] bg-black border border-gray-600 rounded-lg overflow-hidden">
             <ReactPlayer 
               url={activeStream}
               width="100%"
               height="100%"
               controls={true}
               playing={true}
             />
          </div>
          <button 
            onClick={() => setActiveStream(null)} 
            className="w-full mt-2 bg-gray-600 py-2 rounded-lg font-bold"
          >
            Close Player
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 mb-8">
        {LEAGUES.map((league) => (
          <div key={league.name} className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
            <span className="text-xl">{league.icon}</span>
            <p className="text-xs font-bold mt-2">{league.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase">SELECT STREAM</h2>
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => window.open('https://beinmatch26.com/bein/live/20154', '_blank')} className="bg-blue-600 py-3 rounded-lg font-bold">beIN SPORTS HD 1</button>
        <button onClick={() => setActiveStream('https://www.youtube.com/embed/ntjJKCjNmcE')} className="bg-green-600 py-3 rounded-lg font-bold">YouTube Live Match</button>
        
        {/* Channel 4: Siiiiir.tv */}
        <button onClick={() => window.open('https://www.siiiiir.tv/', '_blank')} className="bg-blue-600 py-3 rounded-lg font-bold">Channel 4</button>
        
        {/* Channel 5: Test video */}
        <button onClick={() => setActiveStream('https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8')} className="bg-green-600 py-3 rounded-lg font-bold">Channel 5 (Test)</button>

        <button onClick={() => window.open('https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847', '_blank')} className="bg-purple-600 py-3 rounded-lg font-bold col-span-2">Support Ahmed TV (Ad)</button>
      </div>
    </div>
  )
}
