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
      home_team: '🇫🇷 FRANCE vs LIVE MATCH', 
      away_team: 'Siiir TV Premium',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://siiir.tv/', 
      link_2: 'https://beinmatch26.com/bein/live/20160'
    },
    {
      id: 2, 
      home_team: 'FIFA MATCH 2', 
      away_team: 'Backup Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: '9:00 PM',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    }
  ],
  'epl': [
    {
      id: 1, 
      home_team: '🇫🇷 FRANCE vs LIVE MATCH (EPL)', 
      away_team: 'Siiir TV Sports',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    },
    {
      id: 2, 
      home_team: 'EPL MATCH 2', 
      away_team: 'Backup Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: '9:00 PM',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    }
  ],
  'uefa': [
    {
      id: 1, 
      home_team: '🇫🇷 FRANCE vs LIVE MATCH (UEFA)', 
      away_team: 'Siiir TV Live',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    },
    {
      id: 2, 
      home_team: 'UEFA MATCH 2', 
      away_team: 'Backup Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: '9:00 PM',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    }
  ],
  'la-liga': [
    {
      id: 1, 
      home_team: '🇫🇷 FRANCE vs LIVE MATCH (La Liga)', 
      away_team: 'Siiir TV Live',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    },
    {
      id: 2, 
      home_team: 'LA LIGA MATCH 2', 
      away_team: 'Backup Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: '9:00 PM',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    }
  ],
  'serie-a': [
    {
      id: 1, 
      home_team: '🇫🇷 FRANCE vs LIVE MATCH (Serie A)', 
      away_team: 'Siiir TV Live',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    },
    {
      id: 2, 
      home_team: 'SERIE A MATCH 2', 
      away_team: 'Backup Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: '9:00 PM',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    }
  ],
  'bundesliga': [
    {
      id: 1, 
      home_team: '🇫🇷 FRANCE vs LIVE MATCH (Bundesliga)', 
      away_team: 'Siiir TV Live',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    },
    {
      id: 2, 
      home_team: 'BUNDESLIGA MATCH 2', 
      away_team: 'Backup Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop',
      match_time: '9:00 PM',
      link_1: 'https://siiir.tv/',
      link_2: 'https://beinmatch26.com/bein/live/20160'
    }
  ]
}

export default function LeaguePage() {
  const params = useParams()
  const league = params?.league as string
  
  // Halkan waxaan ka xallinnay loops-kii 8-da ahaa! Waxay hadda si toos ah u dhalinaysaa 2-da ciyaarood kaliya ee ku dhex jira MOCK_MATCHES
  const matches = MOCK_MATCHES[league] || []

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)
  const [showInAppWebView, setShowInAppWebView] = useState<boolean>(false)

  useEffect(() => {
    if (matches.length > 0 && !activeVideoUrl) {
      // Default ahaan ka dhig Beinmatch iframe-ka si uusan dillaac u tusin isticmaalaha
      setActiveVideoUrl(matches[0].link_2)
    }
  }, [matches, activeVideoUrl])

  const handleStream1Click = (url: string) => {
    setActiveVideoUrl(url)
    setShowInAppWebView(true) // Daar qaabka browser-ka buuxa ee appka dhexdiisa si uu Siiir TV u dhex furmo
  }

  const handleStream2Click = (url: string) => {
    setActiveVideoUrl(url)
    setShowInAppWebView(false) // Dami browser-ka oo u celi player-ka caadiga ah ee Beinmatch
  }

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10 font-sans">
      {/* Top Header */}
      <div className="bg-[#1A1A4B] p-4 flex items-center sticky top-0 z-50 shadow-md border-b border-gray-800">
        <Link href="/" className="text-white mr-4 text-2xl hover:text-gray-300">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>

      <div className="p-4 max-w-xl mx-auto">
        
        {/* PLAYER-KA APPKAA EE LA HAGAJIYEY */}
        {activeVideoUrl && (
          <div className="bg-[#1A1A4B] rounded-2xl overflow-hidden mb-5 border border-gray-800 shadow-2xl relative">
            <div className="bg-[#111135] p-3.5 flex justify-between items-center border-b border-gray-800">
              <span className="text-xs text-red-500 font-extrabold animate-pulse flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-md shadow-red-500/50"></span>
                AHMED LIVE TV PLAYER
              </span>
              <span className="text-[10px] bg-blue-600/20 text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/30 font-semibold">
                {showInAppWebView ? 'Web Mode' : 'Live Stream'}
              </span>
            </div>
            
            {/* QAABKA CUSUB: Haddii la gujiyo Siiir TV wuxuu u furmayaa qaab weyn oo height-kiisu dheer yahay (In-App WebView) si uu dhibka iframe-ka uga fogaado */}
            <div className={`relative bg-black overflow-hidden transition-all duration-300 ${showInAppWebView ? 'h-[500px]' : 'pt-[56.25%]'}`}>
              <iframe
                src={activeVideoUrl}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                scrolling="yes"
                allow="autoplay; encrypted-media"
                title="Ahmed Live TV Player"
              />
            </div>
          </div>
        )}

        {/* Badhanka Cas */}
        <div className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3.5 rounded-xl mb-6 font-black text-sm shadow-xl tracking-wider uppercase animate-pulse">
          🔴 WATCH LIVE SPORTS NOW
        </div>

        {/* LIISKA OO HADDA AH 2 JEER KALIYA */}
        <div className="space-y-4">
          {matches.map((match, i) => (
            <div key={match.id} className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-800 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src={match.home_logo} alt="home" className="w-8 h-8 rounded-full object-cover border-2 border-[#1A1A4B]" />
                    <img src={match.away_logo} alt="away" className="w-8 h-8 rounded-full object-cover border-2 border-[#1A1A4B]" />
                  </div>
                  <span className="text-gray-200 font-medium text-xs">
                    {match.home_team}
                  </span>
                </div>
                <span className={`text-[9px] px-2 py-0.5 rounded-md font-bold ${
                  i === 0 ? 'bg-red-500/20 text-red-500 border border-red-500/30 animate-pulse' : 'bg-gray-700/50 text-gray-400'
                }`}>
                  {match.match_time}
                </span>
              </div>

              <div className="flex gap-3">
                {/* Badhanka 1: Siiir TV toos ayuu app-ka dhexdiisa ugu furmayaa hadda (No Chrome redirect!) */}
                <button 
                  onClick={() => handleStream1Click(match.link_1)} 
                  className={`flex-1 text-center py-2.5 rounded-xl text-xs font-black transition-all ${
                    activeVideoUrl === match.link_1 && showInAppWebView
                      ? 'bg-blue-500 text-white ring-2 ring-blue-400' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white'
                  }`}
                >
                  {i === 0 ? 'Stream 1 (Siiir TV)' : 'Stream 1'}
                </button>
                
                {/* Badhanka 2: Beinmatch Iframe Player */}
                <button 
                  onClick={() => handleStream2Click(match.link_2)} 
                  className={`flex-1 text-center py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeVideoUrl === match.link_2 && !showInAppWebView
                      ? 'bg-blue-500 text-white ring-2 ring-blue-400' 
                      : 'bg-[#242466] hover:bg-blue-600 text-gray-200'
                  }`}
                >
                  Stream 2 (Beinmatch)
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
