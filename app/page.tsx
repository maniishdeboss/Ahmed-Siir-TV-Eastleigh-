'use client'
import { useState } from 'react'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV</h1>
      
      {/* Ads-ka oo saaran badhanka */}
      <a 
        href={ADSTERRA_URL} 
        target="_blank" 
        className="block w-full bg-red-600 py-4 rounded-lg font-black mb-6 text-center"
      >
        🔴 WATCH FOOTBALL LIVE NOW
      </a>

      {/* Player-ka marka ciyaar la doorto */}
      {activeUrl && (
        <div className="mb-6 h-64 w-full bg-black">
          <iframe 
            src={activeUrl} 
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}

      {/* Horyaallada */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
          <p className="text-xs font-bold">EPL</p>
          <div className="flex gap-2 mt-3">
            <button onClick={() => setActiveUrl('https://www.youtube.com/embed/VZoPxuna9uM')} className="flex-1 bg-blue-600 text-[10px] py-1 rounded">Stream 1</button>
            <button onClick={() => setActiveUrl('https://www.youtube.com/embed/K_Pw3qP4Cpc')} className="flex-1 bg-gray-600 text-[10px] py-1 rounded">Stream 2</button>
          </div>
        </div>
        {/* Ku dar horyaallada kale si la mid ah */}
      </div>
    </div>
  )
}
