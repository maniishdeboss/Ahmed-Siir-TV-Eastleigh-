'use client'
import { useState } from 'react'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV</h1>
      
      {/* Badhanka Cas */}
      <a href={ADSTERRA_URL} target="_blank" className="block w-full bg-red-600 py-4 rounded-lg font-black mb-6 text-center">
        🔴 WATCH FOOTBALL LIVE NOW
      </a>

      {/* Player-ka */}
      {activeUrl && (
        <div className="mb-6 h-64 w-full bg-black border border-red-600 rounded-lg overflow-hidden">
          <iframe src={activeUrl} className="w-full h-full" allowFullScreen allow="autoplay" />
        </div>
      )}

      {/* Live Stream Now (2 badhan) */}
      <div className="bg-[#1A1A4B] p-4 rounded-xl mb-6">
        <p className="text-sm font-bold mb-3">🔴 LIVE STREAM NOW</p>
        <div className="grid grid-cols-2 gap-2">
            <button onClick={() => setActiveUrl('https://beinmatch26.com/bein/live/20155')} className="bg-blue-600 py-2 rounded">Stream 1</button>
            <button onClick={() => setActiveUrl('https://beinmatch26.com/bein/live/20154')} className="bg-blue-600 py-2 rounded">Stream 2</button>
        </div>
      </div>

      {/* Horyaallada (4 channels mid walba) */}
      <div className="grid grid-cols-1 gap-4">
        {['EPL', 'FIFA World Cup 2026', 'Champions League', 'La Liga', 'Serie A'].map((league) => (
          <div key={league} className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
            <p className="text-sm font-bold mb-3">{league}</p>
            <div className="grid grid-cols-4 gap-2">
              <button onClick={() => setActiveUrl('https://www.youtube.com/embed/VZoPxuna9uM')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 1</button>
              <button onClick={() => setActiveUrl('https://www.youtube.com/embed/K_Pw3qP4Cpc')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 2</button>
              <button onClick={() => setActiveUrl('https://beinmatch26.com/bein/live/20155')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 3</button>
              <button onClick={() => setActiveUrl('https://beinmatch26.com/bein/live/20154')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 4</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
