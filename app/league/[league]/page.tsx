'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  // Markii badhanka cas la riixo, wuxuu toos u geynayaa bogga Zee TV oo baahintu ka shaqaynayso
  const handleWatchLiveClick = () => {
    router.push('/zee-tv')
  }

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10">
      {/* Header */}
      <div className="bg-[#1A1A4B] p-6 text-center shadow-lg border-b border-slate-800">
        <h1 className="text-2xl font-black tracking-wide flex items-center justify-center gap-2">
          Ahmed Abdikani Live 🇸🇴🇬🇲🇨🇦🔴
        </h1>
        <p className="text-xs text-gray-400 mt-1">Select a league to watch live</p>
      </div>

      <div className="max-w-xl mx-auto p-4">
        {/* BADHANKA CAS: Hadda YouTube waa laga saaray, wuxuu toos u kicinayaa Live TV-ga */}
        <button
          onClick={handleWatchLiveClick}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-center py-4 rounded-xl mb-6 shadow-lg shadow-red-900/30 active:scale-98 transition-all flex items-center justify-center gap-2 text-lg"
        >
          🔴 WATCH LIVE NOW
        </button>

        {/* GRIDS-KA HORYAALLADA */}
        <div className="grid grid-cols-2 gap-4">
          <Link 
            href="/zee-tv" 
            className="bg-[#1A1A4B] border border-slate-800/60 p-5 rounded-xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all hover:border-blue-500/50"
          >
            <span className="text-3xl">📺</span>
            <span className="font-bold text-sm">Zee TV / World</span>
          </Link>

          <Link 
            href="/fifa-world-cup-2026" 
            className="bg-[#1A1A4B] border border-slate-800/60 p-5 rounded-xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all hover:border-blue-500/50"
          >
            <span className="text-3xl">🏆</span>
            <span className="font-bold text-sm">FIFA World Cup 2026</span>
          </Link>

          <Link 
            href="/epl" 
            className="bg-[#1A1A4B] border border-slate-800/60 p-5 rounded-xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all hover:border-blue-500/50"
          >
            <span className="text-3xl">⚽</span>
            <span className="font-bold text-sm">EPL</span>
          </Link>

          <Link 
            href="/uefa-champions-league" 
            className="bg-[#1A1A4B] border border-slate-800/60 p-5 rounded-xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all hover:border-blue-500/50"
          >
            <span className="text-3xl">⭐</span>
            <span className="font-bold text-sm">UEFA Champions League</span>
          </Link>

          <Link 
            href="/la-liga" 
            className="bg-[#1A1A4B] border border-slate-800/60 p-5 rounded-xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all hover:border-blue-500/50"
          >
            <span className="text-3xl">🇪🇸</span>
            <span className="font-bold text-sm">La Liga</span>
          </Link>

          <Link 
            href="/serie-a" 
            className="bg-[#1A1A4B] border border-slate-800/60 p-5 rounded-xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all hover:border-blue-500/50"
          >
            <span className="text-3xl">🇮🇹</span>
            <span className="font-bold text-sm">Serie A</span>
          </Link>

          <Link 
            href="/bundesliga" 
            className="bg-[#1A1A4B] border border-slate-800/60 p-5 rounded-xl flex flex-col items-center justify-center text-center gap-3 active:scale-95 transition-all hover:border-blue-500/50 col-span-2"
          >
            <span className="text-3xl">🇩🇪</span>
            <span className="font-bold text-sm">Bundesliga</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
