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
  home_score: number
  away_score: number
  match_time: string
  link_1: string
  link_2: string
}

const MOCK_MATCHES: { [key: string]: Match[] } = {
  'fifa-world-cup-2026': [{
    id: 1, home_team: 'YouTube Live', away_team: 'Sports Stream',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE 24/7',
    link_1: 'https://www.youtube.com/live/M152TYUrZ68',
    link_2: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  }],
  'epl': [{
    id: 2, home_team: 'Red Bull Live', away_team: 'Extreme Sports',
    home_logo: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Red_Bull_logo.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Red_Bull_logo.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE NOW',
    link_1: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
    link_2: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  }],
  'uefa-champions-league': [{
    id: 3, home_team: 'Bloomberg TV', away_team: 'News Live',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Bloomberg_Television_logo.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Bloomberg_Television_logo.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE 24/7',
    link_1: 'https://bloomberg.com/media-manifest/streams/phoenix-us.m3u8',
    link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'la-liga': [{
    id: 4, home_team: 'Test Stream', away_team: 'Mux Live',
    home_logo: 'https://mux.com/images/mux-logo-white.svg',
    away_logo: 'https://mux.com/images/mux-logo-white.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE NOW',
    link_1: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    link_2: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8'
  }],
  'serie-a': [{
    id: 5, home_team: 'YouTube Live', away_team: 'Football Live',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE 24/7',
    link_1: 'https://www.youtube.com/live/M152TYUrZ68',
    link_2: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8'
  }],
  'bundesliga': [{
    id: 6, home_team: 'YouTube Live', away_team: 'Match Center',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE NOW',
    link_1: 'https://www.youtube.com/live/M152TYUrZ68',
    link_2: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8'
  }]
}

export default function LeaguePage() {
  const params = useParams()
  const league = params.league as string
  const matches = MOCK_MATCHES[league] || []

  // Link-of Beinmatch  of free live
  const [liveStreamLink, setLiveStreamLink] = useState('https://www.youtube.com/live/M152TYUrZ68')

  useEffect(() => {
    // Code-kan wuxuu si toos ah xogta ugala soo baxaya faylkii aad public dhex dhigtay
    fetch('/links.json')
      .then((res) => res.json())
      .then((data) => {
        if (data.beinmatch_live_url) {
          setLiveStreamLink(data.beinmatch_live_url)
        }
      })
      .catch((err) => console.error('Cillad baa dhacday marka la akhrinayay links.json:', err))
  }, [])

  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4 flex items-center">
        <Link href="/" className="text-white mr-4 text-2xl">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>

      <div className="p-3">
        {/* Badanka sare hadda wuxuu si toos ah u furaa link-ga Beinmatch ee json-ka ku jira */}
        <a
          href={liveStreamLink}
          target="_blank"
          className="block bg-red-600 text-white text-center py-3 rounded-lg mb-4 font-bold text-lg active:scale-95"
        >
          🔴 WATCH FOOTBALL LIVE NOW
        </a>

        {matches.length === 0 && <p className="text-white text-center mt-10">No live matches right now</p>}
        {matches.map((match) => (
          <div key={match.id} className="bg-[#1A1A4B] rounded-lg p-4 mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-xs">{match.match_time}</span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse">LIVE</span>
            </div>

            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 w-1/3">
                <img src={match.home_logo} alt="" className="w-6 h-6" />
                <span className="text-white text-sm">{match.home_team}</span>
              </div>
              <span className="text-white font-bold text-lg">
                {match.home_score} : {match.away_score}
              </span>
              <div className="flex items-center gap-2 w-1/3 justify-end">
                <span className="text-white text-sm">{match.away_team}</span>
                <img src={match.away_logo} alt="" className="w-6 h-6" />
              </div>
            </div>

            <div className="flex gap-2">
              <a href={match.link_1} target="_blank" className="flex-1 bg-blue-600 text-white text-center py-2 rounded text-sm font-bold active:scale-95">
                Channel 1 HD
              </a>
              <a href={match.link_2} target="_blank" className="flex-1 bg-gray-600 text-white text-center py-2 rounded text-sm font-bold active:scale-95">
                Channel 2 HD
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
