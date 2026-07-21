'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- MULTI-COLORED CHANNELS ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-amber-600 to-black", icon: "🏆", siirUrl: "https://sporty.com/sporty-tv" },
  { id: 11, title: "Sports Live Highlights", bg: "from-blue-600 to-black", icon: "⚡", youtube: "https://sporty.com/sporty-tv" },
  { id: 3, title: "Premier League", bg: "from-purple-600 to-black", icon: "🏆", youtube: "https://sporty.com/sporty-tv" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-black", icon: "💥", youtube: "https://sporty.com/sporty-tv" },
  { id: 5, title: "Wildlife Live", bg: "from-emerald-600 to-black", icon: "🦁", youtube: "MiQe9ob9aDc" },
  { id: 6, title: "Al Jazeera", bg: "from-sky-600 to-black", icon: "📰", youtube: "gCNeDWCI0vo" },
  { id: 7, title: "Movies Live", bg: "from-pink-600 to-black", icon: "🎥", youtube: "89c4owSHL2E" },
  { id: 8, title: "Highlights", bg: "from-orange-600 to-black", icon: "🎬", youtube: "dQw4w9WgXcQ" },
  { id: 9, title: "Kenya Citizens TV", bg: "from-yellow-600 to-black", icon: "🇰🇪", youtube: "1YzlFiqmHDY" },
  { id: 10, title: "Somali TV", bg: "from-cyan-600 to-black", icon: "🇸🇴", youtube: "-qDzZEXIJdk" },
];

