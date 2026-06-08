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

// Xayeysiiska Adsterra (key)
const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {https://siiir.tv/
  
  const handleStreamClick = (streamUrl: string) => {
    window.open(ADSTERRA_URL, "_blank");
    window.open(streamUrl, "_blank");
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10 font-sans">
      
      <div className="bg-[#1A1A4B] p-4 text-center border-b border-gray-800 sticky top-0 z-50 shadow-lg">
        <h1 className="text-xl font-black tracking-wide flex items-center justify-center gap-2">
          Ahmed Abdikani LIVE TV 🇸🇴 🖥️
        </h1>
        <p className="text-[11px] text-gray-400 mt-0.5">Ciyaaraha Caalamiga ah oo Toos ah</p>
      </div>

      <div className="p-4 max-w-xl mx-auto">
        
        <h2 className="text-xs font-bold text-yellow-400 mb-4 tracking-wider uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          🔴 CIYAARAHA MAANTA TOOS U SOCDA
        </h2>

        <div className="space-y-4 mb-8">
          {HOMEPAGE_MATCHES.map((match) => (
            <div key={match.id} className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-800 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img src={match.home_logo} alt="home" className="w-9 h-9 rounded-full object-cover border border-gray-700" />
                  <span className="text-gray-200 font-bold text-xs">{match.home_team}</span>
                </div>
                <span className="text-[9px] bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-md font-extrabold animate-pulse">
                  {match.match_time}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-200 font-bold text-xs">{match.away_team}</span>
                  <img src={match.away_logo} alt="away" className="w-9 h-9 rounded-full object-cover border border-gray-700" />
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => handleStreamClick(match.link_1)}
                  className="flex-1 text-center py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl text-xs font-black transition-all shadow-md"
                >
                  Stream 1 (Live) ↗
                </button>
                <button 
                  onClick={() => handleStreamClick(match.link_2)}
                  className="flex-1 text-center py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black transition-all shadow-md"
                >
                  Stream 2 (Backup) ↗
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-xs font-bold text-gray-400 mb-3 tracking-wider uppercase">HORYAALLADA NAADIGA</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/league/fifa-world-cup" className="bg-[#1A1A4B] p-3.5 rounded-xl border border-gray-800 hover:border-blue-500 transition-all flex items-center gap-2.5">
              <span>⚽</span>
              <span className="text-xs font-bold">FIFA World Cup 2026</span>
            </Link>
            <Link href="/league/epl" className="bg-[#1A1A4B] p-3.5 rounded-xl border border-gray-800 hover:border-blue-500 transition-all flex items-center gap-2.5">
              <span>⚽</span>
              <span className="text-xs font-bold">EPL</span>
            </Link>
            <Link href="/league/uefa" className="bg-[#1A1A4B] p-3.5 rounded-xl border border-gray-800 hover:border-blue-500 transition-all flex items-center gap-2.5">
              <span>🏆</span>
              <span className="text-xs font-bold">UEFA Champions League</span>
            </Link>
            <Link href="/league/la-liga" className="bg-[#1A1A4B] p-3.5 rounded-xl border border-gray-800 hover:border-blue-500 transition-all flex items-center gap-2.5">
              <span>🇪🇸</span>
              <span className="text-xs font-bold">La Liga</span>
            </Link>
            <Link href="/league/serie-a" className="bg-[#1A1A4B] p-3.5 rounded-xl border border-gray-800 hover:border-blue-500 transition-all flex items-center gap-2.5">
              <span>🇮🇹</span>
              <span className="text-xs font-bold">Serie A</span>
            </Link>
            <Link href="/league/bundesliga" className="bg-[#1A1A4B] p-3.5 rounded-xl border border-gray-800 hover:border-blue-500 transition-all flex items-center gap-2.5">
              <span>🇩🇪</span>
              <span className="text-xs font-bold">Bundesliga</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
