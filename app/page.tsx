'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// Link-gaaga Xayeysiiska
const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

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
  // Halkan waa xogtaada... (Isla koodhkii ayaan ku celiyey)
  'fifa-world-cup-2026': [
    { id: 1, home_team: 'beIN SPORTS HD 1', away_team: 'Beinmatch Stream', home_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop', away_logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop', match_time: 'LIVE NOW', link_1: 'https://beinmatch26.com/bein/live/20155', link_2: 'https://beinmatch26.com/bein/live/20154' }
  ],
  'epl': [
    { id: 2, home_team: 'EPL LIVE STREAM', away_team: 'Premium Sports', home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop', away_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop', match_time: 'LIVE NOW', link_1: 'https://www.youtube.com/embed/VZoPxuna9uM?autoplay=1&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0', link_2: 'https://www.youtube.com/embed/K_Pw3qP4Cpc?autoplay=1&mute=1&modestbranding=1&rel=0&controls=0&showinfo=0' }
  ],
  // ... (intii kale waad haysataa)
}

export default function LeaguePage() {
  const params = useParams()
  const league = params.league as string
  const matches = MOCK_MATCHES[league] || []

  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null)
  const [iframeError, setIframeError] = useState(false)

  // Halkan waxaan ku darnay Adsterra inuu furmo marka stream-ka la dooranayo
  const handleStreamSelect = (url: string) => {
    window.open(ADSTERRA_URL, "_blank"); // Ads-ka
    setIframeError(false)
    setActiveVideoUrl(url)
  }

  const isBeinmatch = activeVideoUrl ? activeVideoUrl.includes('beinmatch') : false
  const isYoutube = activeVideoUrl ? activeVideoUrl.includes('youtube.com') : false

  return (
    <div className="bg-[#0A0A23] min-h-screen pb-10">
      <div className="bg-[#1A1A4B] p-4 flex items-center sticky top-0 z-50 shadow-md">
        <Link href="/" className="text-white mr-4 text-2xl">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>

      <div className="p-3 max-w-xl mx-auto">
        
        {activeVideoUrl && (
          <div className="bg-[#1A1A4B] rounded-lg overflow-hidden mb-4 border border-red-600 shadow-xl">
            {/* Player UI */}
            <div className="bg-[#111135] p-2 flex justify-between items-center border-b border-slate-800">
              <span className="text-xs text-red-500 font-bold animate-pulse flex items-center gap-1">🔴 AHMED LIVE TV PLAYER</span>
              <button onClick={() => { setActiveVideoUrl(null); setIframeError(false) }} className="text-gray-400 text-xs bg-slate-800 px-2 py-0.5 rounded">Xir Player-ka</button>
            </div>
            
            <div className="relative pt-[56.25%] bg-black overflow-hidden">
               {/* Player Content (sidaad u rabtay) */}
               {isBeinmatch || iframeError ? (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#0f0f2d]">
                  <p className="text-sm font-semibold text-gray-200 mb-1">Baahintu Waxay Diyaar Ku Tahay Stream-ka</p>
                  <a href={activeVideoUrl} target="_blank" className="bg-red-600 text-white text-xs px-5 py-2 rounded-lg font-bold">Foor Baahinta Tooska Ah 🚀</a>
                </div>
              ) : (
                <iframe src={activeVideoUrl} className="absolute top-0 left-0 w-full h-full" allowFullScreen={!isYoutube} allow="autoplay; encrypted-media" title="Player" />
              )}
            </div>
          </div>
        )}

        {/* BADHANKA CAS */}
        <button
          onClick={() => { if (matches.length > 0) handleStreamSelect(matches[0].link_1) }}
          className="w-full bg-red-600 text-white text-center py-3 rounded-lg mb-4 font-bold text-lg active:scale-95"
        >
          🔴 WATCH FOOTBALL LIVE NOW
        </button>

        {/* Match Buttons */}
        {matches.map((match) => (
          <div key={match.id} className="bg-[#1A1A4B] rounded-lg p-4 mb-3 border border-slate-800/50">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img src={match.home_logo} alt="logo" className="w-8 h-8 rounded-full" />
                <span className="text-white font-bold">{match.home_team}</span>
              </div>
              <span className="bg-red-600 text-white text-[10px] px-2 py-1 rounded font-black">LIVE</span>
            </div>

            <div className="flex gap-2">
              <button onClick={() => handleStreamSelect(match.link_1)} className="flex-1 bg-blue-600 py-2.5 rounded text-white text-sm font-bold">Stream 1</button>
              <button onClick={() => handleStreamSelect(match.link_2)} className="flex-1 bg-blue-600 py-2.5 rounded text-white text-sm font-bold">Stream 2</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
