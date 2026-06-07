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
  'fifa-world-cup-2026': [
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
      link_1: 'https://www.youtube.com/embed/VZoPxuna9uM?autoplay=1&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0',
      link_2: 'https://www.youtube.com/embed/K_Pw3qP4Cpc?autoplay=1&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0'
    }
  ],
  'uefa-champions-league': [
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
  const league = params.league as string
  const matches = MOCK_MATCHES[league] || []

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)
  const [iframeError, setIframeError] = useState(false)

  // AUTOPLAY: Marka uu qofku soo galo bogga horyaalka, cutubkan ayaa ciyaarta toos u daaraya!
  useEffect(() => {
    if (matches.length > 0) {
      setActiveVideoUrl(matches[0].link_1)
    }
  }, [league, matches])

  const handleStreamSelect = (url: string) => {
    setIframeError(false)
    setActiveVideoUrl(url)
  }

  const isBeinmatch = activeVideoUrl ? activeVideoUrl.includes('beinmatch') : false
  const isYoutube = activeVideoUrl ? activeVideoUrl.includes('youtube.com') : false

  return (
    <div className="bg-[#0A0A23] min-h-screen pb-10">
      {/* Header */}
      <div className="bg-[#1A1A4B] p-4 flex items-center sticky top-0 z-50 shadow-md">
        <Link href="/" className="text-white mr-4 text-2xl">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>

      <div className="p-3 max-w-xl mx-auto">
        
        {/* PREMIUM PLAYER CONTAINER */}
        {activeVideoUrl && (
          <div className="bg-[#1A1A4B] rounded-lg overflow-hidden mb-4 border border-red-600 shadow-xl">
            <div className="bg-[#111135] p-2 flex justify-between items-center border-b border-slate-800">
              <span className="text-xs text-red-500 font-bold animate-pulse flex items-center gap-1">
                🔴 AHMED LIVE TV PLAYER
              </span>
              <button 
                onClick={() => {
                  setActiveVideoUrl(null)
                  setIframeError(false)
                }} 
                className="text-gray-400 hover:text-white text-xs bg-slate-800 px-2 py-0.5 rounded"
              >
                Xir Player-ka
              </button>
            </div>
            
            <div className="relative pt-[56.25%] bg-black overflow-hidden">
              {isBeinmatch || iframeError ? (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#0f0f2d]">
                  <span className="text-3xl mb-2">📺</span>
                  <p className="text-sm font-semibold text-gray-200 mb-1">
                    Baahintu Waxay Diyaar Ku Tahay Stream-ka
                  </p>
                  <a 
                    href={activeVideoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white text-xs px-5 py-2 rounded-lg font-bold hover:bg-red-500"
                  >
                    Foor Baahinta Tooska Ah 🚀
                  </a>
                </div>
              ) : (
                <>
                  <iframe
                    src={activeVideoUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen={!isYoutube}
                    scrolling="no"
                    allow="autoplay; encrypted-media"
                    title="Ahmed Live TV Player"
                    onError={() => setIframeError(true)}
                    style={isYoutube ? { pointerEvents: 'none' } : {}}
                  />
                  
                  {/* Overlay daboolaya calaamadaha YouTube */}
                  {isYoutube && (
                    <div className="absolute bottom-0 right-0 w-[120px] h-[50px] bg-black/10 z-10 pointer-events-auto" />
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* BADHANKA CAS */}
        <button
          onClick={() => {
            if (matches.length > 0) {
              handleStreamSelect(matches[0].link_1)
            }
          }}
          className="w-full bg-red-600 text-white text-center py-3 rounded-lg mb-4 font-bold text-lg active:scale-95 transition-transform"
        >
          🔴 WATCH FOOTBALL LIVE NOW
        </button>

        {matches.length === 0 && <p className="text-white text-center mt-10">No live streams right now</p>}
        
        {matches.map((match) => (
          <div key={match.id} className="bg-[#1A1A4B] rounded-lg p-4 mb-3 border border-slate-800/50">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img src={match.home_logo} alt="soccer-logo" className="w-8 h-8 rounded-full object-cover border border-slate-600" />
                <span className="text-white font-bold">{match.home_team}</span>
              </div>
              <span className="bg-red-600 text-white text-[10px] px-2 py-1 rounded animate-pulse font-black">LIVE</span>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => handleStreamSelect(match.link_1)} 
                className={`flex-1 text-center py-2.5 rounded text-sm font-bold active:scale-95 transition-all ${
                  activeVideoUrl === match.link_1 ? 'bg-blue-500 text-white ring-1 ring-white' : 'bg-blue-600 text-white'
                }`}
              >
                Stream 1
              </button>
              <button 
                onClick={() => handleStreamSelect(match.link_2)} 
                className={`flex-1 text-center py-2.5 rounded text-sm font-bold active:scale-95 transition-all ${
                  activeVideoUrl === match.link_2 ? 'bg-blue-500 text-white ring-1 ring-white' : 'bg-blue-600 text-white'
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
