'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Match = {
  id: number
  league: string
  home_team: string
  away_team: string
  home_logo: string
  away_logo: string
  home_score: number | null
  away_score: number | null
  match_time: string
  is_live: boolean
  link_1: string
  link_2: string
}

const MOCK_MATCH: Match[] = [{
  id: 1,
  league: 'FIFA World Cup 2026',
  home_team: 'Argentina',
  away_team: 'Germany', 
  home_logo: 'https://flagcdn.com/w80/ar.png',
  away_logo: 'https://flagcdn.com/w80/de.png',
  home_score: 2,
  away_score: 1,
  match_time: new Date().toISOString(),
  is_live: true,
  link_1: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  link_2: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
}]

export default function LeaguePage() {
  const params = useParams()
  const league = params.league as string
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!league) return
    
    async function getMatches() {
      const leagueName = league.replace(/-/g, ' ')
      const { data, error } = await supabase
     .from('matches')
     .select('*')
     .ilike('league', `%${leagueName}%`)
     .order('match_time', { ascending: true })
      
      if (error ||!data || data.length === 0) {
        setMatches(MOCK_MATCH)
      } else {
        setMatches(data)
      }
      setLoading(false)
    }
    getMatches()
  }, [league])

  if (loading) return <div className="bg-[#0A0A23] min-h-screen text-white p-4">Loading...</div>

  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4 flex items-center">
        <Link href="/" className="text-white mr-4 text-2xl">←</Link>
        <h1 className="text-white text-xl font-bold capitalize">{league?.replace(/-/g, ' ')}</h1>
      </div>
      
      <div className="p-3">
        {matches.map((match) => (
          <div key={match.id} className="bg-[#1A1A4B] rounded-lg p-4 mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-xs">
                {new Date(match.match_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </span>
              {match.is_live && <span className="bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse">LIVE</span>}
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 w-1/3">
                <img src={match.home_logo} alt="" className="w-6 h-6" />
                <span className="text-white text-sm">{match.home_team}</span>
              </div>
              <span className="text-white font-bold text-lg">
                {match.home_score?? '-'} : {match.away_score?? '-'}
              </span>
              <div className="flex items-center gap-2 w-1/3 justify-end">
                <span className="text-white text-sm">{match.away_team}</span>
                <img src={match.away_logo} alt="" className="w-6 h-6" />
              </div>
            </div>
            
            {match.is_live && (
              <div className="flex gap-2">
                <a href={match.link_1} target="_blank" className="flex-1 bg-blue-600 text-white text-center py-2 rounded text-sm font-bold active:scale-95">
                  Channel 1 HD
                </a>
                <a href={match.link_2} target="_blank" className="flex-1 bg-gray-600 text-white text-center py-2 rounded text-sm font-bold active:scale-95">
                  Channel 2 HD
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
