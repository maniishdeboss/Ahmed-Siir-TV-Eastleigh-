"use client"
import { useRouter } from "next/navigation"

export default function LeaguePage() {
  const router = useRouter()

  const channels = [
    {
      name: "Ahmed Abdikani Live 🇸🇴🇨🇦",
      url: "https://www.youtube.com/embed/yeRMYp_hlo8?autoplay=1",
      desc: "Live Stream by Ahmed",
      logo: "📡"
    },
    {
      name: "Red Bull TV Live",
      url: "https://www.youtube.com/embed/xV9QjBF2E8M?autoplay=1",
      desc: "Extreme Sports 24/7",
      logo: "🏎️"
    },
    {
      name: "FIFA+ Live",
      url: "https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1",
      desc: "Football Live & Highlights",
      logo: "⚽"
    },
    {
      name: "Al Jazeera English Live",
      url: "https://www.youtube.com/embed/gCNeDWCI0vo?autoplay=1",
      desc: "24/7 World News",
      logo: "🌍"
    },
    {
      name: "Al Jazeera Arabic Live",
      url: "https://www.youtube.com/embed/bNyUyrR0PHo?autoplay=1",
      desc: "أخبار العالم مباشر",
      logo: "📺"
    },
    {
      name: "Makkah Live - Al-Haram",
      url: "https://www.youtube.com/embed/t-Nz9hVSK_Y?autoplay=1",
      desc: "المسجد الحرام مباشر",
      logo: "🕋"
    },
    {
      name: "Madina Live - Al-Nabawi",
      url: "https://www.youtube.com/embed/t6g6zLaR0Y0?autoplay=1",
      desc: "المسجد النبوي مباشر",
      logo: "🕌"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <div className="bg-[#1a1a2e] p-4 flex items-center">
        <button 
          onClick={() => router.back()} 
          className="text-white mr-4 text-2xl"
        >
          ←
        </button>
        <h1 className="text-xl font-bold text-white">Live Channels</h1>
      </div>

      <div className="p-4 space-y-3">
        {channels.map((ch, i) => (
          <div key={i} className="bg-[#1a1a2e] rounded-lg p-4 border border-[#2a2a4a]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{ch.logo}</span>
                <div>
                  <h3 className="text-white font-bold">{ch.name}</h3>
                  <p className="text-zinc-400 text-sm">{ch.desc}</p>
                </div>
              </div>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
                LIVE
              </span>
            </div>
            
            <button
              onClick={() => router.push(`/watch?url=${encodeURIComponent(ch.url)}&type=youtube`)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Watch HD
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
