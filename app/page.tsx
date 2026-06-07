import Link from 'next/link'

const LEAGUES = [
  { name: 'FIFA World Cup 2026', slug: 'fifa-world-cup-2026', emoji: '🏆' },
  { name: 'EPL', slug: 'epl', emoji: '⚽' },
  { name: 'UEFA Champions League', slug: 'uefa-champions-league', emoji: '⭐' },
  { name: 'La Liga', slug: 'la-liga', emoji: '🇪🇸' },
  { name: 'Serie A', slug: 'serie-a', emoji: '🇮🇹' },
  { name: 'Bundesliga', slug: 'bundesliga', emoji: '🇩🇪' }
]

export default function HomePage() {
  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-4">
        <h1 className="text-white text-2xl font-bold text-center">Sports Live 🔴</h1>
        <p className="text-gray-300 text-center text-sm mt-1">Select a league to watch live</p>
      </div>

      <div className="p-4">
        {/* YouTube Live Link */}
        <a
          href="https://www.youtube.com/live/M152TYUrZ68"
          target="_blank"
          className="block bg-red-600 text-white text-center py-3 rounded-lg mb-4 font-bold text-lg active:scale-95"
        >
          🔴 WATCH LIVE NOW
        </a>

        <div className="grid grid-cols-2 gap-3">
          {LEAGUES.map((league) => (
            <Link
              key={league.slug}
              href={`/league/${league.slug}`}
              className="bg-[#1A1A4B] rounded-lg p-6 text-center active:scale-95 transition"
            >
              <div className="text-4xl mb-2">{league.emoji}</div>
              <div className="text-white font-bold text-sm">{league.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
