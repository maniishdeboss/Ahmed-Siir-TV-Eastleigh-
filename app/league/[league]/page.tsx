'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

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
    id: 1, home_team: 'Argentina', away_team: 'Germany', 
    home_logo: 'https://flagcdn.com/w80/ar.png', away_logo: 'https://flagcdn.com/w80/de.png',
    home_score: 2, away_score: 1, match_time: '04:39 PM',
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'epl': [{
    id: 2, home_team: 'Man United', away_team: 'Liverpool',
    home_logo: 'https://resources.premierleague.com/premierleague/badges/t1.png', away_logo: 'https://resources.premierleague.com/premierleague/badges/t14.png',
    home_score: 3, away_score: 1, match_time: '05:30 PM',
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'uefa-champions-league': [{
    id: 3, home_team: 'Real Madrid', away_team: 'Man City',
    home_logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', away_logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    home_score: 2, away_score: 2, match_time: '08:00 PM',
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'la-liga': [{
    id: 4, home_team: 'Barcelona', away_team: 'Real Madrid',
    home_logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', away_logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    home_score: 1, away_score: 1, match_time: '09:00 PM',
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'serie-a': [{
    id: 5, home_team: 'Inter Milan', away_team: 'AC Milan',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg', away_logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg',
    home_score: 2, away_score: 0, match_time: '07:45 PM',
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'bundesliga': [{
    id: 6, home_team: 'Bayern Munich', away_team: 'Dortmund',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_München_logo_%282017%29.svg', away_logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
    home_score: 4, away_score: 2, match_time: '06:30 PM',
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }]
}

export default function LeaguePage() {
  const params = useParams()
  const league = params.league as string
  const matches = MOCK_MATCHES[league] || []

  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4 flex items-center">
        <Link href="/" className="text-white mr-4 text-2xl">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>
      
      <div className="p-3">
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
