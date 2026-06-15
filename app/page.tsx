'use client'
import { useState } from 'react'

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState<'home' | 'live' | 'browse'>('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <div className="p-4 animate-in fade-in duration-500">
            <h1 className="text-xl font-bold text-center mb-6">
              🇸🇴 Ahmed Abdikani LIVE TV 🇬🇲 📺
            </h1>
            <div className="bg-yellow-600 p-6 rounded-2xl mb-4 text-white">
              <h2 className="font-bold">FIFA World Cup 2026 🏆</h2>
            </div>
            {/* Halkan waxaad ku dari kartaa content-kii hore ee Home */}
          </div>
        );
      case 'live':
        return <div className="p-4 text-center py-20 text-gray-400"><h1>Live Channels Page 📡</h1></div>;
      case 'browse':
        return <div className="p-4 text-center py-20 text-gray-400"><h1>Browse Library 🎬</h1></div>;
    }
  };

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-24">
      {renderContent()}

      <div className="fixed bottom-0 inset-x-0 bg-[#0c0c1a]/95 border-t border-white/10 backdrop-blur-lg px-6 py-3 flex justify-between items-center z-50">
        <button onClick={() => setCurrentTab('home')} className={`flex flex-col items-center gap-1 ${currentTab === 'home' ? 'text-blue-400' : 'text-gray-500'}`}>
          <span>🏠</span><span className="text-[10px]">Home</span>
        </button>
        <button onClick={() => setCurrentTab('live')} className={`flex flex-col items-center gap-1 ${currentTab === 'live' ? 'text-blue-400' : 'text-gray-500'}`}>
          <span>📡</span><span className="text-[10px]">Live TV</span>
        </button>
        <button onClick={() => setCurrentTab('browse')} className={`flex flex-col items-center gap-1 ${currentTab === 'browse' ? 'text-blue-400' : 'text-gray-500'}`}>
          <span>🎬</span><span className="text-[10px]">Browse</span>
        </button>
      </div>
    </div>
  );
}
