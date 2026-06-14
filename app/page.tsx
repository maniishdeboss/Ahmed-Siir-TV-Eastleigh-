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

// Halkan waa Smartlink-gaaga cusub ee Adsterra
const ADSTERRA_SMARTLINK = "https://lasereither.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";
const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  // Shaqadan ayaa loogu talagalay badhanka FIFA (Smartlink + Stream)
  const handleFifaPlay = () => {
    window.open(ADSTERRA_SMARTLINK, '_blank');
    setActiveStream(STREAM_URL);
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>

      {/* Video Player Section */}
      {activeStream && (
        <div className="mb-6 w-full aspect-video relative">
          <iframe
            src={`${activeStream}?autoplay=1&mute=1`}
            className="w-full h-full rounded-lg border-2 border-white/20"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <button 
            onClick={() => setActiveStream(null)}
            className="mt-2 w-full bg-slate-600 py-2 rounded-lg font-bold"
          >
            Close Player
          </button>
        </div>
      )}

      {/* League Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {LEAGUES.map((league) => (
          <button 
            key={league.name}
            className="bg-[#1A1A3F] p-4 rounded-lg text-left"
            onClick={
              league.name === "FIFA World Cup 2026" 
                ? handleFifaPlay 
                : () => setActiveStream(STREAM_URL)
            }
          >
            <div className="text-2xl mb-1">{league.icon}</div>
            <div className="font-semibold text-sm">{league.name}</div>
          </button>
        ))}
      </div>

      {/* Stream Selection Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[
          { name: "beIN SPORTS HD 1", color: "bg-blue-600" },
          { name: "Stream 3", color: "bg-green-600" },
          { name: "Stream 4", color: "bg-blue-600" },
          { name: "Stream 5", color: "bg-green-600" }
        ].map((stream) => (
          <button 
            key={stream.name}
            className={`${stream.color} p-4 rounded-lg font-bold`}
            onClick={() => setActiveStream(STREAM_URL)}
          >
            {stream.name}
          </button>
        ))}
      </div>

      {/* Support Button */}
      <div className="mt-6">
        <button 
          className="w-full bg-purple-600 p-4 rounded-lg font-bold"
          onClick={() => window.open(ADSTERRA_SMARTLINK, '_blank')}
        >
          Support Ahmed TV (Ad)
        </button>
      </div>
    </div>
  );
}
