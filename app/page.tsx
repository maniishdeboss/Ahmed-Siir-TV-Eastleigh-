'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Link from 'next/link'

type League = {
  id: number
  name: string
  slug: string
  logo: string
}

const MOCK_LEAGUES: League[] = [
  { id: 1, name: 'FIFA World Cup 2026', slug: 'fifa-world-cup-2026', logo: 'https://i.imgur.com/8Qf5U6a.png' },
  { id: 2, name: 'English Premier League', slug: 'epl', logo: 'https://i.imgur.com/YfL2m3B.png' },
  { id: 3, name: 'La Liga', slug: 'la-liga', logo: 'https://i.imgur.com/xG9hJ4k.png' },
  { id: 4, name: 'Serie A', slug: 'serie-a', logo: 'https://i.imgur.com/a1s7kP2.png' },
  { id: 5, name: 'Bundesliga', slug: 'bundesliga', logo: 'https://i.imgur.com/j8a7wM9.png' },
  { id: 6, name: 'Ligue 1', slug: 'ligue-1', logo: 'https://i.imgur.com/k7j3h5L.png' },
]

export default function Home() {
  const [leagues, setLeagues] = useState<League[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getLeagues() {
      const { data, error } = await supabase.from('matches').select('league')
      
      if (error) {
        setError(error.message)
        setLeagues(MOCK_LEAGUES)
        return
      }

      if (data && data.length > 0) {
        const uniqueLeagues = [...new Set(data.map(item => item.league))]
        const formatted = uniqueLeagues.map((name, i) => ({
          id: i, 
          name, 
          slug: name.toLowerCase().replace(/ /g, '-'), 
          logo: 'https://i.imgur.com/8Qf5U6a.png'
        }))
        setLeagues(formatted)
      } else {
        setLeagues(MOCK_LEAGUES)
      }
    }
    getLeagues()
  }, [])

  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Ahmed Sports Live</h1>
        <span className="bg-red-600 w-3 h-3 rounded-full animate-pulse"></span>
      </div>
      
      {error && (
        <div className="bg-yellow-600 text-white p-2 text-xs text-center">
          Supabase error - Mock data la isticmaalayaa
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 p-3">
        {leagues.map((league) => (
          <Link href={`/league/${league.slug}`} key={league.id}>
            <div className="bg-[#1A1A4B] rounded-lg overflow-hidden border border-[#2A2A5B] active:scale-95 transition-transform">
              <div className="bg-white p-4 flex justify-center h-24">
                <img src={league.logo} alt={league.name} className="h-16 object-contain" />
              </div>
              <p className="text-white text-center py-2 text-sm font-semibold px-1">{league.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
