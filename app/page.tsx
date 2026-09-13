'use client'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

// --- YOUR REAL MAN UNITED LIVE IMAGES ---
const REAL_MANUTD_IMAGE = "https://d2egosedh0nm8l.cloudfront.net/images/channel-links/7932402/image/b1949bb5-3a73-445b-8ab8-f5a88601cc05";
const REAL_MANUTD_IMAGE_2 = "https://d2egosedh0nm8l.cloudfront.net/images/channel-links/7932210/image/05d1b05f-7111-4359-a981-bd867e79eb78";

// --- NEW M3U8 LINKS - CLOUDFRONT beIN SPORTS 1080p ---
const BEIN_LINKS = {
  bein1: "https://dktvrj635xulp.cloudfront.net/live/bein1_1080p.m3u8",
  bein2: "https://dktvrj635xulp.cloudfront.net/live/bein2_1080p.m3u8",
  bein3: "https://dktvrj635xulp.cloudfront.net/live/bein3_1080p.m3u8",
  bein4: "https://dktvrj635xulp.cloudfront.net/live/bein4_1080p.m3u8",
  bein5: "https://dktvrj635xulp.cloudfront.net/live/bein5_1080p.m3u8", // MAIN - MAN UTD vs MAN CITY
  bein6: "https://dktvrj635xulp.cloudfront.net/live/bein6_1080p.m3u8",
};

