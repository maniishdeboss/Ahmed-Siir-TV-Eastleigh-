'use client'
import { useState } from 'react'

const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  const renderButton = (name: string, icon: string) => (
    <button 
      onClick={() => setActiveStream(STREAM_URL)}
      className="bg-[#101025] p-3 rounded-lg border border-white/5 hover:border-blue-500 font-semibold text-sm flex items-center justify-center gap-2 transition"
    >
      <span>{icon}</span> {name}
    </button>
  );

  return (
    <div className="bg-[#050510] min-h-screen text-white pb-20">
      <h1 className="text-xl font-bold text-center pt-6 mb-4">
        🇸🇴 Ahmed Abdikani LIVE TV 🇬🇲 📺
      </h1>
      
      {/* Player Section */}
      {activeStream && (
        <div className="px-4 mb-4">
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/20">
            <iframe src={`${activeStream}?autoplay=1&mute=1`} className="w-full h-full" allowFullScreen />
          </div>
          <button onClick={() => setActiveStream(null)} className="w-full mt-2 bg-red-900/50 py-1 rounded-lg text-xs">Close</button>
        </div>
      )}

      {/* Leagues */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {renderButton("FIFA World Cup 🇸🇴🇬🇲", "🏆")}
        {renderButton("Premier League 🇸🇴🇬🇲", "⚽")}
      </div>

      {/* Channels & Streams */}
      <div className="px-4 py-4">
        <h3 className="text-gray-400 font-bold mb-3 text-sm uppercase">Channels & Streams</h3>
        <div className="grid grid-cols-2 gap-3">
          {renderButton("Channel 1 📺", "📡")}
          {renderButton("Channel 2 📺", "📡")}
          {renderButton("Stream 1 ⚡", "▶️")}
          {renderButton("Stream 2 ⚡", "▶️")}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="px-4 py-2">
        <h3 className="text-gray-400 font-bold mb-3 text-sm uppercase">Match Highlights</h3>
        <div className="grid grid-cols-1 gap-3">
          {renderButton("Goals Highlights ⚽🔥", "🎬")}
          {renderButton("Match Recap 📋", "🎬")}
          {renderButton("Top Saves 🧤", "🎬")}
          {renderButton("Best Skills 👟", "🎬")}
        </div>
      </div>
    </div>
  );
}
