'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import linksData from './links.json'

const LEAGUES = [
  { name: 'FIFA World Cup 2026', slug: 'fifa-world-cup', emoji: '⚽' },
  { name: 'EPL', slug: 'epl', emoji: '⚽' },
  { name: 'UEFA Champions League', slug: 'uefa', emoji: '🏆' },
  { name: 'La Liga', slug: 'la-liga', emoji: '🇪🇸' },
  { name: 'Serie A', slug: 'serie-a', emoji: '🇮🇹' },
  { name: 'Bundesliga', slug: 'bundesliga', emoji: '🇩🇪' }
]

interface Match {
  id: number
  home_team: string
  away_team: string
  home_logo: string
  away_logo: string
  match_time: string
  link_1: string
  link_2: string
}

export default function HomePage() {
  const [matches, setMatches] = useState<Match[]>([])

  useEffect(() => {
    // Si toos ah ayuu uga soo akhrisanayaa liiska ciyaaraha faylka links.json
    setMatches(linksData)
  }, [])

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10">
      {/* Header-ka Naadiga ee Magacaaga */}
      <div className="bg-[#1A1A4B] p-4 shadow-md text-center">
        <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide flex items-center justify-center gap-2">
          Ahmed Abdikani Live 🇸🇴🇬🇲🇨🇦 🔴
        </h1>
        <p className="text-gray-300 text-xs mt-1">Ciyaaraha Caalamiga ah oo Toos ah</p>
      </div>

      {/* Qaybta Ciyaaraha Tooska ah */}
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-lg font-bold mb-4 text-yellow-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          Ciyaaraha Maanta Toos u Socda
        </h2>
        
        {matches.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-4">Wax ciyaar ah hadda ma sarrayso.</p>
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
              
              {/* Badhamada Streams-ka - Waxay si toos ah u geynayaan bogga Player-ka gudaha */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href={`/league/live-stream`}
                  className="bg-green-600 hover:bg-green-500 text-center py-2 rounded-lg font-medium text-xs transition-colors text-white block"
                >
                  Stream 1 (Live Player)
                </Link>
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

      <hr className="border-gray-800 my-6 max-w-md mx-auto" />

      {/* Qaybta Horyaallada (Leagues) ee hadda la guji karo */}
      <div className="p-4 max-w-md mx-auto">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Horyaallada Naadiga</h3>
        <div className="grid grid-cols-2 gap-2">
          {LEAGUES.map((league) => (
            <Link 
              key={league.slug} 
              href={`/league/${league.slug}`}
              className="bg-[#141432] hover:bg-[#1A1A4B] p-3 rounded-lg border border-gray-800 transition-colors flex items-center gap-2 cursor-pointer block"
            >
              <span>{league.emoji || '⚽'}</span>
              <span className="text-xs font-medium text-gray-200 truncate">{league.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
