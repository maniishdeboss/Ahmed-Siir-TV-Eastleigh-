'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

// Flag Component si calammada loo muujiyo iyada oo aan la isticmaalin emojis
const Flag = ({ code }: { code: string }) => (
  <img 
    src={`https://flagcdn.com/24x18/${code}.png`} 
    alt="flag" 
    className="w-5 h-4 inline-block mx-1 rounded-sm" 
  />
);

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-amber-500 to-yellow-600", icon: "🏆", flags: ["so"] },
  { id: 2, title: "Champions League", bg: "from-amber-500 to-yellow-600", icon: "🏆", flags: ["so"] },
  { id: 3, title: "Premier League", bg: "from-purple-600 to-indigo-700", icon: "⚽", flags: ["so"] },
  { id: 4, title: "Wrestling WWE", bg: "from-amber-500 to-yellow-600", icon: "🏆", flags: ["so"] },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", code: "so", status: "Live", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia", code: "et", status: "Live", bg: "from-red-500 to-green-600" },
  { country: "Kenya", code: "ke", status: "Available", bg: "from-green-700 to-white/10" },
];

const HIGHLIGHTS = [
  { title: "Goals Highlights", duration: "10 min", videoId: "5h-camjSQ-4" },
  { title: "News Aljazira", duration: "Live", videoId: "gCNeDWCI0vo" },
];

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28 font-sans">
      <Head>
        <title>Ahmed Abdikani LIVE TV</title>
      </Head>

      <div className="p-4 border-b border-white/5 flex justify-between items-center">
        <h1 className="text-lg font-black truncate">Ahmed Abdikani LIVE TV 🔴</h1>
      </div>

      <div className="p-4">
        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10">
          <iframe 
            src={activeStream || STREAM_URL} 
            className="w-full h-full" 
            allow="autoplay; encrypted-media"
            allowFullScreen 
          />
        </div>
      </div>

      {/* Featured Sports */}
      <div className="px-4 mb-6">
        <h2 className="font-bold mb-3">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} className={`shrink-0 w-64 h-36 bg-gradient-to-br ${ch.bg} rounded-xl p-4 flex flex-col justify-between`}>
              <div className="flex justify-between items-start">
                <div className="text-2xl">{ch.icon}</div>
                <span className="bg-white text-black text-[10px] font-black px-2 py-1 rounded-full uppercase">Watch Now</span>
              </div>
              <h3 className="font-bold text-sm">
                {ch.title} {ch.flags.map((f, i) => <Flag key={i} code={f} />)}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="px-4">
        <h2 className="font-bold mb-3">Recent Match Highlights</h2>
        {HIGHLIGHTS.map((h, i) => (
          <div key={i} className="bg-[#111122] p-3 rounded-xl mb-4">
            <p className="text-xs font-bold mb-2">{h.title}</p>
            <a 
              href={`https://www.youtube.com/watch?v=${h.videoId}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full aspect-video rounded-lg overflow-hidden border border-white/5"
            >
              <img 
                src={`https://img.youtube.com/vi/${h.videoId}/maxresdefault.jpg`} 
                alt="Thumbnail" 
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
