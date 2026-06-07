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
      home_team: 'Makkah Live', 
      away_team: 'Holy Mosque',
      home_logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Kaaba_logo.svg',
      away_logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Kaaba_logo.svg',
      match_time: 'LIVE 24/7',
      link_1: 'https://live.makkah.sa/', 
      link_2: 'https://quran.com/'
    }
  ],
  'epl': [
    {
      id: 2, 
      home_team: 'Quran Recitation', 
      away_team: 'Radio Station',
      home_logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Quran_icon.svg',
      away_logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Quran_icon.svg',
      match_time: 'LIVE 24/7',
      link_1: 'https://www.quran.com/',
      link_2: 'https://mp3quran.net/en'
    }
  ]
}

export default function LeaguePage() {
  const params = useParams()
  const league = params.league as string
  const matches = MOCK_MATCHES[league] || []

  // Link-ga Beinmatch ee Live Football
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
        {/* Title-ka oo Af-Soomaali ah sidaad rabtay */}
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>

      <div className="p-3">
        {/* Main Football Live Link */}
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
                <img src={match.home_logo} alt="" className="w-8 h-8" />
                <span className="text-white font-bold">{match.home_team}</span>
              </div>
              <span className="bg-green-600 text-white text-[10px] px-2 py-1 rounded">LIVE</span>
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
