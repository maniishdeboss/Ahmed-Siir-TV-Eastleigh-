'use client'
import { useState } from 'react'
import Head from 'next/head'

const FEATURED_SPORTS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-amber-500 to-amber-700", icon: "🏆", siirUrl: "https://sporty.com/sporty-tv", flag: "🇸🇴" },
  { id: 2, title: "Champions League", bg: "from-blue-600 to-indigo-800", icon: "⚽", youtube: "https://sporty.com/sporty-tv", flag: "🌍" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "LIVE", bg: "from-blue-600 to-blue-800", youtube: "-qDzZEXIJdk" },
  { country: "Ogadenia", flag: "🇬🇲", status: "LIVE", bg: "from-emerald-600 to-teal-800", youtube: "MiQe9ob9aDc" },
  { country: "Kenya", flag: "🇰🇪", status: "AVAILABLE", bg: "from-green-700 to-zinc-900", youtube: "1YzlFiqmHDY" },
  { country: "Global", flag: "🌍", status: "LIVE", bg: "from-purple-600 to-indigo-900", youtube: "gCNeDWCI0vo" },
];

const RECENT_HIGHLIGHTS = [
  { id: 1, title: "Brazil vs. Morocco | Match in 5 High", duration: "10 min", category: "Goals Highlights 🔥", youtube: "y7tv1y_Q_Q0", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600" },
  { id: 2, title: "Real Madrid vs Manchester City", duration: "12 min", category: "UEFA Champions League", youtube: "vqu4z34wENw", image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=600" },
];

const DATA_PACKAGES = [
  { id: 1, name: "250MB Daily", price: 18, desc: "24 HOURS" },
  { id: 2, name: "1GB Flash Data", price: 19, desc: "1 HOUR" },
  { id: 3, name: "1.25GB Midnight", price: 50, desc: "MIDNIGHT" },
];

const Header = () => (
  <header className="p-4 flex items-center justify-between bg-black text-white sticky top-0 z-50 border-b border-zinc-900">
    <div className="flex items-center gap-2">
      <span className="text-xl">🇸🇴</span>
      <h1 className="text-sm font-black tracking-tight text-white">Ahmed Abdikani LIVE TV</h1>
    </div>
    <span className="text-xl cursor-pointer">🔔</span>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-900 p-3 flex justify-around z-50 text-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-[11px] font-black uppercase tracking-wider ${activeTab === tab ? 'text-red-500' : 'text-zinc-500'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>("y7tv1y_Q_Q0");
  const [activeTitle, setActiveTitle] = useState<string>("Brazil vs. Morocco | Match in 5 High");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);

  const handlePlayVideo = (url: string, title: string) => {
    setActiveVideo(url);
    setActiveTitle(title);
  };

  const handleBuyData = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      alert("Fadlan geli lambarkaaga teleefanka!");
      return;
    }
    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage ? currentPackage.price : 18;
    window.open(`https://tinypesa.com/ahmeddatadealskenya?amount=${price}&phone=${encodeURIComponent(phoneNumber)}`, '_blank');
  };

  return (
    <main className="p-4 pb-28 space-y-6 bg-black text-white">
      {/* Active Video Player (Top Banner sidii app-kii asalka ahaa) */}
      <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
        <div className="aspect-video bg-black relative">
          {activeVideo ? (
            <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} className="w-full h-full" allowFullScreen />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-950">
              <span className="text-4xl">▶️</span>
            </div>
          )}
        </div>
      </div>

      {/* Featured Sports (Laba sanduuq oo dhinac ah sida app-kaaga hore) */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-zinc-300">Featured Sports</h3>
        <div className="grid grid-cols-2 gap-3">
          {FEATURED_SPORTS.map((sport) => (
            <button
              key={sport.id}
              onClick={() => window.open(sport.siirUrl, '_blank')}
              className={`bg-gradient-to-br ${sport.bg} p-4 rounded-2xl border border-zinc-800 h-32 flex flex-col justify-between text-left shadow-lg relative overflow-hidden active:scale-95 transition`}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl">{sport.icon}</span>
                <span className="text-[9px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-bold text-white">WATCH NOW</span>
              </div>
              <p className="font-black text-xs text-white leading-snug">{sport.title} {sport.flag}⚽🏆</p>
            </button>
          ))}
        </div>
      </div>

      {/* Watch By Country (4 sanduuq oo labo-laba ah sida asalka) */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-zinc-300">Watch By Country</h3>
        <div className="grid grid-cols-2 gap-3">
          {WATCH_BY_COUNTRY.map((c, i) => (
            <button
              key={i}
              onClick={() => handlePlayVideo(c.youtube, `${c.country} Live Stream`)}
              className={`bg-gradient-to-br ${c.bg} p-4 rounded-2xl border border-zinc-800 h-28 flex flex-col justify-between text-left shadow-lg active:scale-95 transition`}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl">{c.flag}</span>
                <span className="text-[9px] bg-black/40 px-2 py-0.5 rounded font-bold text-red-400">{c.status}</span>
              </div>
              <div>
                <p className="font-black text-sm text-white">{c.country}</p>
                <p className="text-[10px] text-zinc-300">Live TV</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Ahmed Data Deals Kenya */}
      <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 space-y-3">
        <h3 className="text-xs font-black uppercase text-red-500">Ahmed Data Deals Kenya</h3>
        <div className="space-y-2">
          {DATA_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg.id)}
              className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer ${selectedPkg === pkg.id ? 'bg-black border-red-500' : 'bg-black/50 border-zinc-800'}`}
            >
              <div>
                <p className="text-[9px] text-red-400 font-bold">{pkg.desc}</p>
                <p className="text-xs font-bold text-white">{pkg.name}</p>
              </div>
              <span className="text-xs font-black text-white">KSh {pkg.price}</span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Lambarka Safaricom (07...)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full bg-black text-white px-3 py-2.5 rounded-xl border border-zinc-800 text-xs focus:outline-none focus:border-red-500"
        />
        <button
          onClick={handleBuyData}
          className="w-full bg-red-600 text-white font-black text-xs py-3 rounded-xl uppercase tracking-wider"
        >
          Buy Bundle Now
        </button>
      </div>

      {/* Recent Match Highlights */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-zinc-300">Recent Match Highlights</h3>
        {RECENT_HIGHLIGHTS.map((item) => (
          <div
            key={item.id}
            onClick={() => handlePlayVideo(item.youtube, item.title)}
            className="bg-zinc-900 rounded-2xl p-3 border border-zinc-800 space-y-2 cursor-pointer active:scale-95 transition"
          >
            <div className="flex justify-between items-center text-[10px] text-zinc-400 font-bold">
              <span>{item.category}</span>
              <span>{item.duration}</span>
            </div>
            <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
              <img src={item.image} alt="" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl">
                  ▶
                </div>
              </div>
            </div>
            <p className="text-xs font-bold text-white">{item.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

const LivePage = () => (
  <div className="p-4 space-y-3 bg-black min-h-screen pb-28">
    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">Live Matches</h3>
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 space-y-2">
        <span className="text-xl">🇵🇹 vs 🇺🇿</span>
        <p className="font-bold text-xs">Portugal - Uzbekistan</p>
        <span className="text-[10px] text-red-500 font-black animate-pulse">LIVE NOW</span>
      </div>
      <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 space-y-2">
        <span className="text-xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇬🇭</span>
        <p className="font-bold text-xs">England - Ghana</p>
        <span className="text-[10px] text-red-500 font-black animate-pulse">LIVE NOW</span>
      </div>
    </div>
  </div>
);

const BrowsePage = () => (
  <div className="p-4 space-y-3 bg-black min-h-screen pb-28">
    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">Browse Categories</h3>
    <div className="grid grid-cols-2 gap-3">
      {WATCH_BY_COUNTRY.map((c, i) => (
        <div key={i} className={`bg-gradient-to-br ${c.bg} p-4 rounded-2xl border border-zinc-800 text-white h-24 flex flex-col justify-between`}>
          <span className="text-2xl">{c.flag}</span>
          <p className="font-bold text-xs">{c.country} TV</p>
        </div>
      ))}
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="p-8 text-center space-y-4 bg-black min-h-screen pb-28 flex flex-col items-center justify-center">
    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-xl">
      A
    </div>
    <div>
      <h3 className="text-sm font-bold text-white">Ahmed Abdikani Mohamed</h3>
      <p className="text-[10px] text-zinc-500 uppercase mt-1">Software Developer • Nairobi, Kenya</p>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-black min-h-screen w-full flex flex-col justify-between font-sans text-white">
      <Header />
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'Home' && <HomePage />}
        {activeTab === 'Live' && <LivePage />}
        {activeTab === 'Browse' && <BrowsePage />}
        {activeTab === 'Profile' && <ProfilePage />}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
