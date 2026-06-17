'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", youtube: "R0BYkr7wTZ4" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍", youtube: null },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", youtube: null },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", youtube: null },
];

const FEATURED_TV = [
  { title: "SIIR TV", url: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734", bg: "from-blue-900 to-black" },
  { title: "BeIN Sports", url: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734", bg: "from-green-900 to-black" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-600 to-black/20" },
  { country: "Global", flag: "🌍", status: "Live", bg: "from-purple-500 to-indigo-700" },
];

// LEAGUES DATA
const FOOTBALL_LEAGUES = [
  { id: 1, name: "FIFA World Cup", logo: "🏆", bg: "bg-gradient-to-r from-blue-600 to-blue-800" },
  { id: 2, name: "International Friendly", logo: "⚽", bg: "bg-gradient-to-r from-slate-700 to-slate-900" },
  { id: 3, name: "English Premier League", logo: "🦁", bg: "bg-gradient-to-r from-purple-700 to-purple-900" },
  { id: 4, name: "Serie A", logo: "🇮🇹", bg: "bg-gradient-to-r from-blue-500 to-blue-700" },
  { id: 5, name: "La Liga", logo: "🇪🇸", bg: "bg-gradient-to-r from-red-600 to-yellow-500" },
  { id: 6, name: "Ligue 1", logo: "🇫🇷", bg: "bg-gradient-to-r from-slate-600 to-slate-800" },
];

// MATCHES DATA - LINK CUSUB
const MATCHES_DATA: Record<number, any[]> = {
  1: [
    { id: 1, team1: "England", team2: "Croatia", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇭🇷", time: "Starting Soon...", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734" },
    { id: 2, team1: "Ghana", team2: "Panama", flag1: "🇬🇭", flag2: "🇵🇦", time: "18/Jun/2026 02:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734" },
    { id: 3, team1: "Uzbekistan", team2: "Colombia", flag1: "🇺🇿", flag2: "🇨🇴", time: "18/Jun/2026 05:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734" },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734" },
    { id: 2, team1: "Man City", team2: "Liverpool", flag1: "🔵", flag2: "🔴", time: "Tomorrow 19:30", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734" },
  ],
  5: [
    { id: 1, team1: "Barcelona", team2: "Real Madrid", flag1: "🔵", flag2: "⚪", time: "Sunday 22:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734" },
  ],
};

// --- COMPONENTS ---
const Header = () => (
  <header className="p-4 flex justify-between items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-1 z-50 mt-3 rounded-b-2xl mx-2 shadow-xl">
    <h1 className="text-2xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 w-full bg-[#0a0a1a]/95 border-t border-white/10 p-4 flex justify-around backdrop-blur-xl z-50 shadow-2xl rounded-t-3xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab ? 'opacity-100 scale-110 text-blue-500' : 'opacity-60'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

// --- PAGES ---
const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  const handlePlayVideo = (youtubeId: string, title: string) => {
    setActiveVideo(youtubeId);
    setActiveTitle(title);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="p-4 pb-24">
      {activeVideo && (
        <div className="mb-6 bg-[#111122] rounded-3xl p-4 border border-blue-500/30 shadow-2xl">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse">LIVE</span>
              <p className="text-sm font-bold text-white">{activeTitle}</p>
            </div>
            <button
              onClick={() => setActiveVideo(null)}
              className="text-white/60 hover:text-white text-3xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl mb-6 p-8 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <div className="text-6xl mb-4">📺</div>
          <h2 className="text-3xl font-black text-white mb-2">SIIR TV</h2>
          <p className="text-white/70 text-sm mb-6">Daawo ciyaaraha tooska ah HD</p>
          <a
            href="https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4697734"
            target="_blank"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            ▶ DAARO LIVE HADA
          </a>
        </div>
      </div>

      <div className="flex items-center mb-8 px-2">
        <span className="bg-red-600 text-xs px-3 py-1 rounded-full mr-2 animate-pulse">LIVE</span>
        <p className="text-sm font-bold text-white">SIIR TV - Live Streaming</p>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 text-white/90">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {SPORTS_CHANNELS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => ch.youtube && handlePlayVideo(ch.youtube, ch.title)}
              disabled={!ch.youtube}
              className={`shrink-0 w-40 h-28 bg-gradient-to-br ${ch.bg} rounded-2xl p
