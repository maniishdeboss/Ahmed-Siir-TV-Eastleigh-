'use client'
import { useState } from 'react';
import Head from 'next/head';

// --- DATA ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-600 to-black/20" },
];

// --- COMPONENTS ---
const Header = () => (
  <header className="p-5 border-b border-white/10 bg-[#06060f] sticky top-0 z-50 flex justify-between items-center">
    <h1 className="text-2xl font-black text-white italic">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
    <button className="bg-white/10 p-2 rounded-full">🔔</button>
  </header>
);

const VideoPlayer = ({ url }: { url: string }) => (
  <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-4">
    <iframe 
      src={url} 
      className="w-full h-full" 
      allowFullScreen 
      title="Live Stream"
    />
  </div>
);

// --- MAIN APP ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [activeStream] = useState("https://www.youtube.com/embed/dQw4w9WgXcQ"); 

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans pb-24">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
      </Head>

      <Header />

      <main className="p-4">
        {activeTab === 'Home' && (
          <>
            <VideoPlayer url={activeStream} />
            
            <h2 className="text-lg font-bold mb-4">Featured Sports</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {SPORTS_CHANNELS.map((ch) => (
                <div key={ch.id} className={`p-4 bg-gradient-to-r ${ch.bg} rounded-2xl`}>
                  <span className="text-2xl">{ch.icon}</span>
                  <p className="font-bold text-sm mt-2">{ch.title}</p>
                </div>
              ))}
            </div>

            <h2 className="text-lg font-bold mb-4">Watch By Country</h2>
            <div className="space-y-3">
              {WATCH_BY_COUNTRY.map((c, i) => (
                <div key={i} className={`p-4 bg-gradient-to-r ${c.bg} rounded-2xl flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.flag}</span>
                    <p className="font-bold">{c.country}</p>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-1 rounded">{c.status}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-[#0a0a1a] border-t border-white/10 p-4 flex justify-around z-50">
        {['Home', 'Live', 'Browse', 'Profile'].map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-bold transition-all ${activeTab === tab ? 'text-blue-500 scale-110' : 'text-gray-500'}`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>
    </div>
  );
}
