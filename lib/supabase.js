import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Link from 'next/link'

const mockLeagues = [
  { id: 1, name: 'FIFA World Cup 2026', slug: 'fifa-world-cup-2026', logo: 'https://i.imgur.com/8Qf5U6a.png' },
  { id: 2, name: 'English Premier League', slug: 'epl', logo: 'https://i.imgur.com/YfL2m3B.png' },
  { id: 3, name: 'La Liga', slug: 'la-liga', logo: 'https://i.imgur.com/xG9hJ4k.png' },
]

export default function Home() {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    async function getLeagues() {
      let { data } = await supabase.from('matches').select('league')
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
        setLeagues(mockLeagues)
      }
    }
    getLeagues()
  }, [])

  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4">
        <h1 className="text-white text-2xl font-bold">Ahmed Sports Live TV</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 p-3">
        {leagues.map((league) => (
          <Link href={`/league/${league.slug}`} key={league.id}>
            <div className="bg-[#1A1A4B] rounded-lg overflow-hidden">
              <div className="bg-white p-4 flex justify-center h-24">
                <img src={league.logo} alt={league.name} className="h-16 object-contain" />
              </div>
              <p className="text-white text-center py-2 text-sm font-semibold">{league.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
