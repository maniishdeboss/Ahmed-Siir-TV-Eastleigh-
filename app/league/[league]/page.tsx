'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import linksData from '../../links.json' // Jidka saxda ah ee loogu laabanayo links.json

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

export default function LeaguePage() {
  const params = useParams()
  const leagueSlug = params.league as string
  const [matches, setMatches] = useState<Match[]>([])

  useEffect(() => {
    // Si toos ah ayuu halkan uga akhrisanayaa faylka links.json
    setMatches(linksData)
  }, [])

  // Magacyada horyaallada si qurux badan u soo bandhig
  const getLeagueName = (slug: string) => {
    const names: { [key: string]: string } = {
      'fifa-world-cup': 'FIFA World Cup 2026',
      'epl': 'English Premier League ⚽',
      'uefa': 'UEFA Champions League 🏆',
      'la-liga': 'La Liga 🇪🇸',
      'serie-a': 'Serie A 🇮🇹',
      'bundesliga': 'Bundesliga 🇩🇪'
    }
    return names[slug] || 'Horyaalka Naadiga'
  }

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10">
      {/* Header-ka Bogga Horyaalka */}
      <div className="bg-[#1A1A4B] p-4 shadow-md flex items-center gap-4">
        <Link href="/" className="text-gray-400 hover:text-white text-sm font-medium">
          ← Dib u laabo
        </Link>
        <h1 className="text-white text-lg font-bold uppercase tracking-wide">
          {getLeagueName(leagueSlug)}
        </h1>
      </div>

      {/* Liiska Ciyaaraha */}
      <div className="p-4 max-w-md mx-auto">
        {matches.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-10">Wax ciyaar ah hadda ma sarrayso horyaalkan.</p>
        ) : (
          matches.map((match) => (
            <div key={match.id} className="bg-[#1A1A4B] p-4 rounded-xl mb-4 border border-gray-800 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="text-center w-5/12">
                  <img src={match.home_logo} alt={match.home_team} className="w-12 h-12 mx-auto rounded-full mb-1 object-cover border border-gray-700" />
                  <p className="text-xs font-semibold truncate text-gray-200">{match.home_team}</p>
                </div>
                <div className="text-center w-2/12">
                  <span className="bg-red-600 text-[10px] px-2 py-0.5 rounded-full animate-pulse font-bold text-white">
                    {match.match_time}
                  </span>
                </div>
                <div className="text-center w-5/12">
                  <img src={match.away_logo} alt={match.away_team} className="w-12 h-12 mx-auto rounded-full mb-1 object-cover border border-gray-700" />
                  <p className="text-xs font-semibold truncate text-gray-200">{match.away_team}</p>
                </div>
              </div>
              
              {/* Badhamada Streams-ka */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={match.link_1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-center py-2 rounded-lg font-medium text-xs transition-colors text-white"
                >
                  Stream 1 (Live)
                </a>
                <a
                  href={match.link_2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-400 text-center py-2 rounded-lg font-medium text-xs transition-colors text-gray-900 font-bold"
                >
                  Stream 2 (Backup)
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
