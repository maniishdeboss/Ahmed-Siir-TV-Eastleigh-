"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Match {
  id: number
  homeTeam: string
  awayTeam: string
  status: "live" | "upcoming" | "finished"
  videoUrl?: string
}

interface ChatMessage {
  id: number
  username: string
  message: string
  timestamp: Date
}

const matches: Match[] = [
  { id: 1, homeTeam: "Arsenal", awayTeam: "Chelsea", status: "live", videoUrl: "https://www.youtube.com/embed/live_stream" },
  { id: 2, homeTeam: "Real Madrid", awayTeam: "Barcelona", status: "live", videoUrl: "https://www.youtube.com/embed/live_stream" },
  { id: 3, homeTeam: "Manchester United", awayTeam: "Liverpool", status: "upcoming" },
  { id: 4, homeTeam: "Bayern Munich", awayTeam: "Dortmund", status: "upcoming" },
]

export default function HomePage() {
  const [currentMatch, setCurrentMatch] = useState<Match | null>(null)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: 1, username: "Taageere_123", message: "Waa ciyaar fiican!", timestamp: new Date() },
    { id: 2, username: "Fan_456", message: "Arsenal way ku guuleysan!", timestamp: new Date() },
    { id: 3, username: "Kubada_789", message: "Goolka labaad oo dhow!", timestamp: new Date() },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [username] = useState(`Taageere_${Math.floor(Math.random() * 900 + 100)}`)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  const playMatch = (match: Match) => {
    setCurrentMatch(match)
  }

  const sendMessage = () => {
    if (newMessage.trim() === "") return
    
    const message: ChatMessage = {
      id: Date.now(),
      username,
      message: newMessage.trim(),
      timestamp: new Date(),
    }
    
    setChatMessages((prev) => [...prev, message])
    setNewMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent px-5 py-5 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-primary-foreground md:text-3xl">
          Ahmed Sports Live
        </h1>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-6">
        {/* Video Player Section */}
        <section className="mb-6 overflow-hidden rounded-xl bg-black">
          <div className="aspect-video w-full">
            {currentMatch ? (
              <iframe
                src={currentMatch.videoUrl}
                className="h-full w-full"
                allowFullScreen
                title={`${currentMatch.homeTeam} vs ${currentMatch.awayTeam}`}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-secondary text-muted-foreground">
                <span className="text-5xl">⚽</span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">Ahmed Sports Live</h3>
                <p className="mt-2 text-sm text-primary">
                  GUJI BATOONKA &apos;DAAWO&apos; EE HOOSE SI AD U SHIDDO CIYAARTA
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          {/* Matches Section */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 border-l-4 border-primary pl-3 text-xl font-semibold">
              Ciyaaraha Maanta
            </h2>
            <div className="space-y-3">
              {matches.map((match) => (
                <Card
                  key={match.id}
                  className="flex items-center justify-between border-border bg-card p-4"
                >
                  <div>
                    {match.status === "live" && (
                      <span className="flex items-center gap-1 text-sm font-bold text-destructive">
                        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-destructive" />
                        LIVE
                      </span>
                    )}
                    {match.status === "upcoming" && (
                      <span className="text-sm font-medium text-muted-foreground">
                        SOO SOCOTA
                      </span>
                    )}
                    <div className="mt-1 font-bold text-card-foreground">
                      ⚽ {match.homeTeam} vs {match.awayTeam}
                    </div>
                  </div>
                  <Button
                    onClick={() => playMatch(match)}
                    disabled={match.status !== "live"}
                    className="bg-primary font-bold text-primary-foreground hover:bg-accent"
                  >
                    Daawo
                  </Button>
                </Card>
              ))}
            </div>
          </section>

          {/* Chat Section */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 border-l-4 border-primary pl-3 text-xl font-semibold">
              Falanqaynta
            </h2>
            <Card className="flex h-[400px] flex-col border-border bg-card">
              {/* Chat Header */}
              <div className="bg-secondary px-4 py-3 font-bold text-secondary-foreground">
                Chat-ka Taageerayaasha (Live)
              </div>

              {/* Chat Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-3">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="w-fit max-w-[85%] rounded-lg bg-secondary px-3 py-2"
                    >
                      <span className="block text-xs font-bold text-primary">
                        {msg.username}:
                      </span>
                      <span className="text-sm text-secondary-foreground">{msg.message}</span>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              </ScrollArea>

              {/* Chat Input */}
              <div className="flex gap-2 p-3">
                <Input
                  type="text"
                  placeholder="Farriintaada qor..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 border-border bg-input text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  onClick={sendMessage}
                  className="bg-primary font-bold text-primary-foreground hover:bg-accent"
                >
                  Dir
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground">
        © 2026 Ahmed Sports Live.
      </footer>
    </div>
  )
}
