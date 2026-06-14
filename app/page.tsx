'use client'
import { useState } from 'react'

// Halkan ku beddel links-kaaga saxda ah
const BEIN_STREAM = "https://siir-tv.com/bein-sport-1/"; 

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#050510] min-h-screen text-white">
      {/* Header-ka oo leh magacaaga */}
      <div className="p-4 bg-gradient-to-b from-blue-900 to-[#050510]">
        <h1 className="text-xl font-bold text-center mb-4">Ahmed Abdikani LIVE TV 🔴</h1>
        
        {/* Player-ka */}
        {activeStream ? (
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/20">
                <iframe 
                    src={activeStream} 
                    className="w-full h-full" 
                    allowFullScreen 
                />
                <button onClick={() => setActiveStream(null)} className="w-full bg-red-600 py-1 text-sm">Close</button>
            </div>
        ) : (
            <div className="w-full aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
                <p>Select a channel to watch</p>
            </div>
        )}
      </div>

      {/* Buttons */}
      <div className="px-4 py-2 grid grid-cols-2 gap-3">
          <button 
            onClick={() => setActiveStream(BEIN_STREAM)}
            className="bg-[#101025] p-4 rounded-lg border border-blue-500"
          >
            <div className="text-2xl">🏆</div>
            <div className="font-bold">FIFA World Cup</div>
          </button>
          
          <button 
            onClick={() => setActiveStream(BEIN_STREAM)}
            className="bg-[#101025] p-4 rounded-lg border border-white/10"
          >
            <div className="text-2xl">⚽</div>
            <div className="font-bold">Premier League</div>
          </button>
      </div>
    </div>
  );
}