const ALL_FILMS = [
  { id: 1, title: "Jawan", year: "2023", rating: "8.1", type: "Hindi", bg: "from-indigo-600 to-black", youtube: "y7tv1y_Q_Q0", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 2, title: "Pathaan", year: "2023", rating: "7.2", type: "Hindi", bg: "from-rose-600 to-black", youtube: "vqu4z34wENw", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 3, title: "Dangal", year: "2016", rating: "8.3", type: "Hindi", bg: "from-teal-600 to-black", youtube: "x_7YlGv9u1g", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 4, title: "3 Idiots", year: "2009", rating: "8.4", type: "Hindi", bg: "from-violet-600 to-black", youtube: "K0eDlFX9GMc", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400" },
  { id: 5, title: "PK", year: "2014", rating: "8.1", type: "Hindi", bg: "from-amber-600 to-black", youtube: "82ZEDGPCkT8", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400" },
  { id: 6, title: "BeIN Sports", year: "2026", rating: "9.0", type: "Live", bg: "from-blue-600 to-black", youtube: null, siirUrl: "https://sporty.com/sporty-tv", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-cyan-600 to-black" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-emerald-600 to-black" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-yellow-600 to-black" },
  { country: "Global", flag: "🌍🏟️", status: "Live", bg: "from-purple-600 to-black" },
];

const FOOTBALL_LEAGUES = [
  { id: 1, name: "FIFA World Cup", logo: "🏆", bg: "bg-gradient-to-br from-amber-600 to-black" },
  { id: 2, name: "International Friendly", logo: "⚽", bg: "bg-gradient-to-br from-blue-600 to-black" },
  { id: 3, name: "English Premier League", logo: "🦁", bg: "bg-gradient-to-br from-purple-600 to-black" },
  { id: 4, name: "Serie A", logo: "🇮🇹", bg: "bg-gradient-to-br from-red-600 to-black" },
  { id: 5, name: "La Liga", logo: "🇪🇸", bg: "bg-gradient-to-br from-emerald-600 to-black" },
  { id: 6, name: "Ligue 1", logo: "🇫🇷", bg: "bg-gradient-to-br from-sky-600 to-black" },
];

const MATCHES_DATA: Record<number, any[]> = {
  1: [
    { id: 1, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "LIVE NOW", link: "https://sporty.com/sporty-tv" },
    { id: 2, team1: "England", team2: "Ghana", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇬🇭", time: "LIVE NOW", link: "https://sporty.com/sporty-tv" },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", link: "https://sporty.com/sporty-tv" },
  ],
};

const DATA_PACKAGES = [
  { id: 1, name: "250MB Daily", price: 18, desc: "24 HOURS", badge: "Best Deal" },
  { id: 2, name: "1GB Flash Data", price: 19, desc: "1 HOUR", badge: "Tunukiwa" },
  { id: 3, name: "1.25GB Midnight", price: 50, desc: "MIDNIGHT", badge: "Best Deal" },
  { id: 4, name: "1.5GB Heavy Bundle", price: 49, desc: "3 HOURS", badge: "Tunukiwa" },
  { id: 5, name: "2GB Super Deal", price: 99, desc: "BINGWA", badge: "Bingwa" },
];

const Header = () => (
  <header className="p-4 flex items-center justify-between border-b border-zinc-900 bg-black text-white sticky top-0 z-50">
    <h1 className="text-lg font-black tracking-tighter text-white">AHMED <span className="text-red-500">LIVE</span> TV</h1>
    <span className="text-[10px] bg-red-600 px-2 py-0.5 rounded-full font-bold animate-pulse">LIVE APP</span>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-900 p-3 flex justify-around z-50 text-white max-w-xl mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'text-red-500 scale-105' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<'youtube' | 'social'>('youtube');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);

  const handlePlayVideo = (url: string, title: string) => {
    setActiveVideo(url);
    setActiveTitle(title);
    setShowResults(false);
  };

  const handleUnifiedSearch = async () => {
    if (!searchQuery.trim()) return;
    if (searchType === 'social') {
      window.open(`https://www.tiktok.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
      return;
    }
    setIsSearching(true);
    setShowResults(true);
    try {
      const YOUTUBE_API_KEY = "AIzaSyAUIkNgNCG9LVJnyG1ohnTxNYwWMpoaiK0";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(searchQuery)}&type=video&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
      if (data.items) {
        setSearchResults(data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channel: item.snippet.channelTitle
        })));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleBuyData = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      alert("Fadlan geli lambarkaaga teleefanka!");
      return;
    }
    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage ? currentPackage.price : 20;
    window.open(`https://tinypesa.com/ahmeddatadealskenya?amount=${price}&phone=${encodeURIComponent(phoneNumber)}`, '_blank');
  };

  return (
    <main className="p-4 pb-24 space-y-6 bg-black text-white min-h-full custom-scrollbar">
      {/* Search Bar */}
      <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 space-y-2">
        <div className="flex gap-2">
          <button
            onClick={() => setSearchType('youtube')}
            className={`px-3 py-1 rounded text-[10px] font-black uppercase ${searchType === 'youtube' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}
          >
            ▶️ YouTube
          </button>
          <button
            onClick={() => setSearchType('social')}
            className={`px-3 py-1 rounded text-[10px] font-black uppercase ${searchType === 'social' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}
          >
            🎵 TikTok
          </button>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded text-[10px] font-black uppercase bg-zinc-800 text-zinc-400"
          >
            ✈️ Telegram
          </a>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUnifiedSearch()}
            placeholder="Raadi muuqaal..."
            className="flex-1 bg-black text-white px-3 py-2 rounded-lg border border-zinc-800 text-xs focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleUnifiedSearch}
            className="bg-red-600 px-4 py-2 rounded-lg font-bold text-xs"
          >
            {isSearching ? "⏳" : "🔍"}
          </button>
        </div>
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold uppercase">Natiijada</h3>
            <button onClick={() => setShowResults(false)} className="text-zinc-400 text-lg">×</button>
          </div>
          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {searchResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handlePlayVideo(item.id, item.title)}
                className="flex gap-2 bg-black p-2 rounded-lg border border-zinc-800 w-full text-left"
              >
                <img src={item.thumbnail} alt="" className="w-20 h-12 object-cover rounded" />
                <div>
                  <p className="text-xs font-bold line-clamp-1">{item.title}</p>
                  <p className="text-[10px] text-zinc-400">{item.channel}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Video Player */}
      {activeVideo && (
        <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-bold line-clamp-1">{activeTitle}</p>
            <button onClick={() => setActiveVideo(null)} className="text-zinc-400 text-lg">×</button>
          </div>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} className="w-full h-full" allowFullScreen />
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-950 via-zinc-900 to-black rounded-2xl p-5 border border-red-900/30 text-center space-y-3">
        <span className="text-3xl">📺</span>
        <h2 className="text-lg font-black tracking-tight">Ahmed Abdikani Live TV</h2>
        <a
          href="https://sporty.com/sporty-tv"
          target="_blank"
          className="inline-block bg-red-600 text-white font-black text-xs py-2.5 px-6 rounded-lg uppercase"
        >
          Watch Live Now
        </a>
      </div>

      {/* Multi-colored Channels */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">Live Channels (Multi-Color)</h3>
        <div className="grid grid-cols-2 gap-3">
          {SPORTS_CHANNELS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => {
                if (ch.youtube) handlePlayVideo(ch.youtube, ch.title);
                else if (ch.siirUrl) window.open(ch.siirUrl, '_blank');
              }}
              className={`bg-gradient-to-br ${ch.bg} p-4 rounded-xl border border-zinc-800 flex flex-col justify-between h-24 text-left shadow-lg transform active:scale-95 transition`}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl">{ch.icon}</span>
                <span className="text-[9px] bg-black/60 px-2 py-0.5 rounded-full font-bold text-red-400">HD</span>
              </div>
              <p className="font-bold text-xs line-clamp-1">{ch.title}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Data Bundles */}
      <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 space-y-3">
        <h3 className="text-xs font-black uppercase text-red-500">Ahmed Data Deals Kenya</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
          {DATA_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg.id)}
              className={`p-3 rounded-xl border flex justify-between items-center cursor-pointer ${selectedPkg === pkg.id ? 'bg-black border-red-500' : 'bg-black/50 border-zinc-800'}`}
            >
              <div>
                <p className="text-[10px] text-red-400 font-bold">{pkg.desc}</p>
                <p className="text-xs font-bold">{pkg.name}</p>
              </div>
              <span className="text-xs font-black">KSh {pkg.price}</span>
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

      {/* Films */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">Hindi & Hollywood Films</h3>
        <div className="grid grid-cols-2 gap-3">
          {ALL_FILMS.map((film) => (
            <button
              key={film.id}
              onClick={() => film.youtube && handlePlayVideo(film.youtube, film.title)}
              className={`bg-gradient-to-t ${film.bg} p-3 rounded-xl border border-zinc-800 h-36 flex flex-col justify-between text-left relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${film.image})` }} />
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-lg">🎬</span>
                <span className="text-[9px] bg-black/80 px-2 py-0.5 rounded font-bold">⭐ {film.rating}</span>
              </div>
              <div className="relative z-10">
                <p className="text-xs font-bold line-clamp-1">{film.title}</p>
                <p className="text-[10px] text-zinc-400">{film.type}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

const LivePage = () => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  const [activeStream, setActiveStream] = useState<string | null>(null);

  if (selectedLeague) {
    const matches = MATCHES_DATA[selectedLeague] || [];
    return (
      <div className="space-y-4 custom-scrollbar pb-24">
        <div className="flex items-center gap-3 p-3 bg-zinc-900 border-b border-zinc-800">
          <button onClick={() => setSelectedLeague(null)} className="text-white text-xl">←</button>
          <h3 className="text-xs font-black uppercase">Live Matches</h3>
        </div>
        {activeStream && (
          <div className="aspect-video bg-black mx-3 rounded-xl overflow-hidden">
            <iframe src={activeStream} className="w-full h-full" allowFullScreen />
          </div>
        )}
        <div className="p-3 space-y-2">
          {matches.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveStream(m.link)}
              className="w-full bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex justify-between items-center text-left"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{m.flag1} vs {m.flag2}</span>
                <span className="text-xs font-bold">{m.team1} - {m.team2}</span>
              </div>
              <span className="text-[10px] text-red-500 font-black">{m.time}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-3 bg-black min-h-full pb-24 custom-scrollbar">
      <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">Football Leagues</h3>
      <div className="grid grid-cols-2 gap-3">
        {FOOTBALL_LEAGUES.map((l) => (
          <button
            key={l.id}
            onClick={() => setSelectedLeague(l.id)}
            className={`${l.bg} p-4 rounded-xl border border-zinc-800 h-28 flex flex-col items-center justify-center text-white shadow-lg`}
          >
            <span className="text-3xl mb-1">{l.logo}</span>
            <p className="font-black text-xs text-center">{l.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const BrowsePage = () => (
  <div className="p-4 space-y-3 bg-black min-h-full pb-24 custom-scrollbar">
    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400">Browse By Country</h3>
    <div className="grid grid-cols-2 gap-3">
      {WATCH_BY_COUNTRY.map((c, i) => (
        <div key={i} className={`bg-gradient-to-br ${c.bg} p-5 rounded-xl border border-zinc-800 text-white shadow-lg`}>
          <span className="text-3xl">{c.flag}</span>
          <p className="font-black text-xs mt-2 uppercase">{c.country}</p>
          <span className="text-[9px] bg-black/60 px-2 py-0.5 rounded font-bold text-red-400">{c.status}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="p-6 text-center space-y-4 bg-black min-h-screen pb-24 flex flex-col items-center justify-center custom-scrollbar">
    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-lg">
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
    <div className="bg-black min-h-screen w-full flex flex-col justify-between font-sans text-white max-w-xl mx-auto relative shadow-2xl border-x border-zinc-900">
      <Header />
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === 'Home' && <HomePage />}
        {activeTab === 'Live' && <LivePage />}
        {activeTab === 'Browse' && <BrowsePage />}
        {activeTab === 'Profile' && <ProfilePage />}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }
      `}</style>
    </div>
  );
}
