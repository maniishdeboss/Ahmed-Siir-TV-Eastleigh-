'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", youtube: null, siirUrl: "https://a.kora-sia.com/bein-1/" },
  { id: 11, title: "Sports Live Highlights", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", youtube: "anFb5YF3nZk" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", youtube: null },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", youtube: "2A_OLvCo_q8" },
  { id: 5, title: "Wildlife Live", bg: "from-green-600 to-lime-800", icon: "🦁", flag: "🌿", youtube: "MiQe9ob9aDc" },
  { id: 6, title: "Al Jazeera", bg: "from-teal-600 to-cyan-800", icon: "📰", flag: "🇶🇦", youtube: "gCNeDWCI0vo" },
  { id: 7, title: "Movies Live", bg: "from-pink-600 to-rose-800", icon: "🎥", flag: "🎞️", youtube: "89c4owSHL2E" },
  { id: 8, title: "Highlights", bg: "from-yellow-600 to-orange-700", icon: "🎬", flag: "📺", youtube: "dQw4w9WgXcQ" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍", youtube: "https://youtube.com/@supersport?si=Bq3DEZJtL0RLyoD2", isYoutubeChannel: true },
  { id: 9, title: "Kenya Citizens TV", bg: "from-red-600 to-black", icon: "🇰🇪", flag: "🇰🇪", youtube: "1YzlFiqmHDY" },
  { id: 10, title: "Somali TV", bg: "from-blue-500 to-cyan-600", icon: "🇸🇴", flag: "🇸🇴", youtube: "-qDzZEXIJdk" },
];

