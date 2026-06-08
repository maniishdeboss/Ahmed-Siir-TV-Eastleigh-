'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Match = {
  id: number
  home_team: string
  away_team: string
  home_logo: string
  away_logo: string
  match_time: string
  link_1: string
  link_2: string
}

// Function-ka dhalinaya 8 ciyaarood oo horyaal kasta leh
const generateMatchesForLeague = (leagueName: string, embedCode1: string, embedCode2: string): Match[] => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    home_team: `${leagueName} Team ${i + 1}`,
    away_team: `Opponent ${i + 1}`,
    home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
    away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
    match_time: 'LIVE NOW',
    link_1: `https://www.youtube.com/embed/${embedCode1}?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`,
    link_2: `https://www.youtube.com/embed/${embedCode2}?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3`
  }))
}

// Xogta rasmiga ah ee 8-da ciyaarood horyaal kasta u dhabaysan
const MOCK_MATCHES: { [key: string]: Match[] } = {
  'fifa-world-cup': generateMatchesForLeague('FIFA', 'IZyZucveQ-E', 'K_Pw3qP4Cpc'),
  'epl': generateMatchesForLeague('EPL', 'IZyZucveQ-E', 'K_Pw3qP4Cpc'),
  'uefa': generateMatchesForLeague('UEFA', 'IZyZucveQ-E', 'K_Pw3qP4Cpc'),
  'la-liga': generateMatchesForLeague('La Liga', 'IZyZucveQ-E', 'K_Pw3qP4Cpc'),
  'serie-a': generateMatchesForLeague('Serie A', 'IZyZucveQ-E', 'K_Pw3qP4Cpc'),
  'bundesliga': generateMatchesForLeague('Bundesliga', 'IZyZucveQ-E', 'K_Pw3qP4Cpc')
}

export default function LeaguePage() {
  const params = useParams()
  const league = params?.league as string
  const matches = MOCK_MATCHES[league] || []

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

  // Si toos ah u soo qaad Stream 1-ka marka boggu furmo
  useEffect(() => {
    if (matches.length > 0 && !activeVideoUrl) {
      setActiveVideoUrl(matches[0].link_1)
    }
  }, [matches, activeVideoUrl])

  const handleStreamSelect = (url: string) => {
    setActiveVideoUrl(url)
  }

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10 font-sans selection:bg-blue-600">
      
      {/* 1. TOP HEADER (Navigation) */}
      <div className="bg-[#1A1A4B] p-4 flex items-center sticky top-0 z-50 shadow-md border-b border-gray-800">
        <Link href="/" className="text-white mr-4 text-2xl hover:text-gray-300 transition-colors">←</Link>
        <h1 className="text-white text-xl font-bold capitalize tracking-wide">
          {league?.replace(/-/g, ' ')}
        </h1>
      </div>

      <div className="p-4 max-w-xl mx-auto">
        
        {/* 2. STREAM 1 KOR (Active In-App Video Player) */}
        {activeVideoUrl && (
          <div className="bg-[#1A1A4B] rounded-2xl overflow-hidden mb-5 border border-gray-800 shadow-2xl relative">
            <div className="bg-[#111135] p-3.5 flex justify-between items-center border-b border-gray-800">
              <span className="text-xs text-red-500 font-extrabold animate-pulse flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-md shadow-red-500/50"></span>
                AHMED LIVE TV PLAYER
              </span>
              <span className="text-[10px] bg-blue-600/20 text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/30 font-semibold">
                Streaming Live
              </span>
            </div>
            
            {/* Box-ka Muqaalka oo weyneyn qarsoon leh (No YouTube Signs) */}
            <div className="relative pt-[56.25%] bg-black overflow-hidden">
              <iframe
                src={activeVideoUrl}
                className="absolute top-0 left-0 w-full h-full border-0 transform scale-105"
                allowFullScreen={false}
                scrolling="no"
                allow="autoplay; encrypted-media"
                title="Ahmed Live TV Player"
              />
              {/* Lakabka qariya taabashada */}
              <div className="absolute inset-0 bg-transparent pointer-events-none z-10" />
            </div>
          </div>
        )}

        {/* Badhanka Cas Ee Dynamic-ga Ah */}
        <div className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3.5 rounded-xl mb-6 font-black text-sm shadow-xl tracking-wider uppercase animate-pulse">
          🔴 WATCH {league?.replace(/-/g, ' ')} LIVE NOW
        </div>

        {matches.length === 0 && (
          <p className="text-gray-400 text-center mt-10 bg-[#1A1A4B] p-6 rounded-xl border border-gray-800">
            Hadda wax baahin ah ma jiraan horyaalkan.
          </p>
        )}
        
        {/* 3. LIISKA 8-DA CIYAAROOD EE QURUXDA BADAN */}
        <div className="space-y-4">
          {matches.map((match) => (
            <div key={match.id} className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-800/80 shadow-lg hover:border-gray-700 transition-all duration-200">
              
              {/* Naadiyada iyo calankooda */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src={match.home_logo} alt="home-logo" className="w-8 h-8 rounded-full object-cover border-2 border-[#1A1A4B]" />
                    <img src={match.away_logo} alt="away-logo" className="w-8 h-8 rounded-full object-cover border-2 border-[#1A1A4B]" />
                  </div>
                  <span className="text-gray-200 font-medium text-xs tracking-wide">
                    {match.home_team} <span className="text-gray-500 font-normal mx-1">vs</span> {match.away_team}
                  </span>
                </div>
                <span className="bg-red-500/10 text-red-500 border border-red-500/20 text-[9px] px-2 py-0.5 rounded-md font-bold tracking-widest uppercase">
                  {match.match_time}
                </span>
              </div>

              {/* Badhamada Stream-ka */}
              <div className="flex gap-3">
                <button 
                  onClick={() => handleStreamSelect(match.link_1)} 
                  className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
                    activeVideoUrl === match.link_1 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400' 
                      : 'bg-[#242466] hover:bg-blue-600 text-gray-200 hover:text-white border border-gray-700/50'
                  }`}
                >
                  Stream 1 (Live)
                </button>
                <button 
                  onClick={() => handleStreamSelect(match.link_2)} 
                  className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
                    activeVideoUrl === match.link_2 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-400' 
                      : 'bg-[#242466] hover:bg-blue-600 text-gray-200 hover:text-white border border-gray-700/50'
                  }`}
                >
                  Stream 2 (Backup)
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
