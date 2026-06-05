'use client'
import Link from 'next/link'

type League = {
  id: number
  name: string
  slug: string
  logo: string
}

const MOCK_LEAGUES: League[] = [
  { id: 1, name: 'FIFA World Cup 2026', slug: 'fifa-world-cup-2026', logo: 'https://api.fifa.com/api/v3/picture/tournaments-sq-5/255711_w' },
  { id: 2, name: 'UEFA Champions League', slug: 'uefa-champions-league', logo: 'https://img.uefa.com/imgml/uefacom/ucl/2024/logos/logo_dark.svg' },
  { id: 3, name: 'English Premier League', slug: 'epl', logo: 'https://resources.premierleague.com/premierleague/badges/t1.png' },
  { id: 4, name: 'La Liga', slug: 'la-liga', logo: 'https://assets.laliga.com/assets/logos/laliga-v-negro/laliga-v-negro-300x300.png' },
  { id: 5, name: 'Serie A', slug: 'serie-a', logo: 'https://www.legaseriea.it/assets/logo-serie-a-2024.svg' },
  { id: 6, name: 'Bundesliga', slug: 'bundesliga', logo: 'https://www.bundesliga.com/assets/logo/bundesliga-logo-2021.svg' },
]

export default function Home() {
  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Ahmed Sports Live</h1>
        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-4">
        {MOCK_LEAGUES.map((league) => (
          <Link href={`/league/${league.slug}`} key={league.id}>
            <div className="bg-white rounded-lg overflow-hidden active:scale-95 transition">
              <div className="h-24 flex items-center justify-center p-2 bg-gray-100">
                <img src={league.logo} alt={league.name} className="max-h-16 max-w-full object-contain" />
              </div>
              <div className="bg-[#1A1A4B] p-2">
                <h2 className="text-white text-sm font-semibold text-center truncate">{league.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