const ALL_FILMS = [
  { id: 1, title: "Jawan", year: "2023", rating: "8.1", type: "Hindi", bg: "from-orange-600 to-red-800", youtube: "y7tv1y_Q_Q0", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 2, title: "Pathaan", year: "2023", rating: "7.2", type: "Hindi", bg: "from-yellow-600 to-orange-700", youtube: "vqu4z34wENw", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 3, title: "Dangal", year: "2016", rating: "8.3", type: "Hindi", bg: "from-blue-600 to-indigo-800", youtube: "x_7YlGv9u1g", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 4, title: "3 Idiots", year: "2009", rating: "8.4", type: "Hindi", bg: "from-green-600 to-teal-800", youtube: "K0eDlFX9GMc", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400" },
  { id: 5, title: "PK", year: "2014", rating: "8.1", type: "Hindi", bg: "from-purple-600 to-pink-800", youtube: "82ZEDGPCkT8", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400" },
  { id: 22, title: "BeIN Sports", year: "2026", rating: "9.0", type: "Live Sports", bg: "from-slate-800 to-slate-950", youtube: null, siirUrl: "https://a.kora-sia.com/bein-1/", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
  { id: 6, title: "Bajrangi Bhaijaan", year: "2015", rating: "8.0", type: "Hindi", bg: "from-red-600 to-rose-800", youtube: "vyX4toD395U", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400" },
  { id: 7, title: "KGF Chapter 2", year: "2022", rating: "8.4", type: "Hindi", bg: "from-amber-600 to-yellow-800", youtube: "Qah9sSIXJqk", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400" },
  { id: 8, title: "RRR", year: "2022", rating: "7.8", type: "Hindi", bg: "from-cyan-600 to-blue-800", youtube: "NgBoMJy386M", image: "https://images.unsplash.com/photo-1594909122845-11baa9b7703b?w=400" },
  { id: 9, title: "Avengers: Endgame", year: "2019", rating: "8.4", type: "Hollywood", bg: "from-indigo-600 to-purple-900", youtube: "TcMBFSGVi1c", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400" },
  { id: 10, title: "Avatar", year: "2009", rating: "7.9", type: "Hollywood", bg: "from-sky-600 to-blue-900", youtube: "5PSNL1qE6VY", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-600 to-black/20" },
  { country: "Global", flag: "🌍🏟️", status: "Live", bg: "from-purple-500 to-indigo-700" },
];

const FOOTBALL_LEAGUES = [
  { id: 1, name: "FIFA World Cup", logo: "🏆", bg: "https://www.youtube.com/live/jPGGsWgmlOM?si=HMFTt37vu3JVa60G" },
  { id: 2, name: "International Friendly", logo: "⚽", bg: "bg-gradient-to-r from-slate-700 to-slate-900" },
  { id: 3, name: "English Premier League", logo: "🦁", bg: "bg-gradient-to-r from-purple-700 to-purple-900" },
  { id: 4, name: "Serie A", logo: "🇮🇹", bg: "bg-gradient-to-r from-blue-500 to-blue-700" },
  { id: 5, name: "La Liga", logo: "🇪🇸", bg: "bg-gradient-to-r from-red-600 to-yellow-500" },
  { id: 6, name: "Ligue 1", logo: "🇫🇷", bg: "bg-gradient-to-r from-slate-600 to-slate-800" },
];

const MATCHES_DATA: Record<number, any[]> = {
  1: [
    { id: 1, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "LIVE NOW", quality: "HD", link: "https://a.kora-sia.com/bein-1/", isYoutube: false },
    { id: 2, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "Upcoming 0:0", quality: "HD", link: "https://a.kora-sia.com/bein-1/", isYoutube: false },
    { id: 3, team1: "England", team2: "Ghana", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇬🇭", time: "LIVE NOW", quality: "HD", link: "https://a.kora-sia.com/bein-1/", isYoutube: false },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD", link: "https://a.kora-sia.com/bein-1/", isYoutube: false },
    { id: 2, team1: "Man City", team2: "Liverpool", flag1: "🔵", flag2: "🔴", time: "Tomorrow 19:30", quality: "HD", link: "https://a.kora-sia.com/bein-1/", isYoutube: false },
  ],
  5: [
    { id: 1, team1: "Barcelona", team2: "Real Madrid", flag1: "🔵", flag2: "⚪", time: "Sunday 22:00", quality: "HD", link: "https://a.kora-sia.com/bein-1/", isYoutube: false },
  ],
};

const DATA_PACKAGES = [
  { id: 1, name: "250MB Daily", price: 18, desc: "24 HOURS", badge: "Best Deal" },
  { id: 2, name: "250MB Daily", price: 20, desc: "24 HOURS", badge: null },
  { id: 3, name: "1GB Flash Data", price: 19, desc: "1 HOUR - TUNUKIWA", badge: "Tunukiwa" },
  { id: 4, name: "1.25GB Midnight", price: 50, desc: "TILL MIDNIGHT", badge: "Best Deal" },
  { id: 5, name: "1.25GB Midnight", price: 55, desc: "TILL MIDNIGHT", badge: null },
  { id: 6, name: "1.5GB Heavy Bundle", price: 49, desc: "3 HOURS - TUNUKIWA", badge: "Tunukiwa" },
  { id: 7, name: "2GB Super Deal", price: 99, desc: "TILL MIDNIGHT - TUNUKIWA", badge: "Bingwa" },
  { id: 8, name: "350MB Weekly", price: 49, desc: "7 DAYS", badge: null },
  { id: 9, name: "350MB Weekly", price: 52, desc: "7 DAYS", badge: null }
];

// --- COMPONENTS ---
const Header = () => (
  <header className="p-5 flex items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50 shadow-xl w-full px-6">
    <h1 className="text-3xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a1a]/95 border-t border-white/10 p-5 flex justify-around backdrop-blur-xl z-50 shadow-2xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-black uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab ? 'opacity-100 scale-110 text-blue-500' : 'opacity-60'}`}
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
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  // States for Data Bundles
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);

  const handlePlayVideo = (url: string, title: string, isYoutube: boolean = true, isChannel: boolean = false) => {
    if (!isYoutube && url && url.includes('https://www.youtube.com/live/jPGGsWgmlOM?si=HMFTt37vu3JVa60G')) {
      window.open(url, '_blank');
      return;
    }
    if (isChannel || (url && url.includes('youtube.com/@'))) {
      window.open(url, '_blank');
      return;
    }
    setActiveVideo(url);
    setActiveTitle(title);
    setIsYoutubeVideo(isYoutube);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleYouTubeSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setShowResults(true);

    try {
      const API_KEY = "AIzaSyAUIkNgNCG9LVJnyG1ohnTxNYwWMpoaiK0";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.items) {
        const results = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channel: item.snippet.channelTitle,
        }));
        setSearchResults(results);
      }
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleBuyData = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      alert("Please enter your phone number!");
      return;
    }

    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage ? currentPackage.price : 20;

    const targetUrl = `https://tinypesa.com/ahmeddatadealskenya?amount=${price}&phone=${encodeURIComponent(phoneNumber)}`;
    window.open(targetUrl, '_blank');
  };

  return (
    <main className="p-6 pb-28 w-full px-4 sm:px-8 relative space-y-8">
      
      {/* SEARCH BAR */}
      <div className="bg-[#111122] rounded-2xl p-4 border border-blue-500/30 shadow-xl w-full">
        <div className="flex gap-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()}
            placeholder="Search YouTube - movies, music, live..."
            className="flex-1 bg-[#0a0a1a] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-base"
          />
          <button
            onClick={handleYouTubeSearch}
            disabled={isSearching}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            {isSearching ? "⏳" : "🔍"}
          </button>
        </div>
      </div>

      {/* SEARCH RESULTS */}
      {showResults && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-red-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Results: {searchQuery}</h3>
            <button onClick={() => setShowResults(false)} className="text-white/60 hover:text-white text-3xl">×</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
            {searchResults.map((video) => (
              <button
                key={video.id}
                onClick={() => handlePlayVideo(video.id, video.title, true)}
                className="flex gap-4 bg-[#0a0a1a] p-4 rounded-xl border border-white/5 hover:bg-[#1a1a2a] transition text-left transform hover:scale-[1.02]"
              >
                <img src={video.thumbnail} alt={video.title} className="w-36 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="text-white font-bold text-sm sm:text-base line-clamp-2">{video.title}</p>
                  <p className="text-white/50 text-xs mt-1.5">{video.channel}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeVideo && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-blue-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse font-bold">LIVE</span>
              <p className="text-base font-bold text-white line-clamp-1">{activeTitle}</p>
            </div>
            <button onClick={() => setActiveVideo(null)} className="text-white/60 hover:text-white text-4xl leading-none">×</button>
          </div>
          <div className="aspect-video bg-black rounded-xl overflow-hidden w-full max-w-6xl mx-auto">
            <iframe
              src={isYoutubeVideo ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* HERO BANNER CONTAINER WITH NOTIFICATION ALERT OVERLAY */}
      <div className="relative w-full">
        <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl p-10 md:p-16 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center py-6">
            <div className="text-7xl mb-4">📺</div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">🇬🇲 Ahmed Abdikani Live TV 🇸🇴</h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Watch Live Sports HD Content Flawlessly</p>
            <a
              href="https://www.youtube.com/live/jPGGsWgmlOM?si=HMFTt37vu3JVa60G"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-wider"
            >
               Click Here to Watch Live
            </a>
          </div>
        </div>

        {/* TOP-RIGHT SITE NOTIFICATION ALERT BANNER */}
        {showNotification && (
          <div className="absolute top-4 right-4 z-30 w-72 bg-white text-black p-3.5 rounded-xl shadow-2xl border border-gray-200 animate-fade-in flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h4 className="text-xs font-bold text-gray-900 tracking-tight">Manage Site Notifications</h4>
              <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-black text-base font-bold leading-none">×</button>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-12 h-8 bg-blue-900 rounded overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100" className="w-full h-full object-cover" alt="Thumb" />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight">
                Allow notifications to receive instantaneous dynamic updates on current match streams.
              </p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="w-full bg-[#ef4444] text-white font-bold text-[11px] py-1.5 rounded uppercase tracking-wider text-center hover:bg-red-700 transition-colors"
            >
              Unsubscribe
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center px-2">
        <span className="bg-red-600 text-xs px-3 py-1 rounded-full mr-3 animate-pulse font-bold">LIVE</span>
        <p className="text-base font-black text-white uppercase tracking-wider">Ahmed Abdikani Live Streaming</p>
      </div>

      {/* MAIN CHANNELS & MEDIA CONTENT SECTIONS */}
      <div className="w-full space-y-8">
        
        {/* LIVE CHANNELS */}
        <section className="w-full">
          <h2 className="text-xl font-black mb-4 text-white/90 tracking-wide uppercase">All Live Channels - 11 Streams</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
            {SPORTS_CHANNELS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  if (ch.youtube) {
                    handlePlayVideo(ch.youtube, ch.title, true, ch.isYoutubeChannel)
                  } else if (ch.siirUrl) {
                    window.open(ch.siirUrl, '_blank')
                  }
                }}
                disabled={!ch.youtube && !ch.siirUrl}
                className={`shrink-0 w-48 h-32 bg-gradient-to-br ${ch.bg} rounded-2xl p-5 flex flex-col justify-between border border-white/5 shadow-xl transition-all transform hover:scale-105 active:scale-95 ${(ch.youtube || ch.siirUrl) ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-3xl">{ch.icon}</span>
                  {(ch.youtube || ch.siirUrl) && <span className="text-xs bg-red-600 px-2.5 py-1 rounded-full font-black">LIVE</span>}
                </div>
                <h3 className="font-bold text-sm text-white text-left line-clamp-2">{ch.title}</h3>
              </button>
            ))}
          </div>
        </section>

        {/* PREMIUM LIVE TV SECTION */}
        <section className="p-6 rounded-3xl bg-[#111122] border border-blue-500/30 shadow-xl w-full">
          <h2 className="text-xl font-black mb-4 text-blue-400 uppercase tracking-wide">Premium Live TV</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => handlePlayVideo("https://www.siiiiir.tv/", "World cup - Live", false)}
              className="bg-gradient-to-br from-blue-900 to-black p-8 rounded-2xl border border-white/10 text-center transform hover:scale-[1.03] transition-transform shadow-xl w-full"
            >
              <p className="font-black text-white text-lg">World cup - Live</p>
            </button>
          </div>
        </section>

        {/* AHMED DATA DEALS KENYA - MOVED UP HERE ("KOOR KEEN") */}
        <section className="p-6 rounded-3xl bg-gradient-to-br from-green-950 via-[#0d1b15] to-[#050c08] border-2 border-green-500/40 shadow-2xl w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-2xl font-black text-green-400 tracking-tight uppercase">Ahmed Data Deals Kenya</h2>
              <p className="text-sm text-white/60 mt-0.5">Official link for affordable internet packages</p>
            </div>
            <span className="text-xs bg-green-500 text-black font-black px-3 py-1.5 rounded-full uppercase tracking-wider animate-pulse">
              Active
            </span>
          </div>

          <form onSubmit={handleBuyData} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* SCROLLABLE DATA LIST AREA */}
            <div className="lg:col-span-2 max-h-[420px] overflow-y-auto pr-2 space-y-3 custom-scrollbar grid grid-cols-1 sm:grid-cols-2 gap-3 !space-y-0">
              {DATA_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex justify-between items-center h-20 ${
                    selectedPkg === pkg.id
                      ? 'bg-green-900/40 border-green-400 shadow-xl scale-[1.01]'
                      : 'bg-[#0a110e]/80 border-white/10 hover:border-green-500/30'
                  }`}
                >
                  <div className="text-left space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black tracking-wider text-green-400 uppercase bg-green-950/80 px-1.5 py-0.5 rounded border border-green-500/20">
                        {pkg.desc}
                      </span>
                      {pkg.badge && (
                        <span className="text-[8px] font-black tracking-tighter text-white uppercase bg-red-600 px-1 py-0.5 rounded">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-black text-white text-base tracking-wide">{pkg.name}</p>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <span className="text-base font-black text-white">KSh {pkg.price}</span>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] ${selectedPkg === pkg.id ? 'bg-green-400 border-green-400 text-black' : 'border-white/20 text-transparent'}`}>✓</div>
                  </div>
                </div>
              ))}
            </div>

            {/* TRANSACTION INPUT AREA */}
            <div className="lg:col-span-1 bg-black/30 p-5 rounded-2xl border border-white/5 space-y-5 h-full flex flex-col justify-between">
              <div>
                <label className="block text-xs font-black text-white/70 uppercase tracking-wider mb-2 pl-1">Safaricom Phone Number</label>
                <input
                  type="text"
                  placeholder="Example: 0712345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-[#050a07] text-white px-5 py-4 rounded-xl border border-white/10 text-base focus:outline-none focus:border-green-400 transition-colors placeholder:text-white/20"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-black text-base py-4 rounded-xl transition-all shadow-xl uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <span>Buy Selected Bundle</span>
              </button>
            </div>
          </form>
        </section>

        {/* FILMS SECTION - MOVED DOWN HERE ("HOOS GEE") */}
        <section className="p-6 rounded-3xl bg-[#111122] border border-orange-500/30 shadow-xl w-full">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-black text-orange-400 uppercase tracking-wide">Hindi & Hollywood Films</h2>
            <span className="text-xs bg-orange-600 px-4 py-1.5 rounded-full font-black">11 FILMS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {ALL_FILMS.map((film) => (
              <button
                key={film.id}
                onClick={() => {
                  if (film.youtube) {
                    handlePlayVideo(film.youtube, film.title, true);
                  } else if (film.siirUrl) {
                    window.open(film.siirUrl, '_blank');
                  }
                }}
                className="relative h-56 rounded-2xl border border-white/10 overflow-hidden transform hover:scale-105 transition-transform shadow-xl group w-full"
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${film.image})`}} />
                <div className={`absolute inset-0 bg-gradient-to-t ${film.bg} opacity-85 group-hover:opacity-75 transition-opacity`} />
                <div className="relative z-10 h-full flex flex-col justify-between p-4 text-left">
                  <div className="flex justify-between items-start">
                    <span className="text-3xl">🎬</span>
                    <div className="flex flex-col gap-1 items-end">
                      <span className="text-xs bg-black/60 px-2.5 py-1 rounded-full font-black">⭐ {film.rating}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-black ${film.type === 'Hindi' ? 'bg-orange-600' : 'bg-blue-600'}`}>
                        {film.type}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-black text-white text-sm sm:text-base line-clamp-2 leading-tight">{film.title}</p>
                    <p className="text-xs text-white/80 mt-0.5">{film.year}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-base">▶</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

const LivePage = () => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  const [activeStream, setActiveStream] = useState<string | null>(null);

  if (selectedLeague) {
    const matches = MATCHES_DATA[selectedLeague] || [];
    const leagueName = FOOTBALL_LEAGUES.find(l => l.id === selectedLeague)?.name || "";

    return (
      <section className="bg-[#0a0a1f] min-h-screen pb-28 w-full">
        <div className="bg-[#0a0a1f] p-5 flex items-center gap-4 border-b border-white/10 sticky top-0 z-40 px-6">
          <button onClick={() => {setSelectedLeague(null); setActiveStream(null);}} className="text-white text-3xl">←</button>
          <h2 className="text-2xl font-black text-white uppercase">{leagueName}</h2>
        </div>

        {activeStream && (
          <div className="bg-black aspect-video max-w-6xl mx-auto rounded-xl overflow-hidden my-6 shadow-2xl">
            <iframe src={activeStream} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
          </div>
        )}

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((match) => (
            <div key={match.id} className="bg-[#111122] rounded-xl border border-white/5 shadow-lg">
              <button
                onClick={() => {
                  if (!match.isYoutube && match.link.includes('siiiiir.tv')) {
                    window.open(match.link, '_blank')
                  } else {
                    setActiveStream(match.link)
                  }
                }}
                className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-center w-24">
                    <div className="text-3xl">{match.flag1}</div>
                    <div className="text-3xl">{match.flag2}</div>
                  </div>
                  <div className="text-left">
                    <p className="font-black text-white text-base sm:text-lg">{match.team1} VS {match.team2}</p>
                    <p className="text-sm text-white/50 mt-0.5">{match.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-red-500 font-black tracking-wider">{match.quality}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0a0a1f] min-h-screen pb-28 w-full">
      <div className="bg-[#0a0a1f] p-5 flex justify-between items-center border-b border-white/10 sticky top-0 z-40 px-6">
        <h1 className="text-2xl font-black text-white uppercase tracking-wide">Football Live HD</h1>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {FOOTBALL_LEAGUES.map((league) => (
          <button
            key={league.id}
            onClick={() => setSelectedLeague(league.id)}
            className={`${league.bg} w-full p-8 rounded-2xl border border-white/10 flex flex-col items-center justify-center hover:opacity-95 transition-all transform hover:scale-105 shadow-xl`}
          >
            <div className="bg-white p-5 rounded-xl mb-4 w-36 h-24 flex items-center justify-center shadow-inner">
              <span className="text-5xl">{league.logo}</span>
            </div>
            <p className="font-black text-white text-lg sm:text-xl tracking-wide">{league.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

const BrowsePage = () => (
  <section className="p-6 pb-28 text-center w-full">
    <h2 className="text-2xl font-black mb-6 uppercase tracking-wide">Browse Categories</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {WATCH_BY_COUNTRY.map((c, i) => (
            <div key={i} className={`bg-gradient-to-br ${c.bg} p-8 rounded-2xl border border-white/10 shadow-xl transform hover:scale-105 transition-transform`}>
                <span className="text-5xl">{c.flag}</span>
                <p className="font-black text-base text-white mt-3 uppercase tracking-wide">{c.country}</p>
            </div>
        ))}
    </div>
  </section>
);

const ProfilePage = () => (
  <section className="p-6 pb-28 text-center w-full">
    <div className="bg-[#111122] p-10 rounded-3xl border border-white/10 max-w-lg mx-auto mt-12 shadow-2xl">
      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl font-black text-white shadow-lg">
        A
      </div>
      <h2 className="text-2xl font-black uppercase tracking-wide">Profile</h2>
      <p className="text-gray-400 text-lg mt-1">Ahmed Abdikani Mohamed</p>
    </div>
  </section>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans flex flex-col items-center w-full overflow-x-hidden">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
      </Head>
      <Header />
      <div className="w-full flex-1">
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
        .custom-scrollbar::-webkit-scrollbar-track { bg: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 197, 94, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 197, 94, 0.4); }
      `}</style>
    </div>
  );
}
