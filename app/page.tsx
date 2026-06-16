'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-600 to-black/20" },
  { country: "Global", flag: "🌍", status: "Live", bg: "from-purple-500 to-indigo-700" },
];

// --- COMPONENTS ---
const Header = () => (
  <header className="p-4 flex justify-between items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50">
    <h1 className="text-xl font-black text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
    <div className="bg-white/10 p-2 rounded-full">🔔</div>
  </header>
);

const VideoPlayer = ({ url }: { url: string }) => (
  <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
    <iframe 
      src={url} 
      className="w-full h-full" 
      allowFullScreen 
      title="Live Stream"
      onError={(e: any) => e.target.style.display = 'none'} 
    />
  </div>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => (
  <nav className="fixed bottom-0 w-full bg-[#0a0a1a] border-t border-white/10 p-4 flex justify-around z-50">
    {['Home', 'Live', 'Browse', 'Profile'].map((tab) => (
      <button 
        key={tab} 
        onClick={() => setActiveTab(tab)}
        className={`text-xs font-bold ${activeTab === tab ? 'text-blue-500' : 'text-gray-500'}`}
      >
        {tab.toUpperCase()}
      </button>
    ))}
  </nav>
);

// --- MAIN PAGE ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  // FIIRO GAAR AH: Link-ga haddii uu xiran yahay (refused), beddel URL-kan hoose mid shaqeynaya
  const [activeStream] = useState("https://www.youtube.com/embed/live_stream?channel=UCEXAMPLE");

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-20 font-sans">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
      </Head>

      <Header />

      <main className="p-4">
        {activeTab === 'Home' && (
          <>
            <VideoPlayer url={activeStream} />
            <h2 className="text-lg font-bold mt-6 mb-4">Featured Sports</h2>
            <div className="grid grid-cols-2 gap-4">
              {SPORTS_CHANNELS.map((ch) => (
                <div key={ch.id} className={`p-4 bg-gradient-to-br ${ch.bg} rounded-2xl`}>
                  <span className="text-2xl">{ch.icon}</span>
                  <p className="font-bold text-sm mt-2">{ch.title}</p>
                </div>
              ))}
            </div>
          </>
        )}
        
        {activeTab === 'Live' && (
          <div className="text-center py-20 text-gray-500">Live events coming soon...</div>
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
