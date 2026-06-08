'use client'
import Link from 'next/link'

type MainMatch = {
  id: number
  home_team: string
  away_team: string
  home_logo: string
  away_logo: string
  match_time: string
  link_1: string
  link_2: string
}

// Halkan ayaad ku beddeli kartaa link-yada ciyaaraha
const HOMEPAGE_MATCHES: MainMatch[] = [
  {
    id: 1,
    home_team: 'beIN SPORTS HD 1',
    away_team: 'Beinmatch Live',
    home_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
    away_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
    match_time: 'LIVE NOW',
    link_1: 'https://siiir.tv/',
    link_2: 'https://beinmatch26.com/bein/live/20160' 
  }
]

// Halkan waa link-gaaga Xayeysiiska
const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {
  
  const handleStreamClick = (streamUrl: string) => {
    window.open(ADSTERRA_URL, "_blank");
    window.open(streamUrl, "_blank");
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10 font-sans">
      <div className="bg-[#1A1A4B] p-4 text-center border-b border-gray-800 sticky top-0 z-50 shadow-lg">
        <h1 className="text-xl font-black tracking-wide">Ahmed Abdikani LIVE TV 🇸🇴 🖥️</h1>
      </div>

      <div className="p-4 max-w-xl mx-auto">
        <h2 className="text-xs font-bold text-yellow-400 mb-4 uppercase flex items-center gap-2">
          🔴 CIYAARAHA MAANTA TOOS U SOCDA
        </h2>

        <div className="space-y-4 mb-8">
          {HOMEPAGE_MATCHES.map((match) => (
            <div key={match.id} className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold">{match.home_team} vs {match.away_team}</span>
                <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[9px] font-bold animate-pulse">
                  {match.match_time}
                </span>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => handleStreamClick(match.link_1)}
                  className="flex-1 py-2.5 bg-green-600 rounded-xl text-xs font-black"
                >
                  Stream 1 (Live) ↗
                </button>
                <button 
                  onClick={() => handleStreamClick(match.link_2)}
                  className="flex-1 py-2.5 bg-yellow-500 text-black rounded-xl text-xs font-black"
                >
                  Stream 2 (Beinmatch) ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
