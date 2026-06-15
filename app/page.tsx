'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆" },
];

const PREMIUM_TV = [
  { title: "SIIR TV", url: "https://www.youtube.com/embed/XghNs0Cx6JQ" }, 
  { title: "KOORA TV", url: "https://www.youtube.com/embed/2A_OLvCo_q8" },
];

const LIVE_CHANNELS = [
  { src: "XghNs0Cx6JQ", title: "Makkah Live HD", color: "text-white" },
  { src: "2A_OLvCo_q8", title: "Wrestling WWE Live", color: "text-red-500" },
  { src: "gCNeDWCI0vo", title: "Somalia Live TV", color: "text-blue-400" },
  { src: "Kb638nMYjcw", title: "Kenya Live TV", color: "text-green-500" },
  { src: "MiQe9ob9aDc", title: "Animals Live TV 1", color: "text-yellow-500" },
  { src: "q9iTGiUtYik", title: "Animals Live TV 2", color: "text-yellow-500" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", bg: "from-green-600 to-black/20" },
  { country: "Global", flag: "🌍", bg: "from-purple-500 to-indigo-700" },
];

// --- MAIN APP ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  // Halkan ku beddel ID-ga muuqaalka Youtube-ka aad rabto inuu ka dhex muuqdo Hero Player-ka
  const [activeStream, setActiveStream] = useState("https://www.youtube.com/embed/HUK_wB83_dY");

  const HomePage = () => (
    <main className="p-4 pb-24">
      <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl mb-6">
        <iframe src={`${activeStream}?autoplay=1`} className="w-full h-full" allowFullScreen />
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 text-white/90">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} className={`shrink-0 w-40 h-28 bg-gradient-to-br ${ch.bg} rounded-2xl p-4 flex flex-col justify-between border border-white/5`}>
              <span className="text-2xl">{ch.icon}</span>
              <h3 className="font-bold text-xs text-white">{ch.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 p-4 rounded-3xl bg-[#111122] border border-green-500/30">
        <h2 className="text-lg font-bold mb-4 text-green-400">Premium Live TV</h2>
        <div className="grid grid-cols-2 gap-4">
          {PREMIUM_TV.map((tv, i) => (
            <button key={i} onClick={() => setActiveStream(tv.url)} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-green-600/20 transition-all">
              <p className="font-black text-white">{tv.title}</p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );

  const renderPage = () => {
    switch (activeTab) {
      case 'Home': return <HomePage />;
      case 'Live': return (
        <section className="p-4 text-white pb-24">
          <h2 className="text-2xl font-bold mb-6 text-center">Live Streaming Channels</h2>
          <div className="space-y-6">
            {LIVE_CHANNELS.map((item, index) => (
              <div key={index} className="bg-[#111122] rounded-3xl p-4 border border-white/5 shadow-2xl">
                <div className="aspect-video bg-black rounded-xl overflow-hidden mb-3 border border-white/5">
                  <iframe src={`https://www.youtube.com/embed/${item.src}`} className="w-full h-full" allowFullScreen />
                </div>
                <p className={`text-sm font-bold ${item.color}`}>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      );
      case 'Browse': return (
        <section className="p-4 pb-24 text-center">
            <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
            <div className="grid grid-cols-2 gap-4">
                {WATCH_BY_COUNTRY.map((c, i) => (
                    <div key={i} className={`bg-gradient-to-br ${c.bg} p-4 rounded-2xl border border-white/10`}>
                        <span className="text-3xl">{c.flag}</span>
                        <p className="font-bold text-sm text-white">{c.country}</p>
                    </div>
                ))}
            </div>
        </section>
      );
      case 'Profile': return (
        <section className="p-4 pb-24 text-center">
            <h2 className="text-xl font-bold">Profile</h2>
            <p className="text-gray-400">Ahmed Abdikani Mohamed</p>
        </section>
      );
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
      </Head>
      <header className="p-4 flex justify-between items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-1 z-50 mt-3 rounded-b-2xl mx-2 shadow-xl">
        <h1 className="text-2xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
      </header>
      {renderPage()}
      <nav className="fixed bottom-0 w-full bg-[#0a0a1a]/95 border-t border-white/10 p-4 flex justify-around backdrop-blur-xl z-50 shadow-2xl rounded-t-3xl">
        {['Home', 'Live', 'Browse', 'Profile'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab ? 'opacity-100 scale-110' : 'opacity-60'}`}>
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}
