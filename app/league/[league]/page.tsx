"use client"

import { useState } from "react"

const matches = [
  {
    name: "NTV Kenya Live",
    url: "https://www.youtube.com/embed/HvZt-nh9sGg",
    team1: "NTV Kenya",
    team2: "News 24/7",
    category: "News"
  },
  {
    name: "Citizen TV Live", 
    url: "https://www.youtube.com/embed/fv-gLPFw8KI",
    team1: "Citizen TV",
    team2: "News 24/7",
    category: "News"
  },
  {
    name: "K24 TV Live",
    url: "https://www.youtube.com/embed/Lw0sAFB_200",
    team1: "K24 TV", 
    team2: "News 24/7",
    category: "News"
  },
  {
    name: "KBC Channel 1 Live",
    url: "https://www.youtube.com/embed/sRH0Jdxh580",
    team1: "KBC TV", 
    team2: "Kenya Live",
    category: "National"
  },
  {
    name: "Inooro TV Live",
    url: "https://www.youtube.com/embed/9rmHzOb5ECs",
    team1: "Inooro TV", 
    team2: "Kikuyu Live",
    category: "Kikuyu"
  },
  {
    name: "TV47 Live",
    url: "https://www.youtube.com/embed/QeAP_ks5VOY",
    team1: "TV47 Kenya", 
    team2: "News 24/7",
    category: "News"
  },
  {
    name: "Kameme TV Live",
    url: "https://www.youtube.com/embed/PN2hlSwKL1k",
    team1: "Kameme TV", 
    team2: "Kikuyu Live",
    category: "Kikuyu"
  },
  {
    name: "KTN News Live",
    url: "https://www.youtube.com/embed/P05CMkI0Ipc",
    team1: "KTN News", 
    team2: "Kenya Live",
    category: "News"
  },
  {
    name: "KTN Home Live",
    url: "https://www.youtube.com/embed/XghNs0Cx6JQ",
    team1: "KTN Home", 
    team2: "Entertainment",
    category: "Entertainment"
  },
  {
    name: "KTN Burudani Live",
    url: "https://www.youtube.com/embed/SyqGcOUMBqM",
    team1: "KTN Burudani", 
    team2: "Entertainment 24/7",
    category: "Entertainment"
  },
  {
    name: "KTN News Live HD",
    url: "https://www.youtube.com/embed/MiQe9ob9aDc",
    team1: "KTN News HD", 
    team2: "News HD",
    category: "News"
  },
]

export default function Page() {
  const [selected, setSelected] = useState(matches[0])
  const [filter, setFilter] = useState("All")

  const categories = ["All", "News", "Kikuyu", "Entertainment", "National"]
  
  const filteredMatches = filter === "All" 
   ? matches 
    : matches.filter(match => match.category === filter)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-green-600 p-4 sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          🇰🇪 Kenya Live TV Hub
        </h1>
        <p className="text-center text-sm opacity-90 mt-1">
          11 Channels - News, Kikuyu, Entertainment
        </p>
      </header>

      <div className="container mx-auto p-4">
        {/* Video Player */}
        <div className="mb-6">
          <div className="bg-zinc-900 rounded-lg p-3 mb-2">
            <h2 className="text-xl font-bold">{selected.name}</h2>
            <p className="text-sm text-zinc-400">{selected.team1} • {selected.team2}</p>
          </div>
          
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              key={selected.url}
              src={`${selected.url}?autoplay=1`}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                filter === cat 
                 ? "bg-red-600 text-white" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredMatches.map((match, index) => (
            <button
              key={index}
              onClick={() => setSelected(match)}
              className={`p-4 rounded-lg text-left transition border-2 ${
                selected.url === match.url
                 ? "bg-red-600 border-red-500"
                  : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{match.team1}</h3>
                  <p className="text-sm text-zinc-400">{match.team2}</p>
                </div>
                <span className="text-xs bg-green-600 px-2 py-1 rounded-full">
                  LIVE
                </span>
              </div>
              <div className="mt-2 text-xs text-zinc-500">{match.category}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 text-zinc-600 text-sm mt-8">
        Kenya Live TV Hub © 2026 - 11 Channels
      </footer>
    </div>
  )
}
