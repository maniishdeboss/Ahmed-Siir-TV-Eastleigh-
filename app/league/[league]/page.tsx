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
      link_1: 'https://beinmatch26.com/bein/live/20154', 
      link_2: 'https://beinmatch26.com/'
    }
  ],
  'epl': [
    {
      id: 2, 
      home_team: 'beIN SPORTS Premium 1', 
      away_team: 'Beinmatch Stream',
      home_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      away_logo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=100&auto=format&fit=crop',
      match_time: 'LIVE NOW',
      link_1: 'https://beinmatch26.com/bein/live/20154',
      link_2: 'https://beinmatch26.com/'
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
      link_1: 'https://beinmatch26.com/bein/live/20154',
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
      link_1: 'https://beinmatch26.com/bein/live/20154',
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
      link_1: 'https://beinmatch26.com/bein/live/20154',
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
      link_1: 'https://beinmatch26.com/bein/live/20154',
      link_2: 'https://beinmatch26.com/'
    }
  ]
}

export default function LeaguePage() {
  const params = useParams()
  const league = params.league as string
  const matches = MOCK_MATCHES[league] || []

  const [liveStreamLink, setLiveStreamLink] = useState('https://beinmatch26.com/bein/live/20154')

  useEffect(() => {
    fetch('/links.json')
      .then((res) => res.json())
      .then((data) => {
        if (data.beinmatch_live_url) {
          setLiveStreamLink(data.beinmatch_live_url)
        }
      })
      .catch((err) => console.error('Error loading links.json:', err))
  }, [])

  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4 flex items-center">
        <Link href="/" className="text-white mr-4 text-2xl">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>

      <div className="p-3">
        {/* Main Football Live Link Button */}
        <a
          href={liveStreamLink}
          target="_blank"
          className="block bg-red-600 text-white text-center py-3 rounded-lg mb-4 font-bold text-lg active:scale-95"
        >
          🔴 WATCH FOOTBALL LIVE NOW
        </a>

        {matches.length === 0 && <p className="text-white text-center mt-10">No live streams right now</p>}
        
        {matches.map((match) => (
          <div key={match.id} className="bg-[#1A1A4B] rounded-lg p-4 mb-3">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img src={match.home_logo} alt="soccer-logo" className="w-8 h-8 rounded-full object-cover border border-slate-600" />
                <span className="text-white font-bold">{match.home_team}</span>
              </div>
              <span className="bg-red-600 text-white text-[10px] px-2 py-1 rounded animate-pulse">LIVE</span>
            </div>

            <div className="flex gap-2">
              <a href={match.link_1} target="_blank" className="flex-1 bg-blue-600 text-white text-center py-2 rounded text-sm font-bold active:scale-95">
                Stream 1
              </a>
              <a href={match.link_2} target="_blank" className="flex-1 bg-slate-600 text-white text-center py-2 rounded text-sm font-bold active:scale-95">
                Stream 2
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