// --- DATA SECTION - 100% CLEAN, NO sporty.com ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", m3u8: BEIN_LINKS.bein1, image: "https://images.unsplash.com/photo-1504305754058-4f08ccd90d9a?w=400", badge: "LIVE" },
  { id: 11, title: "Sports Live Highlights", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", m3u8: BEIN_LINKS.bein2, image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400", badge: "LIVE" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", m3u8: BEIN_LINKS.bein5, image: REAL_MANUTD_IMAGE, badge: "LIVE • DERBY" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", m3u8: BEIN_LINKS.bein3, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400", badge: "LIVE" },
  { id: 5, title: "Wildlife Live", bg: "from-green-600 to-lime-800", icon: "🦁", flag: "🌿", youtube: "MiQe9ob9aDc", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400" },
  { id: 6, title: "Al Jazeera", bg: "from-teal-600 to-cyan-800", icon: "📰", flag: "🇶🇦", youtube: "gCNeDWCI0vo", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400" },
  { id: 7, title: "Movies Live", bg: "from-pink-600 to-rose-800", icon: "🎥", flag: "🎞️", youtube: "89c4owSHL2E", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400" },
  { id: 8, title: "Highlights", bg: "from-yellow-600 to-orange-700", icon: "🎬", flag: "📺", youtube: "dQw4w9WgXcQ", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍", m3u8: BEIN_LINKS.bein1, image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400", badge: "LIVE" },
  { id: 9, title: "Kenya Citizens TV", bg: "from-red-600 to-black", icon: "🇰🇪", flag: "🇰🇪", youtube: "1YzlFiqmHDY", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400" },
  { id: 10, title: "Somali TV", bg: "from-blue-500 to-cyan-600", icon: "🇸🇴", flag: "🇸🇴", youtube: "-qDzZEXIJdk", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=400" },
];

const ALL_FILMS = [
  { id: 22, title: "MAN UTD vs MAN CITY - LIVE", year: "2026", rating: "9.9", type: "Premier League • beIN 5", bg: "from-slate-800 to-slate-950", m3u8: BEIN_LINKS.bein5, badge: "1080p • DERBY LIVE", image: REAL_MANUTD_IMAGE },
  { id: 23, title: "MAN UTD LIVE HD", year: "2026", rating: "9.8", type: "Premier League", bg: "from-red-800 to-red-950", m3u8: BEIN_LINKS.bein5, badge: "LIVE • REAL", image: REAL_MANUTD_IMAGE_2 },
  { id: 1, title: "Jawan", year: "2023", rating: "8.1", type: "Hindi", bg: "from-orange-600 to-red-800", youtube: "y7tv1y_Q_Q0", image: "https://images.unsplash.com/photo-1594909771206-00276884c702?w=400" },
  { id: 2, title: "Pathaan", year: "2023", rating: "7.2", type: "Hindi", bg: "from-yellow-600 to-orange-700", youtube: "vqu4z34wENw", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 3, title: "Dangal", year: "2016", rating: "8.3", type: "Hindi", bg: "from-blue-600 to-indigo-800", youtube: "x_7YlGv9u1g", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-600 to-black/20" },
  { country: "Global", flag: "🌍🏟️", status: "Live", bg: "from-purple-500 to-indigo-700" },
];

const FOOTBALL_LEAGUES = [
  { id: 1, name: "FIFA World Cup", logo: "🏆", bg: "bg-gradient-to-r from-blue-600 to-indigo-700" },
  { id: 2, name: "International Friendly", logo: "⚽", bg: "bg-gradient-to-r from-green-600 to-teal-700" },
  { id: 3, name: "English Premier League", logo: "🦁", bg: "bg-gradient-to-r from-purple-700 to-purple-900" },
  { id: 4, name: "Serie A", logo: "🇮🇹", bg: "bg-gradient-to-r from-blue-500 to-blue-700" },
  { id: 5, name: "La Liga", logo: "🇪🇸", bg: "bg-gradient-to-r from-red-600 to-yellow-500" },
  { id: 6, name: "Ligue 1", logo: "🇫🇷", bg: "bg-gradient-to-r from-slate-600 to-slate-800" },
];

const MATCHES_DATA: Record<number, any[]> = {
  1: [
    { id: 1, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "LIVE NOW", quality: "HD 1080p", link: BEIN_LINKS.bein1, isM3U8: true },
    { id: 2, team1: "Spain", team2: "Brazil", flag1: "🇪🇸", flag2: "🇧🇷", time: "Upcoming", quality: "HD 1080p", link: BEIN_LINKS.bein2, isM3U8: true },
  ],
  3: [
    { id: 1, team1: "MAN UTD", team2: "MAN CITY", flag1: "🔴", flag2: "🔵", time: "TODAY 18:30 - LIVE", quality: "1080p", link: BEIN_LINKS.bein5, image: REAL_MANUTD_IMAGE, isM3U8: true },
    { id: 2, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD 1080p", link: BEIN_LINKS.bein1, isM3U8: true },
  ],
};

const DATA_PACKAGES = [
  { id: 1, name: "250MB Daily", price: 18, desc: "24 HOURS", badge: "Best Deal" },
  { id: 2, name: "250MB Daily", price: 20, desc: "24 HOURS", badge: null },
  { id: 3, name: "1GB Flash Data", price: 19, desc: "1 HOUR - TUNUKIWA", badge: "Tunukiwa" },
  { id: 4, name: "1.25GB Midnight", price: 50, desc: "TILL MIDNIGHT", badge: "Best Deal" },
];

const Header = () => (
  <header className="p-5 flex items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50 shadow-xl w-full px-6">
    <h1 className="text-3xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full ml-2">beIN 5 1080p</span></h1>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a1a]/95 border-t border-white/10 p-5 flex justify-around backdrop-blur-xl z-50 shadow-2xl">
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setActiveTab(tab)} className={`text-sm font-black uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab ? 'opacity-100 scale-110 text-blue-500' : 'opacity-60'}`}>{tab}</button>
      ))}
    </nav>
  );
};

// --- HLS PLAYER WITH PROFESSIONAL TV WATERMARK ---
const HLSPlayer = ({ src, title }: { src: string; title: string; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => setIsLoading(false));
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js';
      script.onload = () => {
        const hls = new (window as any).Hls({ enableWorker: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on((window as any).Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
          video.play().catch(() => {});
        });
      };
      document.head.appendChild(script);
    }
  }, [src]);

  return (
    <div className="relative w-full aspect-video bg-black group overflow-hidden rounded-xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="text-white font-bold animate-pulse text-center">
            <div className="text-4xl mb-2">📺</div>
            Loading {title} - beIN 5 1080p...
          </div>
        </div>
      )}
      <video ref={videoRef} controls autoPlay playsInline poster={poster || REAL_MANUTD_IMAGE} className="w-full h-full" />

      {/* PROFESSIONAL WATERMARK - BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pointer-events-none">
        <div className="flex justify-between items-end">
          <div className="bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white font-black text-[11px] tracking-wider">AHMED LIVE TV • beIN 5 1080p • MAN UTD vs MAN CITY</span>
          </div>
          <div className="bg-red-600 px-2.5 py-1 rounded-full text-white font-black text-[10px] shadow-lg">🔴 LIVE • HD</div>
        </div>
      </div>

      {/* TOP LEFT - SMALL LOGO */}
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 pointer-events-none">
        <span className="text-white font-black text-[11px] tracking-widest">AHMED LIVE TV</span>
      </div>

      {/* TOP RIGHT - beIN BADGE */}
      <div className="absolute top-3 right-14 bg-green-600/90 backdrop-blur px-2 py-1 rounded-full text-white font-black text-[9px] pointer-events-none">
        beIN SPORTS 5
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [isM3U8Video, setIsM3U8Video] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);

  const handlePlayVideo = (url: string, title: string, isYoutube: boolean = true, isChannel: boolean = false, isM3U8: boolean = false) => {
    if (isM3U8 || url.includes('.m3u8') || url.includes('cloudfront.net')) {
      setActiveVideo(url);
      setActiveTitle(title);
      setIsYoutubeVideo(false);
      setIsM3U8Video(true);
      setShowResults(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (isChannel || (url && url.includes('youtube.com/@'))) {
      window.open(url, '_blank');
      return;
    }
    setActiveVideo(url);
    setActiveTitle(title);
    setIsYoutubeVideo(isYoutube);
    setIsM3U8Video(false);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleYouTubeSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setShowResults(true);
    try {
      const API_KEY = "AIzaSyAUIkNgNCG9LVJnyG1ohnTxNYwWMpoaiK0";
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`);
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
    } catch (error) { console.error("Search error:", error); }
    finally { setIsSearching(false); }
  };

  const handleBuyData = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) { alert("Please enter your phone number!"); return; }
    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage ? currentPackage.price : 20;
    const targetUrl = `https://tinypesa.com/ahmeddatadealskenya?amount=${price}&phone=${encodeURIComponent(phoneNumber)}`;
    window.open(targetUrl, '_blank');
  };

  return (
    <main className="p-6 pb-28 w-full px-4 sm:px-8 relative space-y-8">
      {/* Search */}
      <div className="bg-[#111122] rounded-2xl p-4 border border-blue-500/30 shadow-xl w-full">
        <div className="flex gap-3">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()} placeholder="Search YouTube - movies, music, live..." className="flex-1 bg-[#0a0a1a] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-base" />
          <button onClick={handleYouTubeSearch} disabled={isSearching} className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">{isSearching ? "⏳" : "🔍"}</button>
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
              <button key={video.id} onClick={() => handlePlayVideo(video.id, video.title, true)} className="flex gap-4 bg-[#0a0a1a] p-4 rounded-xl border border-white/5 hover:bg-[#1a1a2a] transition text-left transform hover:scale-[1.02]">
                <img src={video.thumbnail} alt={video.title} className="w-36 h-24 object-cover rounded-lg" />
                <div className="flex-1"><p className="text-white font-bold text-sm line-clamp-2">{video.title}</p><p className="text-white/50 text-xs mt-1.5">{video.channel}</p></div>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeVideo && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-green-500/50 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse font-bold">LIVE</span>
              <span className="bg-green-600 text-xs px-2 py-1 rounded-full font-bold">beIN 5 1080p</span>
              <p className="text-base font-bold text-white line-clamp-1">{activeTitle}</p>
            </div>
            <button onClick={() => setActiveVideo(null)} className="text-white/60 hover:text-white text-4xl leading-none">×</button>
          </div>
          <div className="w-full max-w-6xl mx-auto">
            {isM3U8Video ? (
              <HLSPlayer src={activeVideo} title={activeTitle} poster={REAL_MANUTD_IMAGE} />
            ) : (
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe src={isYoutubeVideo ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
              </div>
            )}
          </div>
        </div>
      )}

      {/* HERO - WITH YOUR REAL IMAGE */}
      <div className="relative w-full">
        <div className="w-full rounded-3xl overflow-hidden border-2 border-green-500/50 shadow-2xl relative h-[420px]">
          <img src={REAL_MANUTD_IMAGE} alt="MAN UTD vs MAN CITY" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
          <div className="relative z-10 text-center py-6 h-full flex flex-col justify-center items-center p-6">
            <div className="text-5xl mb-3">📺</div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight drop-shadow-xl">🇬🇲 Ahmed Abdikani live TV 🇸🇴</h2>
            <p className="text-white/90 text-base sm:text-lg mb-2 max-w-2xl mx-auto font-bold drop-shadow">Watch Live Sports HD 1080p • beIN Sports CloudFront • No Betting</p>
            <p className="text-green-400 text-sm font-black mb-8 drop-shadow">✓ beIN 5: MAN UTD vs MAN CITY LIVE TODAY - 1080p</p>
            <button onClick={() => handlePlayVideo(BEIN_LINKS.bein5, "MAN UNITED vs MAN CITY • LIVE • beIN 5 1080p", false, false, true)} className="inline-block bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider border-2 border-white/20">🔴 Click Here to Watch Derby LIVE 1080p</button>
          </div>
        </div>
        {showNotification && (
          <div className="absolute top-4 right-4 z-30 w-72 bg-white text-black p-3.5 rounded-xl shadow-2xl border border-gray-200 flex flex-col gap-2">
            <div className="flex justify-between items-start"><h4 className="text-xs font-bold text-gray-900">beIN 5 1080p Ready!</h4><button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-black text-base font-bold">×</button></div>
            <div className="flex gap-2 items-center"><div className="w-12 h-8 bg-green-900 rounded overflow-hidden shrink-0"><img src={REAL_MANUTD_IMAGE} className="w-full h-full object-cover" alt="Thumb" /></div><p className="text-[10px] text-gray-600 leading-tight">MAN UTD vs MAN CITY live on beIN 5 1080p - Real Image</p></div>
            <button onClick={() => { setShowNotification(false); handlePlayVideo(BEIN_LINKS.bein5, "MAN UTD vs MAN CITY LIVE", false, false, true); }} className="w-full bg-green-600 text-white font-bold text-[11px] py-1.5 rounded uppercase text-center hover:bg-green-700">WATCH NOW 1080p</button>
          </div>
        )}
      </div>

      <div className="flex items-center px-2"><span className="bg-red-600 text-xs px-3 py-1 rounded-full mr-3 animate-pulse font-bold">LIVE</span><p className="text-base font-black text-white uppercase tracking-wider">Ahmed Abdikani Live Streaming • beIN Sports 1080p</p></div>

      {/* CHANNELS - WITH REAL IMAGES */}
      <div className="w-full space-y-8">
        <section className="w-full">
          <h2 className="text-xl font-black mb-4 text-white/90 tracking-wide uppercase">All Live Channels - beIN 1080p CloudFront - Real Images</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
            {SPORTS_CHANNELS.map((ch) => (
              <button key={ch.id} onClick={() => { if ((ch as any).m3u8) { handlePlayVideo((ch as any).m3u8, ch.title, false, false, true); } else if ((ch as any).youtube) { handlePlayVideo((ch as any).youtube, ch.title, true); } }} className="shrink-0 w-52 h-36 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-green-400 transition-all relative group">
                <img src={(ch as any).image} alt={ch.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${ch.bg} opacity-80 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start"><span className="text-2xl">{ch.icon}</span>{(ch as any).badge && <span className="bg-red-600 text-[9px] px-2 py-1 rounded-full font-black text-white animate-pulse">{(ch as any).badge}</span>}</div>
                  <div><p className="text-white font-black text-sm">{ch.title}</p><p className="text-white/70 text-[10px]">beIN 1080p • CloudFront</p></div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* PREMIUM - WITH REAL IMAGE */}
        <section className="bg-[#111122] rounded-3xl p-6 border border-green-500/30 w-full">
          <h2 className="text-lg font-black mb-4 text-green-400 uppercase">Premium Live TV - MAN UTD vs MAN CITY TODAY - Real Image</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onClick={() => handlePlayVideo(BEIN_LINKS.bein5, "MAN UTD vs MAN CITY - LIVE NOW", false, false, true)} className="relative h-40 rounded-2xl overflow-hidden border-2 border-green-400 group">
              <img src={REAL_MANUTD_IMAGE} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Derby" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <p className="text-white font-black text-lg flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>MAN UTD vs MAN CITY - LIVE NOW</p>
                <p className="text-green-300 text-xs mt-1">beIN 5 1080p • Real Image • 1080p</p>
                <p className="text-white/60 text-[10px] mt-1">Today Sep 13, 2026 - 6:30 PM EAT</p>
              </div>
            </button>
            <button onClick={() => handlePlayVideo(BEIN_LINKS.bein1, "FIFA World Cup 2026 - beIN 1", false, false, true)} className="relative h-40 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
              <p className="text-white font-black">FIFA World Cup 2026 - beIN 1</p>
            </button>
          </div>
        </section>
      </div>

      {/* DATA DEALS */}
      <section className="bg-[#0f1f0f] rounded-3xl p-6 border border-green-500/30 w-full">
        <h2 className="text-xl font-black text-green-400 mb-1">AHMED DATA DEALS KENYA</h2>
        <p className="text-white/50 text-xs mb-4">Official link for affordable internet packages</p>
        <form onSubmit={handleBuyData} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {DATA_PACKAGES.map((pkg) => (
              <label key={pkg.id} className={`flex justify-between items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPkg === pkg.id ? 'bg-green-900/40 border-green-500' : 'bg-[#0a0a1a] border-white/10'}`}>
                <div><p className="text-[10px] text-white/50 uppercase flex gap-1">{pkg.desc} {pkg.badge && <span className="bg-red-600 text-white px-1 rounded text-[8px]">{pkg.badge}</span>}</p><p className="text-white font-bold text-sm">{pkg.name}</p></div>
                <div className="flex items-center gap-2"><span className="text-white font-black text-sm">KSh {pkg.price}</span><input type="radio" name="pkg" checked={selectedPkg === pkg.id} onChange={() => setSelectedPkg(pkg.id)} className="accent-green-500" /></div>
              </label>
            ))}
          </div>
          <div className="flex gap-3">
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Safaricom: 07XXXXXXXX" className="flex-1 bg-[#0a0a1a] text-white px-4 py-3 rounded-xl border border-white/10 focus:border-green-500 outline-none" required />
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-black px-6 py-3 rounded-xl">BUY NOW</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <Head>
        <title>Ahmed Live TV - MAN UTD vs MAN CITY LIVE - beIN 5 1080p</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js" async></script>
      </Head>
      <div className="min-h-screen bg-[#050510] text-white w-full">
        <Header />
        <HomePage />
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        `}</style>
      </div>
    </>
  );
}
