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

const ADSTERRA_LINK = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";
// Waxaan ku darnay query string-ga autoplay iyo mute
const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  const handleFifaPlay = () => {
    window.open(ADSTERRA_LINK, '_blank');
    setActiveStream(STREAM_URL);
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>

      {activeStream && (
        <div className="mb-6 w-full aspect-video relative">
          <iframe
            // Halkan ayaan ku darnay autoplay iyo mute (mute=1 ayaa ka hubsan inuu shaqeeyo)
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

      {/* ... (Koodhkii badhamada wuxuu ahaanayaa sidii hore) ... */}
    </div>
  );
}
