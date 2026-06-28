'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", youtube: null, siirUrl: "https://www.siiiiir.tv/" },
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
  { id: 22, title: "BeIN Sports", year: "2026", rating: "9.0", type: "Live Sports", bg: "from-slate-800 to-slate-950", youtube: null, siirUrl: "https://www.siiiiir.tv/", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
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
  { id: 1, name: "FIFA World Cup", logo: "🏆", bg: "bg-gradient-to-r from-blue-600 to-blue-800" },
  { id: 2, name: "International Friendly", logo: "⚽", bg: "bg-gradient-to-r from-slate-700 to-slate-900" },
  { id: 3, name: "English Premier League", logo: "🦁", bg: "bg-gradient-to-r from-purple-700 to-purple-900" },
  { id: 4, name: "Serie A", logo: "🇮🇹", bg: "bg-gradient-to-r from-blue-500 to-blue-700" },
  { id: 5, name: "La Liga", logo: "🇪🇸", bg: "bg-gradient-to-r from-red-600 to-yellow-500" },
  { id: 6, name: "Ligue 1", logo: "🇫🇷", bg: "bg-gradient-to-r from-slate-600 to-slate-800" },
];

const MATCHES_DATA: Record<number, any[]> = {
  1: [
    { id: 1, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "LIVE NOW", quality: "HD", link: "https://www.siiiiir.tv/", isYoutube: false },
    { id: 2, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "Upcoming 0:0", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
    { id: 3, team1: "England", team2: "Ghana", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇬🇭", time: "LIVE NOW", quality: "HD", link: "https://www.siiiiir.tv/", isYoutube: false },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
    { id: 2, team1: "Man City", team2: "Liverpool", flag1: "🔵", flag2: "🔴", time: "Tomorrow 19:30", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
  ],
  5: [
    { id: 1, team1: "Barcelona", team2: "Real Madrid", flag1: "🔵", flag2: "⚪", time: "Sunday 22:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
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
  <header className="p-4 flex items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50 shadow-xl w-full px-4">
    <h1 className="text-2xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a1a]/95 border-t border-white/10 p-4 flex justify-around backdrop-blur-xl z-50 shadow-2xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-xs font-black uppercase tracking-widest text-white transition-all duration-200 ${activeTab === tab ? 'opacity-100 scale-105 text-blue-500' : 'opacity-60'}`}
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
    if (!isYoutube && url && url.includes('siiiiir.tv')) {
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
    <main className="p-4 pb-24 w-full relative space-y-6">
      
      {/* SEARCH BAR - FULL WIDTH MOBILE */}
      <div className="bg-[#111122] rounded-xl p-3 border border-blue-500/20 shadow-lg w-full">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()}
            placeholder="Search YouTube..."
            className="flex-1 bg-[#0a0a1a] text-white px-3.5 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-blue-500 text-sm"
          />
          <button
            onClick={handleYouTubeSearch}
            disabled={isSearching}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-5 py-3 rounded-lg font-bold text-base transition-all"
          >
            {isSearching ? "⏳" : "🔍"}
          </button>
        </div>
      </div>

      {/* SEARCH RESULTS - MOBILE COMPACT */}
      {showResults && (
        <div className="bg-[#111122] rounded-2xl p-4 border border-red-500/20 shadow-xl w-full">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-white truncate max-w-[80%]">Results: {searchQuery}</h3>
            <button onClick={() => setShowResults(false)} className="text-white/60 hover:text-white text-2xl leading-none">×</button>
          </div>
          <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-1">
            {searchResults.map((video) => (
              <button
                key={video.id}
                onClick={() => handlePlayVideo(video.id, video.title, true)}
                className="flex gap-3 bg-[#0a0a1a] p-2.5 rounded-xl border border-white/5 text-left items-center"
              >
                <img src={video.thumbnail} alt={video.title} className="w-24 h-16 object-cover rounded-md shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-white font-bold text-xs line-clamp-2 leading-tight">{video.title}</p>
                  <p className="text-white/50 text-[10px] mt-1 truncate">{video.channel}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* VIDEO PLAYER PREVIEW - MOBILE SCALED */}
      {activeVideo && (
        <div className="bg-[#111122] rounded-2xl p-3 border border-blue-500/20 shadow-xl w-full">
          <div className="flex justify-between items-center mb-2.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="bg-red-600 text-[9px] px-2 py-0.5 rounded-full animate-pulse font-bold shrink-0">LIVE</span>
              <p className="text-xs font-bold text-white truncate">{activeTitle}</p>
            </div>
            <button onClick={() => setActiveVideo(null)} className="text-white/60 text-2xl leading-none pl-1">×</button>
          </div>
          <div className="aspect-video bg-black rounded-lg overflow-hidden w-full">
            <iframe
              src={isYoutubeVideo ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* HERO BANNER - MOBILE ADAPTED PADDING */}
      <div className="relative w-full">
        <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl p-6 relative text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600')] bg-cover bg-center opacity-15"></div>
          <div className="relative z-10 py-2">
            <div className="text-4xl mb-2">📺</div>
            <h2 className="text-xl font-black text-white mb-1 tracking-tight">🇬🇲 Ahmed Abdikani Live TV 🇸🇴</h2>
            <p className="text-white/70 text-xs mb-5">Watch Live Sports HD Content Flawlessly</p>
            <a
              href="https://www.siiiiir.tv/"
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3 px-8 rounded-lg transition-all shadow-md uppercase tracking-wider w-full sm:w-auto"
            >
               Click Here to Watch Live
            </a>
          </div>
        </div>

        {/* SITE NOTIFICATION OVERLAY ALERT - CLEAN FOR PHONES */}
        {showNotification && (
          <div className="absolute top-2 right-2 left-2 z-30 bg-white text-black p-3 rounded-xl shadow-xl border border-gray-200 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h4 className="text-[11px] font-black text-gray-900 tracking-tight">Manage Site Notifications</h4>
              <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-black text-xl font-bold leading-none">×</button>
            </div>
            <div className="flex gap-2.5 items-center">
              <div className="w-10 h-7 bg-blue-900 rounded overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=80" className="w-full h-full object-cover" alt="Thumb" />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight flex-1">
                Allow notifications to receive dynamic updates on stream matches.
              </p>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              className="w-full bg-[#ef4444] text-white font-bold text-[10px] py-1.5 rounded uppercase tracking-wider text-center"
            >
              Unsubscribe
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center px-1">
        <span className="bg-red-600 text-[10px] px-2 py-0.5 rounded-full mr-2 animate-pulse font-bold">LIVE</span>
        <p className="text-xs font-black text-white uppercase tracking-wider">Ahmed Abdikani Live Streaming</p>
      </div>

      {/* MAIN CONTAINER VERTICAL ON PHONES */}
      <div className="w-full space-y-6">
        
        {/* LIVE CHANNELS */}
        <section className="w-full">
          <h2 className="text-sm font-black mb-2.5 text-white/90 tracking-wide uppercase px-1">All Live Channels - 11 Streams</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide w-full snap-x">
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
                className={`shrink-0 w-36 h-24 bg-gradient-to-br ${ch.bg} rounded-xl p-3.5 flex flex-col justify-between border border-white/5 shadow-md snap-item ${(ch.youtube || ch.siirUrl) ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-xl">{ch.icon}</span>
                  {(ch.youtube || ch.siirUrl) && <span className="text-[9px] bg-red-600 px-1.5 py-0.5 rounded-full font-black">LIVE</span>}
                </div>
                <h3 className="font-bold text-xs text-white text-left line-clamp-1 truncate w-full">{ch.title}</h3>
              </button>
            ))}
          </div>
        </section>

        {/* PREMIUM LIVE TV SECTION */}
        <section className="p-4 rounded-2xl bg-[#111122] border border-blue-500/20 shadow-md w-full">
          <h2 className="text-sm font-black mb-2.5 text-blue-400 uppercase tracking-wide">Premium Live TV</h2>
          <button
            onClick={() => handlePlayVideo("https://www.siiiiir.tv/", "World cup - Live", false)}
            className="bg-gradient-to-br from-blue-900 to-black p-5 rounded-xl border border-white/10 text-center shadow-md w-full"
          >
            <p className="font-black text-white text-sm">World cup - Live</p>
          </button>
        </section>

        {/* AHMED DATA DEALS KENYA - FULLY RESPONSIVE MOBILE FLOW */}
        <section className="p-4 rounded-2xl bg-gradient-to-br from-green-950 via-[#0d1b15] to-[#050c08] border border-green-500/30 shadow-xl w-full">
          <div className="flex justify-between items-center gap-2 mb-4 border-b border-white/10 pb-2.5">
            <div>
              <h2 className="text-base font-black text-green-400 tracking-tight uppercase">Ahmed Data Deals Kenya</h2>
              <p className="text-[10px] text-white/50">Affordable internet packages</p>
            </div>
            <span className="text-[9px] bg-green-500 text-black font-black px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
              Active
            </span>
          </div>

          {/* SINGLE COLUMN FOR FORM ON MOBILE */}
          <form onSubmit={handleBuyData} className="flex flex-col gap-4 w-full">
            
            {/* DATA PACKAGES ADJUSTED LIST GRID FOR MOBILE TO ELIMINATE HORIZONTAL SQUEEZING */}
            <div className="max-h-[320px] overflow-y-auto pr-1 flex flex-col gap-2 custom-scrollbar w-full">
              {DATA_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`p-3 rounded-xl border transition-all duration-150 cursor-pointer flex justify-between items-center min-h-[56px] w-full ${
                    selectedPkg === pkg.id
                      ? 'bg-green-900/40 border-green-400 shadow-md'
                      : 'bg-[#0a110e]/80 border-white/5'
                  }`}
                >
                  <div className="text-left space-y-0.5 min-w-0 flex-1 pr-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[8px] font-black tracking-wide text-green-400 uppercase bg-green-950/80 px-1 py-0.5 rounded border border-green-500/10">
                        {pkg.desc}
                      </span>
                      {pkg.badge && (
                        <span className="text-[7px] font-black text-white uppercase bg-red-600 px-1 py-0.5 rounded tracking-tighter">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-black text-white text-xs truncate">{pkg.name}</p>
                  </div>
                  <div className="text-right flex items-center gap-2 shrink-0">
                    <span className="text-xs font-black text-white">KSh {pkg.price}</span>
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center border text-[9px] ${selectedPkg === pkg.id ? 'bg-green-400 border-green-400 text-black' : 'border-white/20 text-transparent'}`}>✓</div>
                  </div>
                </div>
              ))}
            </div>

            {/* TRANSACTION INPUT AREA FLUSH WITH MOBILE CONTAINER */}
            <div className="bg-black/20 p-3.5 rounded-xl border border-white/5 space-y-3.5 w-full">
              <div>
                <label className="block text-[10px] font-black text-white/60 uppercase tracking-wider mb-1.5 pl-0.5">Safaricom Phone Number</label>
                <input
                  type="text"
                  placeholder="Example: 0712345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-[#050a07] text-white px-3.5 py-3 rounded-lg border border-white/10 text-sm focus:outline-none focus:border-green-400 placeholder:text-white/20"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-black text-sm py-3.5 rounded-lg transition-all shadow-md uppercase tracking-wider flex items-center justify-center"
              >
                Buy Selected Bundle
              </button>
            </div>
          </form>
        </section>

        {/* FILMS SECTION - COMPACT MOBILE 2-COLUMN GRID */}
        <section className="p-4 rounded-2xl bg-[#111122] border border-orange-500/20 shadow-md w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-black text-orange-400 uppercase tracking-wide">Hindi & Hollywood Films</h2>
            <span className="text-[10px] bg-orange-600 px-3 py-1 rounded-full font-black">11 FILMS</span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 w-full">
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
                className="relative h-44 rounded-xl border border-white/5 overflow-hidden shadow-md group w-full"
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${film.image})`}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="relative z-10 h-full flex flex-col justify-between p-3 text-left">
                  <div className="flex justify-between items-start w-full">
                    <span className="text-xl">🎬</span>
                    <div className="flex flex-col gap-1 items-end shrink-0">
                      <span className="text-[9px] bg-black/60 px-1.5 py-0.5 rounded-full font-black">⭐ {film.rating}</span>
                      <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-black ${film.type === 'Hindi' ? 'bg-orange-600' : 'bg-blue-600'}`}>
                        {film.type}
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="font-black text-white text-xs line-clamp-1 leading-tight truncate">{film.title}</p>
                    <p className="text-[10px] text-white/60 mt-0.5">{film.year}</p>
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
      <section className="bg-[#0a0a1f] min-h-screen pb-24 w-full">
        <div className="bg-[#0a0a1f] p-4 flex items-center gap-3 border-b border-white/10 sticky top-0 z-40 px-4">
          <button onClick={() => {setSelectedLeague(null); setActiveStream(null);}} className="text-white text-2xl">←</button>
          <h2 className="text-lg font-black text-white uppercase truncate">{leagueName}</h2>
        </div>

        {activeStream && (
          <div className="bg-black aspect-video w-full rounded-none my-4 shadow-lg">
            <iframe src={activeStream} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
          </div>
        )}

        <div className="p-3 flex flex-col gap-3">
          {matches.map((match) => (
            <div key={match.id} className="bg-[#111122] rounded-xl border border-white/5 shadow-md">
              <button
                onClick={() => {
                  if (!match.isYoutube && match.link.includes('siiiiir.tv')) {
                    window.open(match.link, '_blank')
                  } else {
                    setActiveStream(match.link)
                  }
                }}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="text-center shrink-0">
                    <div className="text-xl leading-none">{match.flag1}</div>
                    <div className="text-xl leading-none mt-1">{match.flag2}</div>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-black text-white text-sm truncate">{match.team1} VS {match.team2}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">{match.time}</p>
                  </div>
                </div>
                <div className="text-right shrink-0 pl-2">
                  <p className="text-xs text-red-500 font-black tracking-wider">{match.quality}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0a0a1f] min-h-screen pb-24 w-full">
      <div className="bg-[#0a0a1f] p-4 flex justify-between items-center border-b border-white/10 sticky top-0 z-40 px-4">
        <h1 className="text-lg font-black text-white uppercase tracking-wide">Football Live HD</h1>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3.5">
        {FOOTBALL_LEAGUES.map((league) => (
          <button
            key={league.id}
            onClick={() => setSelectedLeague(league.id)}
            className={`${league.bg} w-full p-4 h-36 rounded-xl border border-white/5 flex flex-col items-center justify-center shadow-md`}
          >
            <div className="bg-white p-2 rounded-lg mb-2.5 w-16 h-12 flex items-center justify-center shadow-inner">
              <span className="text-2xl">{league.logo}</span>
            </div>
            <p className="font-black text-white text-xs text-center line-clamp-2 px-1 tracking-wide">{league.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

const BrowsePage = () => (
  <section className="p-4 pb-24 text-center w-full">
    <h2 className="text-lg font-black mb-4 uppercase tracking-wide">Browse Categories</h2>
    <div className="grid grid-cols-2 gap-3.5">
        {WATCH_BY_COUNTRY.map((c, i) => (
            <div key={i} className={`bg-gradient-to-br ${c.bg} p-5 rounded-xl border border-white/5 shadow-md`}>
                <span className="text-3xl">{c.flag}</span>
                <p className="font-black text-xs text-white mt-2 uppercase tracking-wide">{c.country}</p>
            </div>
        ))}
    </div>
  </section>
);

const ProfilePage = () => (
  <section className="p-4 pb-24 text-center w-full px-4">
    <div className="bg-[#111122] p-6 rounded-2xl border border-white/10 max-w-sm mx-auto mt-8 shadow-xl">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white shadow-md">
        A
      </div>
      <h2 className="text-lg font-black uppercase tracking-wide">Profile</h2>
      <p className="text-gray-400 text-sm mt-0.5">Ahmed Abdikani Mohamed</p>
    </div>
  </section>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans flex flex-col items-center w-full overflow-x-hidden select-none">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
        body { background-color: #06060f; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { bg: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 197, 94, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
}
