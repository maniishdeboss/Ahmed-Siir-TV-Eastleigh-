'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

  // Marka qofku riixo badhanka cas ee weyn, wuxuu toos u furayaa link-ga EPL ee autoplay-ga iyo qarinta leh
  const handleWatchLiveNow = () => {
    const eplSecretLink = 'https://www.youtube.com/embed/VZoPxuna9uM?autoplay=1&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0'
    setActiveVideoUrl(eplSecretLink)
  }

  return (
    <div className="bg-[#0A0A23] min-h-screen pb-10 text-white text-center">
      
      {/* HEADER SECTION */}
      <div className="p-6 pt-10">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
          Ahmed Abdikani Live 🇸🇴 🇬🇲 🇨🇦 <span className="text-red-500 animate-pulse">🔴</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">Select a league to watch live</p>
      </div>

      <div className="p-4 max-w-xl mx-auto">
        
        {/* PREMIUM PLAYER CONTAINER (Haddii badhanka cas la riixo) */}
        {activeVideoUrl && (
          <div className="bg-[#1A1A4B] rounded-lg overflow-hidden mb-6 border border-red-600 shadow-xl text-left">
            <div className="bg-[#111135] p-2 flex justify-between items-center border-b border-slate-800">
              <span className="text-xs text-red-500 font-bold animate-pulse flex items-center gap-1">
                🔴 AHMED LIVE TV PLAYER
              </span>
              <button 
                onClick={() => setActiveVideoUrl(null)} 
                className="text-gray-400 hover:text-white text-xs bg-slate-800 px-2 py-0.5 rounded"
              >
                Xir Player-ka
              </button>
            </div>
            
            <div className="relative pt-[56.25%] bg-black overflow-hidden">
              <iframe
                src={activeVideoUrl}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen={false}
                scrolling="no"
                allow="autoplay; encrypted-media"
                title="Ahmed Live TV Player"
                style={{ pointerEvents: 'none' }} // Waxay curyaaminaysaa taabashada si aanay YouTube calaamadaheeda u soo bixin
              />
              
              {/* Overlay midigta hoose daboolaya */}
              <div className="absolute bottom-0 right-0 w-[120px] h-[50px] bg-black/10 z-10 pointer-events-auto" />
            </div>
          </div>
        )}

        {/* BADHANKA CAS EE SHAASHADDA HORRE */}
        <button
          onClick={handleWatchLiveNow}
          className="w-full bg-red-600 text-white text-center py-3 rounded-lg mb-6 font-bold text-lg active:scale-95 transition-transform shadow-lg shadow-red-600/20"
        >
          🔴 WATCH LIVE NOW
        </button>

        {/* LEAGUES GRID */}
        <div className="grid grid-cols-2 gap-4">
          
          <Link href="/fifa-world-cup-2026" className="bg-[#1A1A4B] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#20205b] transition-colors">
            <span className="text-3xl">🏆</span>
            <span className="text-xs font-semibold text-gray-200">FIFA World Cup 2026</span>
          </Link>

          <Link href="/epl" className="bg-[#1A1A4B] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#20205b] transition-colors">
            <span className="text-3xl">⚽</span>
            <span className="text-xs font-semibold text-gray-200">EPL</span>
          </Link>

          <Link href="/uefa-champions-league" className="bg-[#1A1A4B] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#20205b] transition-colors">
            <span className="text-3xl">⭐</span>
            <span className="text-xs font-semibold text-gray-200 text-center">UEFA Champions League</span>
          </Link>

          <Link href="/la-liga" className="bg-[#1A1A4B] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#20205b] transition-colors">
            <span className="text-3xl">🇪🇸</span>
            <span className="text-xs font-semibold text-gray-200">La Liga</span>
          </Link>

          <Link href="/serie-a" className="bg-[#1A1A4B] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#20205b] transition-colors">
            <span className="text-3xl">🇮🇹</span>
            <span className="text-xs font-semibold text-gray-200">Serie A</span>
          </Link>

          <Link href="/bundesliga" className="bg-[#1A1A4B] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#20205b] transition-colors">
            <span className="text-3xl">🇩🇪</span>
            <span className="text-xs font-semibold text-gray-200">Bundesliga</span>
          </Link>

        </div>
      </div>
    </div>
  )
}
