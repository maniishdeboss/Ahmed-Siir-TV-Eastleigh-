'use client'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Hls from 'hls.js' // npm install hls.js

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡" },
];

// Halkan geli m3u8 link-ga saxda ah ee SIIR TV
const FEATURED_TV = [
  { title: "SIIR TV", url: "PUT_YOUR_M3U8_LINK_HERE", bg: "from-blue-900 to-black" },
  { title: "KOORA TV", url: "https://koora-live.com/", bg: "from-green-900 to-black" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-600 to-black/20" },
  { country: "Global", flag: "🌍", status: "Live", bg: "from-purple-500 to-indigo-700" },
];

const LIVE_CHANNELS = [
  { src: "XghNs0Cx6JQ", title: "Makkah Live HD", color: "text-white" },
  { src: "2A_OLvCo_q8", title: "Wrestling WWE Live", color: "text-red-500" },
  { src: "gCNeDWCI0vo", title: "Somalia Live TV", color: "text-blue-400" },
  { src: "Kb638nMYjcw", title: "Kenya Live TV", color: "text-green-500" },
  { src: "MiQe9ob9aDc", title: "Animals Live TV 1", color: "text-yellow-500" },
  { src: "q9iTGiUtYik", title: "Animals Live TV 2", color: "text-yellow-500" },
];

// --- HLS VIDEO PLAYER COMPONENT ---
const HLSPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.ERROR, function (event, data) {
          console.log('HLS Error:', data);
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="w-full h-full"
      controls
      autoPlay
    />
  );
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
          className={`text- font-bold uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab? 'opacity-100 scale-110 text-blue-500' : 'opacity-60'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

// --- PLAYER MODAL COMPONENT ---
const PlayerModal = ({ isOpen, onClose, channel }: { isOpen: boolean; onClose: () => void; channel: any }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col">
      <div className="flex justify-between items-center p-4 bg-[#0a0a1a] border-b border-white/10">
        <h3 className="text-lg font-bold text-white">{channel.title}</h3>
        <button
          onClick={onClose}
          className="text-white bg-red-600 px-4 py-2 rounded-lg font-bold"
        >
          XIR ✕
        </button>
      </div>

      <div className="flex-1 w-full bg-black">
        {channel.url.includes('.m3u8')? (
          <HLSPlayer src={channel.url} />
        ) : (
          <iframe
            src={channel.url}
            className="w-full h-full"
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture"
            title={channel.title}
          />
        )}
      </div>
    </div>
  );
};

// --- PAGES ---
const HomePage = () => {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<any>(null);

  const openPlayer = (channel: any) => {
    setSelectedChannel(channel);
    setPlayerOpen(true);
  };

  // Ku badal kan m3u8 link-ga SIIR TV
  const mainStreamUrl = "PUT_YOUR_M3U8_LINK_HERE";

  return (
    <main className="p-4 pb-24">
      {/* SIIR TV - Hadda HLS Player */}
      <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl mb-6">
        <HLSPlayer src={mainStreamUrl} />
      </div>
      <div className="flex items-center mb-8 px-2">
        <span className="bg-red-600 text-xs px-3 py-1 rounded-full mr-2 animate-pulse">LIVE</span>
        <p className="text-sm font-bold text-white">SIIR TV - Live Streaming</p>
      </div>

      {/* Featured Sports */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 text-white/90">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} className={`shrink-0 w-40 h-28 bg-gradient-to-br ${ch.bg} rounded-2xl p-4 flex flex-col justify-between border border-white/5 shadow-lg`}>
              <span className="text-2xl">{ch.icon}</span>
              <h3 className="font-bold text-xs text-white">{ch.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Live TV */}
      <section className="mb-8 p-4 rounded-3xl bg-[#111122] border border-green-500/30">
        <h2 className="text-lg font-bold mb-4 text-green-400">Premium Live TV</h2>
        <div className="grid grid-cols-2 gap-4">
          {FEATURED_TV.map((tv, i) => (
            <button
              key={i}
              onClick={() => openPlayer(tv)}
              className={`bg-gradient-to-br ${tv.bg} p-8 rounded-2xl border border-white/10 text-center hover:scale-105 transition-transform shadow-lg active:scale-95`}
            >
              <p className="font-black text-white text-lg">{tv.title}</p>
              <p className="text-xs text-white/70 mt-1">Tap to watch</p>
            </button>
          ))}
        </div>
      </section>

      <PlayerModal
        isOpen={playerOpen}
        onClose={() => setPlayerOpen(false)}
        channel={selectedChannel}
      />
    </main>
  );
};

const LivePage = () => (
  <section className="p-4 text-white pb-24">
    <h2 className="text-2xl font-bold mb-6 text-center">Live Streaming Channels</h2>
    <div className="space-y-6">
      {LIVE_CHANNELS.map((item, index) => (
        <div key={index} className="bg-[#111122] rounded-3xl p-4 border border-white/5 shadow-2xl">
          <div className="aspect-video bg-black rounded-xl overflow-hidden mb-3 border border-white/5">
            <iframe src={`https://www.youtube.com/embed/${item.src}`} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
          <p className={`text-sm font-bold ${item.color}`}>{item.title}</p>
        </div>
      ))}
    </div>
  </section>
);

const BrowsePage = () => (
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

const ProfilePage = () => (
  <section className="p-4 pb-24 text-center">
    <h2 className="text-xl font-bold">Profile</h2>
    <p className="text-gray-400">Ahmed Abdikani Mohamed</p>
  </section>
);

// --- MAIN APP ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderPage = () => {
    switch (activeTab) {
      case 'Home': return <HomePage />;
      case 'Live': return <LivePage />;
      case 'Browse': return <BrowsePage />;
      case 'Profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
      </Head>
      <Header />
      {renderPage()}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
