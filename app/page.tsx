import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface Match {
  id: number
  league: string
  team1: string
  team2: string
  time: string
  channel1: string
  channel2: string
  channel3: string
  link1: string
  link2: string
  link3: string
  created_at: string
}

export const revalidate = 0

export default async function Home() {
  const { data: matches } = await supabase
    .from('matches')
    .select('*')
    .gte('time', new Date().toISOString())
    .order('time', { ascending: true })

  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        
        {/* LOGO-GAAGA AHMED LIVE TV */}
        <div className="flex justify-center mb-8 mt-4">
          <img 
            src="https://4dar91ffoetct2nu.public.blob.vercel-storage.com/AQN29k9rmW1lBjZ6UtMCYUk_Wq-U_KQWcGTJ2P9aQV6O9SrmlnRdbUWwQK44ihl3-4GPznRR3ms4qBl2NrQVyjib.jpg" 
            alt="Ahmed Live TV" 
            className="w-64 h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          {matches && matches.length > 0 ? (
            matches.map((match: Match) => (
              <div key={match.id} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <div className="text-sm text-zinc-400 mb-2">{match.league}</div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold">{match.team1}</div>
                  <div className="text-zinc-500">VS</div>
                  <div className="text-xl font-bold">{match.team2}</div>
                </div>
                <div className="text-center text-zinc-300 mb-6">
                  {new Date(match.time).toLocaleTimeString('en-GB', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    timeZone: 'Africa/Nairobi'
                  })}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {match.link1 && (
                    <a 
                      href={match.link1} 
                      target="_blank" 
                      className="bg-green-600 hover:bg-green-700 text-center py-3 rounded-lg font-semibold transition"
                    >
                      {match.channel1 || 'Channel 1 HD'}
                    </a>
                  )}
                  {match.link2 && (
                    <a 
                      href={match.link2} 
                      target="_blank" 
                      className="bg-blue-600 hover:bg-blue-700 text-center py-3 rounded-lg font-semibold transition"
                    >
                      {match.channel2 || 'Channel 2 FHD'}
                    </a>
                  )}
                  {match.link3 && (
                    <a 
                      href={match.link3} 
                      target="_blank" 
                      className="bg-purple-600 hover:bg-purple-700 text-center py-3 rounded-lg font-semibold transition"
                    >
                      {match.channel3 || 'Channel 3 SD'}
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-zinc-500 mt-20">
              Wax ciyaaro ah lama helin. Supabase xog ku dar.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
