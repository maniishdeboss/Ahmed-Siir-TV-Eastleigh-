'use client'
import { useState } from 'react'

const LEAGUES = [
  { name: "FIFA World Cup 2026", icon: "🏆" },
  { name: "Premier League", icon: "⚽" },
  { name: "Champions League", icon: "🌍" },
  { name: "La Liga", icon: "🇪🇸" }
];

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#050510] min-h-screen text-white">
      {/* 1. Header-ka weyn ee leh beIN Sports */}
      <div className="p-4 bg-gradient-to-b from-blue-900 to-[#050510]">
        <h2 className="text-lg font-bold mb-2">Featured Live</h2>
        <div className="w-full aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
          <span className="text-4xl font-bold text-blue-500">beIN SPORTS 1</span>
        </div>
      </div>

      {/* 2. Qaybta qaybaha (Categories) */}
      <div className="px-4 py-2">
        <h3 className="text-sm text-gray-400 font-semibold mb-3">Live Sports</h3>
        <div className="grid grid-cols-2 gap-3">
          {LEAGUES.map((league) => (
            <div key={league.name} className="bg-[#101025] p-4 rounded-lg border border-white/5 hover:border-blue-500 transition">
              <div className="text-3xl mb-2">{league.icon}</div>
              <div className="font-bold text-sm">{league.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bottom Navigation (sida app-yada kale) */}
      <div className="fixed bottom-0 w-full bg-[#101025] p-4 flex justify-between border-t border-white/10">
        <div className="text-center text-blue-500">Home</div>
        <div className="text-center text-gray-500">Live TV</div>
        <div className="text-center text-gray-500">Movies</div>
      </div>
    </div>
  );
}
