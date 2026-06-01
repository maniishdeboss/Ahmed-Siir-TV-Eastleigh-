"use client"

import { useEffect, useState, useRef } from "react"
import { createClient } from "@supabase/supabase-js"
import Hls from 'hls.js'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface Match {
  id: number
  homeTeam: string
  awayTeam: string
  status: "live" | "upcoming" | "finished"
  videoUrl?: string
  time?: string
}

export default function SportsStreamingApp() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [activeStream, setActiveStream] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    async function getMatches() {
      try {
        setLoading(true)
        const { data, error } = await supabase
         .from("matches")
         .select("*")
         .order("status", { ascending: false })

        if (error) throw error
        if (data) {
          const formatted = data.map((m: any) => ({
            id: m.id,
            homeTeam: m.team_one || m.homeTeam,
            awayTeam: m.team_two || m.awayTeam,
            status: m.status.toLowerCase(),
            videoUrl: m.stream_url || m.videoUrl,
            time: m.time
          }))
          setMatches(formatted)
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    getMatches()

    const channel = supabase
     .channel('matches-changes')
     .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'matches' }, 
        () => getMatches()
      )
     .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  useEffect(() => {
    if (activeStream && activeStream.includes(".m3u8") && videoRef.current) {
      const video = videoRef.current
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(activeStream)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => video.play())
        return () => hls.destroy()
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = activeStream
        video.play()
      }
    }
  }, [activeStream])

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
        Ahmed Sports Live
      </h1>
      
      {loading? (
        <div>Xogta waa la soo rarayaa...</div>
      ) : matches.length === 0? (
        <div>Wax ciyaaro ah lama helin. Supabase xog ku dar.</div>
      ) : (
        <div className="grid gap-4">
          {matches.map((match) => (
            <Card key={match.id} className="bg-slate-900 p-4 flex justify-between items-center border-slate-800">
              <div>
                <p className="font-medium">{match.homeTeam} vs {match.awayTeam}</p>
                <span className="text-xs text-slate-400">{match.status.toUpperCase()} {match.time || ''}</span>
              </div>
              <Button
                onClick={() => {
                  if (match.status === "live" && match.videoUrl) {
                    setActiveStream(match.videoUrl)
                  } else {
                    alert("Ciyaartan ma shidna hadda")
                  }
                }}
                disabled={match.status!== "live"}
                className={match.status === "live"? "bg-red-600 hover:bg-red-700" : "bg-gray-700"}
              >
                Watch Live
              </Button>
            </Card>
          ))}
        </div>
      )}

      {activeStream && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-xl w-full max-w-3xl">
            <div className="p-4 flex justify-between border-b border-slate-800">
              <span className="font-semibold text-red-500">Toos u Daawasho</span>
              <button onClick={() => setActiveStream(null)} className="text-slate-400 hover:text-white">Xir</button>
            </div>
            <div className="aspect-video bg-black">
              {activeStream.includes(".m3u8")? (
                <video ref={videoRef} controls autoPlay className="w-full h-full" />
              ) : (
                <iframe src={activeStream} className="w-full h-full border-0" allowFullScreen />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
