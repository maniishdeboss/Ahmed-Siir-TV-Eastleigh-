'use client'
import { useState } from 'react'

const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", subtitle: "Live Match", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Premier League", subtitle: "Super Sunday", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 3, title: "Champions League", subtitle: "Europe Nights", bg: "from-blue-600 to-cyan-700", icon: "🌍" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia 🇸🇴", status: "Live Streaming", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia 🇬🇲", status: "Live Streaming", bg: "from-red-500 to-green-600" },
  { country: "Kenya 🇰🇪 ", status: "Available", bg: "from-green-700 to-white/10" },
];

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<'home' | 'live' | 'movies'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    if (currentTab === 'live') {
      return (
        <div className="p-4 pt-10">
          <h2 className="text-xl font-bold mb-6">Live TV Streaming</h2>
          <div onClick={() => setActiveStream(STREAM_URL)} className="w-full aspect-video bg-blue-900 rounded-2xl flex items-center justify-center cursor-pointer border border-white/10">
            <span className="text-4xl">📡</span>
            <p className="ml-4 font-bold">Watch beIN SPORTS Live</p>
          </div>
        </div>
      );
    }
    if (currentTab === 'movies') {
      return (
        <div className="p-4 pt-10">
          <h2 className="text-xl font-bold mb-4">Browse & Search Matches</h2>
          <input 
            type="text" 
            placeholder="Search matches or teams..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 bg-[#111122] rounded-xl border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      );
    }
    return (
      <>
        {/* Header & Video Player (Home Tab) */}
        <div className="p-4 bg-gradient-to-b from-blue-950/40 to-[#06060f] border-b border-white/5">
          <h1 className="text-xl font-black text-center bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent mb-4">
            🇸🇴 Ahmed Abdikani LIVE TV 🇬🇲 📺
          </h1>
          {activeStream ? (
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 relative">
              <iframe src={`${activeStream}?autoplay=1`} className="w-full h-full" allowFullScreen />
              <button onClick={() => setActiveStream(null)} className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-xs">✕ Close</button>
            </div>
          ) : (
            <div onClick={() => setActiveStream(STREAM_URL)} className="w-full aspect-video bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl flex flex-col items-center justify-center cursor-pointer">
              <div className="text-2xl font-bold mb-2">▶</div>
              <p className="text-sm">Tap to Stream beIN SPORTS 1 HD</p>
            </div>
          )}
        </div>

        {/* Highlights Section */}
        <div className="mt-6 px-4">
          <h2 className="font-extrabold mb-3">Recent Match Highlights</h2>
          <div className="space-y-3">
            {['Goals Highlights 🔥', 'Match Recap 📋', 'Top Saves 🧤'].map((item) => (
              <div 
                key={item} 
                onClick={() => window.open(`https://www.youtube.com/results?search_query=${item.replace(' ', '+')}`, '_blank')}
                className="bg-[#111122] p-4 rounded-xl border border-white/5 cursor-pointer hover:bg-[#15152d]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28">
      {renderContent()}

      {/* Navigation */}
      <div className="fixed bottom-0 inset-x-0 bg-[#0c0c1a]/95 border-t border-white/10 px-6 py-3 flex justify-between items-center z-50">
        <button onClick={() => setCurrentTab('home')} className={`flex flex-col items-center ${currentTab === 'home' ? 'text-blue-400' : 'text-gray-400'}`}>
          <span className="text-lg">🏠</span><span className="text-[10px]">Home</span>
        </button>
        <button onClick={() => setCurrentTab('live')} className={`flex flex-col items-center ${currentTab === 'live' ? 'text-blue-400' : 'text-gray-400'}`}>
          <span className="text-lg">📡</span><span className="text-[10px]">Live TV</span>
        </button>
        <button onClick={() => setCurrentTab('movies')} className={`flex flex-col items-center ${currentTab === 'movies' ? 'text-blue-400' : 'text-gray-400'}`}>
          <span className="text-lg">🎬</span><span className="text-[10px]">Browse</span>
        </button>
      </div>
    </div>
  );
}
