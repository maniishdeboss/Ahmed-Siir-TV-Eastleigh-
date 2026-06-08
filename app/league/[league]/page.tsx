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

const MOCK_MATCHES: { [key: string]: Match[] } = {
  'fifa-world-cup': [
    {
      id: 1, 
      home_team: 'beIN SPORTS HD 1', 
      away_team: 'Beinmatch Stream',
      home_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://beinmatch26.com/bein/live/20155', 
      link_2: 'https://beinmatch26.com/bein/live/20154'
    }
  ],
  'epl': [
    {
      id: 2, 
      home_team: 'EPL LIVE STREAM', 
      away_team: 'Premium Sports',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      // Waxaa loo qaabeeyey qaabka iframe-ku uu ku dhex furmayo mobilka dhexdiisa si toos ah
      link_1: 'https://www.youtube.com/embed/IZyZucveQ-E?autoplay=1&playsinline=1&enablejsapi=1',
      link_2: 'https://www.youtube.com/embed/K_Pw3qP4Cpc?autoplay=1&playsinline=1&enablejsapi=1'
    }
  ],
  'uefa': [
    {
      id: 3, 
      home_team: 'beIN SPORTS Premium 2', 
      away_team: 'Beinmatch Stream',
      home_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://beinmatch26.com/bein/live/20155',
      link_2: 'https://beinmatch26.com/'
    }
  ],
  'la-liga': [
    {
      id: 4, 
      home_team: 'beIN SPORTS Premium 3', 
      away_team: 'Beinmatch Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://beinmatch26.com/bein/live/20155',
      link_2: 'https://beinmatch26.com/'
    }
  ],
  'serie-a': [
    {
      id: 5, 
      home_team: 'beIN SPORTS 4 HD', 
      away_team: 'Beinmatch Stream',
      home_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://beinmatch26.com/bein/live/20155',
      link_2: 'https://beinmatch26.com/'
    }
  ],
  'bundesliga': [
    {
      id: 6, 
      home_team: 'beIN SPORTS 5 HD', 
      away_team: 'Beinmatch Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://beinmatch26.com/bein/live/20155',
      link_2: 'https://beinmatch26.com/'
    }
  ]
}

export default function LeaguePage() {
  const params = useParams()
  const league = params?.league as string
  const matches = MOCK_MATCHES[league] || []

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    if (matches.length > 0 && !activeVideoUrl) {
      setActiveVideoUrl(matches[0].link_1)
    }
  }, [matches, activeVideoUrl])

  const handleStreamSelect = (url: string) => {
    setActiveVideoUrl(url)
  }

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10 font-sans">
      {/* Top Header */}
      <div className="bg-[#1A1A4B] p-4 flex items-center sticky top-0 z-50 shadow-md border-b border-gray-800">
        <Link href="/" className="text-white mr-4 text-2xl hover:text-gray-300">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>

      <div className="p-3 max-w-xl mx-auto">
        
        {/* IN-APP VIDEO PLAYER */}
        {activeVideoUrl && (
          <div className="bg-[#1A1A4B] rounded-xl overflow-hidden mb-6 border border-gray-800 shadow-2xl">
            <div className="bg-[#111135] p-3 flex justify-between items-center border-b border-gray-800">
              <span className="text-xs text-red-500 font-bold animate-pulse flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                AHMED LIVE TV PLAYER
              </span>
              <span className="text-[10px] bg-slate-800 text-gray-400 px-2 py-0.5 rounded">
                Live Stream
              </span>
            </div>
            
            {/* Box-ka Muqaalka ee rasmiga ah */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                src={activeVideoUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                scrolling="no"
                // Xeeladda loogu qasbayo inuu appka dhexdiisa ku jiro
                allow="autoplay; encrypted-media; picture-in-picture"
                title="Ahmed Live TV Player"
              />
            </div>
          </div>
        )}

        {/* Badhanka gaduudka ah */}
        <div className="w-full bg-red-600 text-white text-center py-3 rounded-lg mb-6 font-bold text-base shadow-lg tracking-wide">
          🔴 WATCH FOOTBALL LIVE NOW
        </div>

        {matches.length === 0 && (
          <p className="text-gray-400 text-center mt-10">Hadda wax baahin ah ma jiraan.</p>
        )}
        
        {/* LIISKA CIYAARAHA IYO BADHAMADA STREAM-KA */}
        {matches.map((match) => (
          <div key={match.id} className="bg-[#1A1A4B] rounded-xl p-4 mb-4 border border-gray-800 shadow-md">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-3">
                <img src={match.home_logo} alt="soccer-logo" className="w-9 h-9 rounded-full object-cover border border-gray-700" />
                <span className="text-white font-semibold text-sm">{match.home_team}</span>
              </div>
              <span className="bg-red-600 text-white text-[10px] px-2.5 py-1 rounded-full animate-pulse font-black tracking-wider">
                LIVE
              </span>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => handleStreamSelect(match.link_1)} 
                className={`flex-1 text-center py-3 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
                  activeVideoUrl === match.link_1 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-300' 
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                Stream 1
              </button>
              <button 
                onClick={() => handleStreamSelect(match.link_2)} 
                className={`flex-1 text-center py-3 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${
                  activeVideoUrl === match.link_2 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20 ring-1 ring-blue-300' 
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                Stream 2
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
