'use client'
import { useState } from 'react'
import Head from 'next/head'

const HERO_SIIIIR_ID = "https://new.siiiir.tv/"

const getYouTubeId = (input: string | null): string | null => {
  if (!input) return null
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input
  try {
    const url = new URL(input)
    if (url.hostname.includes('youtu.be')) return url.pathname.slice(1)
    if (url.searchParams.get('v')) return url.searchParams.get('v')
    const match = url.pathname.match(/\/(?:embed|live|shorts)\/([a-zA-Z0-9_-]{11})/)
    if (match) return match[1]
    return null
  } catch {
    return null
  }
}

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", siiiir: HERO_SIIIIR_ID },
  { id: 11, title: "Sports Live Highlights", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", youtube: "anFb5YF3nZk" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", siiiir: "https://new.siiiir.tv/" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", youtube: "2A_OLvCo_q8" },
  { id: 5, title: "Wildlife Live", bg: "from-green-600 to-lime-800", icon: "🦁", flag: "🌿", youtube: "MiQe9ob9aDc" },
  { id: 6, title: "Al Jazeera", bg: "from-teal-600 to-cyan-800", icon: "📰", flag: "🇶🇦", youtube: "gCNeDWCI0vo" },
  { id: 7, title: "Movies Live", bg: "from-pink-600 to-rose-800", icon: "🎥", flag: "🎞️", youtube: "89c4owSHL2E" },
  { id: 8, title: "Highlights", bg: "from-yellow-600 to-orange-700", icon: "🎬", flag: "📺", youtube: "dQw4w9WgXcQ" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍", youtube: null },
  { id: 9, title: "Kenya Citizens TV", bg: "from-red-600 to-black", icon: "🇰🇪", flag: "🇰🇪", youtube: "1YzlFiqmHDY" },
  { id: 10, title: "Somali TV", bg: "from-blue-500 to-cyan-600", icon: "🇸🇴", flag: "🇸🇴", youtube: "-qDzZEXIJdk" },
];

const ALL_FILMS = [
  { id: 1, title: "Jawan", year: "2023", rating: "8.1", type: "Hindi", bg: "from-orange-600 to-red-800", youtube: "y7tv1y_Q_Q0", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 2, title: "Pathaan", year: "2023", rating: "7.2", type: "Hindi", bg: "from-yellow-600 to-orange-700", youtube: "vqu4z34wENw", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 3, title: "Dangal", year: "2016", rating: "8.3", type: "Hindi", bg: "from-blue-600 to-indigo-800", youtube: "x_7YlGv9u1g", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 4, title: "3 Idiots", year: "2009", rating: "8.4", type: "Hindi", bg: "from-green-600 to-teal-800", youtube: "K0eDlFX9GMc", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400" },
  { id: 5, title: "PK", year: "2014", rating: "8.1", type: "Hindi", bg: "from-purple-600 to-pink-800", youtube: "82ZEDGPCkT8", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400" },
  { id: 22, title: "BeIN Sports", year: "2026", rating: "9.0", type: "Live Sports", bg: "from-slate-800 to-slate-950", siiiir: HERO_SIIIIR_ID, image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
  { id: 6, title: "Bajrangi Bhaijaan", year: "2015", rating: "8.0", type: "Hindi", bg: "from-red-600 to-rose-800", youtube: "vyX4toD395U", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400" },
  { id: 7, title: "KGF Chapter 2", year: "2022", rating: "8.4", type: "Hindi", bg: "from-amber-600 to-yellow-800", youtube: "Qah9sSIXJqk", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400" },
  { id: 8, title: "RRR", year: "2022", rating: "7.8", type: "Hindi", bg: "from-cyan-600 to-blue-800", youtube: "NgBoMJy386M", image: "https://images.unsplash.com/photo-1594909122845-11baa9b7703b?w=400" },
  { id: 9, title: "Avengers: Endgame", year: "2019", rating: "8.4", type: "Hollywood", bg: "from-indigo-600 to-purple-900", youtube: "TcMBFSGVi1c", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400" },
  { id: 10, title: "Avatar", year: "2009", rating: "7.9", type: "Hollywood", bg: "from-sky-600 to-blue-900", youtube: "5PSNL1qE6VY", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇪🇹", status: "Live", bg: "from-red-500 to-green-700" },
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
    { id: 1, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "LIVE NOW", quality: "HD" },
    { id: 2, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "Upcoming 0:0", quality: "HD" },
    { id: 3, team1: "England", team2: "Ghana", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇬🇭", time: "LIVE NOW", quality: "HD" },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD" },
    { id: 2, team1: "Man City", team2: "Liverpool", flag1: "🔵", flag2: "🔴", time: "Tomorrow 19:30", quality: "HD" },
  ],
  5: [
    { id: 1, team1: "Barcelona", team2: "Real Madrid", flag1: "🔵", flag2: "⚪", time: "Sunday 22:00", quality: "HD" },
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

const TopBanner = () => (
  <div className="w-full bg-[#65d800] text-white py-5 px-6 flex items-center justify-between">
    <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Ahmed sports live TV</h1>
    <div className="w-14 h-14 bg-white/20 rounded overflow-hidden">
      <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=100" alt="logo" className="w-full h-full object-cover" />
    </div>
  </div>
);

const Header = () => (
  <header className="p-5 flex items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50 shadow-xl w-full px-6">
    <h1 className="text-2xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
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
          className={`text-sm font-black uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab? 'opacity-100 scale-110 text-blue-500' : 'opacity-60'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

const HomePage = ({ activeVideoId, setActiveVideoId, activeTitle, setActiveTitle }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);
  const [activeSiiiirUrl, setActiveSiiiirUrl] = useState<string | null>(null);

  const handlePlayVideo = (youtubeInput: string, title: string) => {
    const videoId = getYouTubeId(youtubeInput)
    if (!videoId) return
    setActiveSiiiirUrl(null)
    setActiveVideoId(videoId)
    setActiveTitle(title)
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const handlePlaySiiiir = (url: string, title: string) => {
    setActiveVideoId(null)
    setActiveSiiiirUrl(url)
    setActiveTitle(title)
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const handleYouTubeSearch = async (loadMore = false) => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    if (!loadMore) setShowResults(true);
    try {
      const url = `/api/youtube?q=${encodeURIComponent(searchQuery)}${loadMore && nextPageToken? `&pageToken=${nextPageToken}` : ''}`
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        alert(data.error);
        setIsSearching(false);
        return;
      }
      if (data.items) {
        const results = data.items.map((item: any) => ({
          id: item.id.videoId || item.id.channelId || item.id.playlistId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channel: item.snippet.channelTitle,
          type: item.id.kind.replace('youtube#', '')
        }));
        setSearchResults(loadMore? [...searchResults,...results] : results);
        setNextPageToken(data.nextPageToken || null);
      }
    } catch (error) {
      console.error(error);
      alert("Search failed. Check your API key in.env.local");
    } finally {
      setIsSearching(false)
    }
  };

  const handleBuyData = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) { alert("Please enter your phone number!"); return; }
    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage? currentPackage.price : 20;
    window.open(`https://tinypesa.com/ahmeddatadealskenya?amount=${price}&phone=${encodeURIComponent(phoneNumber)}`, '_blank');
  };

  return (
    <main className="p-6 pb-28 w-full px-4 sm:px-8 relative space-y-8">
      <div className="bg-[#111122] rounded-2xl p-4 border border-blue-500/30 shadow-xl w-full">
        <div className="flex gap-3">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()} placeholder="Search YouTube - movies, music, live, channels..." className="flex-1 bg-[#0a0a1a] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-base" />
          <button onClick={() => handleYouTubeSearch()} disabled={isSearching} className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">{isSearching? "⏳" : "🔍"}</button>
        </div>
      </div>

      {showResults && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-red-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Results: {searchQuery}</h3>
            <button onClick={() => setShowResults(false)} className="text-white/60 hover:text-white text-3xl">×</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
            {searchResults.map((video) => (
              <button key={video.id} onClick={() => video.type === 'video' && handlePlayVideo(video.id, video.title)} className="flex gap-4 bg-[#0a0a1a] p-4 rounded-xl border border-white/5 hover:bg-[#1a1a2a] transition text-left">
                <img src={video.thumbnail} alt={video.title} className="w-36 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="text-white font-bold text-sm line-clamp-2">{video.title}</p>
                  <p className="text-white/50 text-xs mt-1.5">{video.channel}</p>
                  <span className="text-xs bg-blue-600 px-2 py-0.5 rounded-full mt-1 inline-block">{video.type}</span>
                </div>
              </button>
            ))}
          </div>
          {nextPageToken && (
            <button onClick={() => handleYouTubeSearch(true)} disabled={isSearching} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-xl font-bold">
              {isSearching? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      )}

      {activeVideoId && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-blue-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse font-bold">LIVE</span>
              <p className="text-base font-bold text-white line-clamp-1">{activeTitle}</p>
            </div>
            <button onClick={() => setActiveVideoId(null)} className="text-white/60 hover:text-white text-4xl leading-none">×</button>
          </div>
          <div className="aspect-video bg-black rounded-xl overflow-hidden w-full max-w-6xl mx-auto">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&modestbranding=1&rel=0`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title={activeTitle}
            />
          </div>
        </div>
      )}

      {activeSiiiirUrl && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-green-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-green-600 text-xs px-3 py-1 rounded-full animate-pulse font-bold">SIIIIR LIVE</span>
              <p className="text-base font-bold text-white line-clamp-1">{activeTitle}</p>
            </div>
            <button onClick={() => setActiveSiiiirUrl(null)} className="text-white/60 hover:text-white text-4xl leading-none">×</button>
          </div>
          <div className="aspect-video bg-black rounded-xl overflow-hidden w-full max-w-6xl mx-auto">
            <iframe
              src={activeSiiiirUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title={activeTitle}
            />
          </div>
        </div>
      )}

      <div className="relative w-full">
        <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl p-10 md:p-16 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center py-6">
            <div className="text-7xl mb-4">📺</div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">🇬🇲 Ahmed Abdikani Live TV 🇸🇴</h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Watch Live Sports HD Content Flawlessly</p>
            <button
              onClick={() => handlePlaySiiiir(HERO_SIIIIR_ID, "Ahmed Abdikani Live TV")}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-wider"
            >
              CLICK HERE TO WATCH LIVE
            </button>
          </div>
        {showNotification && (
          <div className="absolute top-4 right-4 z-30 w-72 bg-white text-black p-3.5 rounded-xl shadow-2xl border border-gray-200 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h4 className="text-xs font-bold text-gray-900">Manage Site Notifications</h4>
              <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-black text-base font-bold">×</button>
            </div>
            <p className="text-xs text-gray-600">Allow notifications to receive instantaneous dynamic updates on current match streams.</p>
            <button onClick={() => setShowNotification(false)} className="w-full bg-[#ef4444] text-white font-bold text-xs py-1.5 rounded uppercase">Unsubscribe</button>
          </div>
        )}
      </div>

      <div className="flex items-center px-2">
        <span className="bg-red-600 text-xs px-3 py-1 rounded-full mr-3 animate-pulse font-bold">LIVE</span>
        <p className="text-base font-black text-white uppercase tracking-wider">Ahmed Abdikani Live Streaming</p>
      </div>

      <section className="w-full">
        <h2 className="text-xl font-black mb-4 text-white/90 uppercase">All Live Channels</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
          {SPORTS_CHANNELS.map((ch) => {
            const canPlayYoutube =!!ch.youtube
            const canPlaySiiiir =!!ch.siiiir
            const canPlay = canPlayYoutube || canPlaySiiiir
            return (
              <button
                key={ch.id}
                onClick={() => {
                  if (canPlayYoutube) handlePlayVideo(ch.youtube!, ch.title)
                  else if (canPlaySiiiir) handlePlaySiiiir(ch.siiiir!, ch.title)
                }}
                disabled={!canPlay}
                className={`shrink-0 w-48 h-32 bg-gradient-to-br ${ch.bg} rounded-2xl p-5 flex flex-col justify-between border border-white/5 shadow-xl transition-all hover:scale-105 ${canPlay? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-3xl">{ch.icon}</span>
                  {canPlay && <span className="text-xs bg-red-600 px-2.5 py-1 rounded-full font-black">LIVE</span>}
                </div>
                <h3 className="font-bold text-sm text-white text-left line-clamp-2">{ch.title}</h3>
              </button>
            )
          })}
        </div>
      </section>

      <section className="p-6 rounded-3xl bg-[#111122] border border-blue-500/30 shadow-xl w-full">
        <h2 className="text-xl font-black mb-4 text-blue-400 uppercase">Premium Live TV</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button onClick={() => handlePlaySiiiir(HERO_SIIIIR_ID, "World cup - Live")} className="bg-gradient-to-br from-blue-900 to-black p-8 rounded-2xl border border-white/10 text-center hover:scale-[1.03] transition-transform shadow-xl w-full">
            <p className="font-black text-white text-lg">World cup - Live</p>
            <p className="text-white/50 text-sm mt-1">Click to watch</p>
          </button>
        </div>
      </section>

      <section className="p-6 rounded-3xl bg-gradient-to-br from-green-950 via-[#0d1b15] to-[#050c08] border-2 border-green-500/40 shadow-2xl w-full">
        <div className="flex justify-between items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <div><h2 className="text-2xl font-black text-green-400 uppercase">Ahmed Data Deals Kenya</h2><p className="text-sm text-white/60">Official link for affordable internet packages</p></div>
          <span className="text-xs bg-green-500 text-black font-black px-3 py-1.5 rounded-full uppercase">Active</span>
        </div>
        <form onSubmit={handleBuyData} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
            {DATA_PACKAGES.map((pkg) => (
              <div key={pkg.id} onClick={() => setSelectedPkg(pkg.id)} className={`p-4 rounded-xl border cursor-pointer flex justify-between items-center h-20 ${selectedPkg === pkg.id? 'bg-green-900/40 border-green-400' : 'bg-[#0a110e]/80 border-white/10'}`}>
                <div><span className="text-[9px] font-black text-green-400 uppercase">{pkg.desc}</span><p className="font-black text-white">{pkg.name}</p></div>
                <div className="flex items-center gap-3"><span className="font-black text-white">KSh {pkg.price}</span><div className={`w-5 h-5 rounded-full border ${selectedPkg === pkg.id? 'bg-green-400 border-green-400' : 'border-white/20'}`}></div></div>
              </div>
            ))}
          </div>
          <div className="bg-black/30 p-5 rounded-2xl border border-white/5 space-y-5">
            <div><label className="block text-xs font-black text-white/70 uppercase mb-2">Safaricom Phone Number</label><input type="text" placeholder="Example: 0712345678" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full bg-[#050a07] text-white px-5 py-4 rounded-xl border border-white/10" /></div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-black text-base py-4 rounded-xl uppercase tracking-widest">Buy Selected Bundle</button>
          </div>
        </form>
      </section>

      <section className="p-6 rounded-3xl bg-[#111122] border border-orange-500/30 shadow-xl w-full">
        <div className="flex items-center justify-between mb-5"><h2 className="text-xl font-black text-orange-400 uppercase">Hindi & Hollywood Films</h2><span className="text-xs bg-orange-600 px-4 py-1.5 rounded-full font-black">11 FILMS</span></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {ALL_FILMS.map((film) => {
            const hasYoutube =!!film.youtube
            const hasSiiiir =!!film.siiiir
            return (
              <button
                key={film.id}
                onClick={() => {
                  if (hasYoutube) handlePlayVideo(film.youtube!, film.title)
                  else if (hasSiiiir) handlePlaySiiiir(film.siiiir!, film.title)
                }}
                className="relative h-56 rounded-2xl border border-white/10 overflow-hidden hover:scale-105 transition-transform shadow-xl group"
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${film.image})`}} />
                <div className={`absolute inset-0 bg-gradient-to-t ${film.bg} opacity-85`} />
                <div className="relative z-10 h-full flex flex-col justify-between p-4 text-left">
                  <div className="flex justify-between"><span className="text-3xl">🎬</span><span className="text-xs bg-black/60 px-2 py-1 rounded-full font-black">⭐ {film.rating}</span></div>
                  <div><p className="font-black text-white">{film.title}</p><p className="text-xs text-white/80">{film.year}</p></div>
                </div>
              </button>
            )
          })}
        </div>
      </section>
    </main>
  );
};

const LivePage = () => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  if (selectedLeague) {
    const matches = MATCHES_DATA[selectedLeague] || [];
    const leagueName = FOOTBALL_LEAGUES.find(l => l.id === selectedLeague)?.name || "";
    return (
      <section className="bg-[#0a0a1f] min-h-screen pb-28 w-full">
        <div className="p-5 flex items-center gap-4 border-b border-white/10 px-6">
          <button onClick={() => setSelectedLeague(null)} className="text-white text-3xl">←</button>
          <h2 className="text-2xl font-black uppercase">{leagueName}</h2>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map((m:any) => (
            <div key={m.id} className="bg-[#111122] rounded-xl p-5 flex justify-between">
              <div>
                <p className="font-black">{m.team1} VS {m.team2}</p>
                <p className="text-sm text-white/50">{m.time}</p>
              </div>
              <p className="text-red-500 font-black">{m.quality}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  return (
    <section className="bg-[#0a0a1f] min-h-screen pb-28 w-full">
      <div className="p-5 border-b border-white/10 px-6">
        <h1 className="text-2xl font-black uppercase">Football Live HD</h1>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {FOOTBALL_LEAGUES.map((league) => (
          <button key={league.id} onClick={() => setSelectedLeague(league.id)} className={`${league.bg} p-8 rounded-2xl border border-white/10 flex flex-col items-center hover:scale-105 transition-all`}>
            <div className="bg-white p-5 rounded-xl mb-4"><span className="text-5xl">{league.logo}</span></div>
            <p className="font-black text-xl">{league.name}</p>
          </button>
        ))}
      </div>
    </section>
  )
};

const BrowsePage = () => (
  <section className="p-6 pb-28 text-center">
    <h2 className="text-2xl font-black mb-6 uppercase">Browse Categories</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
      {WATCH_BY_COUNTRY.map((c,i) => (
        <div key={i} className={`bg-gradient-to-br ${c.bg} p-8 rounded-2xl`}>
          <span className="text-5xl">{c.flag}</span>
          <p className="font-black mt-3 uppercase">{c.country}</p>
          <p className="text-xs text-white/70 mt-1">{c.status}</p>
        </div>
      ))}
    </div>
  </
