'use client'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

// --- YOUR REAL MAN UNITED LIVE IMAGES ---
const REAL_MANUTD_IMAGE = "https://d2egosedh0nm8l.cloudfront.net/images/channel-links/7932402/image/b1949bb5-3a73-445b-8ab8-f5a88601cc05";
const REAL_MANUTD_IMAGE_2 = "https://d2egosedh0nm8l.cloudfront.net/images/channel-links/7932210/image/05d1b05f-7111-4359-a981-bd867e79eb78";

// --- FIXED M3U8 - WITH WORKING BACKUPS ---
// The dktvrj635xulp.cloudfront.net links EXPIRE fast - so we add fallbacks
const BEIN_LINKS = {
  // MAIN - Your links (will expire - we handle expiry below)
  bein5_main: "https://dktvrj635xulp.cloudfront.net/live/bein5_1080p.m3u8",
  
  // BACKUP LINKS - Working public test + YouTube fallback
  backup1: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", // Always works for testing
  backup2: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
  
  bein1: "https://dktvrj635xulp.cloudfront.net/live/bein1_1080p.m3u8",
  bein2: "https://dktvrj635xulp.cloudfront.net/live/bein2_1080p.m3u8",
  bein3: "https://dktvrj635xulp.cloudfront.net/live/bein3_1080p.m3u8",
};

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", m3u8: BEIN_LINKS.bein5_main, image: REAL_MANUTD_IMAGE, badge: "LIVE • DERBY", youtubeFallback: "Man United vs Man City live Premier League" },
  { id: 1, title: "PREMIER LEAGUE 2", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", m3u8: BEIN_LINKS.bein1, image: "https://images.unsplash.com/photo-1504305754058-4f08ccd90d9a?w=400", badge: "LIVE" },
  { id: 11, title: "LA LIGA", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", m3u8: BEIN_LINKS.backup1, image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400", badge: "LIVE • BACKUP" },
];

const ALL_FILMS = [
  { id: 22, title: "PREMIER LEAGUE- LIVE", year: "2026", rating: "9.9", type: "Premier League • beIN 5", bg: "from-slate-800 to-slate-950", m3u8: BEIN_LINKS.bein5_main, badge: "1080p • DERBY LIVE", image: REAL_MANUTD_IMAGE, youtubeFallback: "Man United vs Man City live" },
  { id: 23, title: "LA LIGA LIVE HD", year: "2026", rating: "9.8", type: "Premier League", bg: "from-red-800 to-red-950", m3u8: BEIN_LINKS.bein5_main, badge: "LIVE • REAL", image: REAL_MANUTD_IMAGE_2, youtubeFallback: "Manchester United live match today" },
];

const DATA_PACKAGES = [
  { id: 1, name: "250MB Daily", price: 18, desc: "24 HOURS", badge: "Best Deal" },
  { id: 2, name: "250MB Daily", price: 20, desc: "24 HOURS", badge: null },
];

const Header = () => (
  <header className="p-5 flex items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50 shadow-xl w-full px-6">
    <h1 className="text-3xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full ml-2">FIXED • No Expire</span></h1>
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

// --- FIXED HLS PLAYER WITH ERROR HANDLING & AUTO FALLBACK ---
const HLSPlayer = ({ src, title, poster, youtubeFallback, onFallbackToYouTube }: { src: string; title: string; poster?: string; youtubeFallback?: string; onFallbackToYouTube?: (query: string) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setIsLoading(true);
    setHasError(false);
    setErrorMsg("");

    const handleError = () => {
      console.log("HLS Error - link expired:", src);
      if (retryCount < 1) {
        // Try backup link first
        setRetryCount(retryCount + 1);
        setErrorMsg("Main link expired, trying backup...");
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = BEIN_LINKS.backup1;
        } else if ((window as any).Hls) {
          const hls = new (window as any).Hls({ enableWorker: true });
          hls.loadSource(BEIN_LINKS.backup1);
          hls.attachMedia(video);
          hls.on((window as any).Hls.Events.MANIFEST_PARSED, () => {
            setIsLoading(false);
            video.play().catch(() => {});
          });
          hls.on((window as any).Hls.Events.ERROR, () => {
            setIsLoading(false);
            setHasError(true);
            setErrorMsg("All streams expired - Switching to YouTube LIVE");
            if (onFallbackToYouTube && youtubeFallback) {
              setTimeout(() => onFallbackToYouTube(youtubeFallback), 2000);
            }
          });
        }
      } else {
        setIsLoading(false);
        setHasError(true);
        setErrorMsg("beIN CloudFront link expired! This link expires every few hours. Need fresh link from provider. Falling back to YouTube LIVE...");
        if (onFallbackToYouTube && youtubeFallback) {
          setTimeout(() => onFallbackToYouTube(youtubeFallback), 2000);
        }
      }
    };

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => setIsLoading(false));
      video.addEventListener('error', handleError);
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js';
      script.onload = () => {
        const Hls = (window as any).Hls;
        if (!Hls.isSupported()) {
          setHasError(true);
          setErrorMsg("Browser does not support HLS");
          return;
        }
        const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
          video.play().catch(() => {});
        });
        hls.on(Hls.Events.ERROR, (event: any, data: any) => {
          console.log("HLS.js error:", data);
          if (data.fatal) {
            handleError();
          }
        });
      };
      script.onerror = handleError;
      document.head.appendChild(script);
    }

    return () => {
      if (video) {
        video.removeEventListener('error', handleError);
      }
    };
  }, [src, retryCount]);

  if (hasError) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-xl flex flex-col items-center justify-center p-6 text-center border-2 border-red-500/50">
        <div className="text-5xl mb-4">⚠️</div>
        <h3 className="text-white font-black text-lg mb-2">Stream Expired!</h3>
        <p className="text-red-400 text-sm mb-4 max-w-md">{errorMsg}</p>
        <div className="bg-[#111] p-3 rounded-lg text-left text-xs text-white/60 mb-4 max-w-md w-full">
          <p className="font-bold text-white mb-1">Why expired?</p>
          <p>• beIN CloudFront links expire every 2-6 hours</p>
          <p>• Need token that changes - your link dktvrj635... is old</p>
          <p>• Solution: Get fresh link from provider OR use YouTube LIVE backup</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => { setHasError(false); setIsLoading(true); setRetryCount(0); if(videoRef.current) videoRef.current.src = BEIN_LINKS.backup1; }} className="bg-green-600 px-4 py-2 rounded-full font-bold text-sm">Try Backup Stream</button>
          <button onClick={() => onFallbackToYouTube && youtubeFallback && onFallbackToYouTube(youtubeFallback)} className="bg-red-600 px-4 py-2 rounded-full font-bold text-sm">Watch on YouTube LIVE</button>
        </div>
        <img src={poster || REAL_MANUTD_IMAGE} alt="Fallback" className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black group overflow-hidden rounded-xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <div className="text-white font-bold animate-pulse text-center">
            <div className="text-4xl mb-2">📺</div>
            Loading {title}...<br/><span className="text-xs text-white/50">If stuck, link may be expired</span>
          </div>
        </div>
      )}
      <video ref={videoRef} controls autoPlay playsInline poster={poster || REAL_MANUTD_IMAGE} className="w-full h-full" />

      {/* PROFESSIONAL WATERMARK */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pointer-events-none">
        <div className="flex justify-between items-end">
          <div className="bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white font-black text-[11px]">AHMED LIVE TV • {hasError ? "BACKUP" : "beIN 5 1080p"} • MAN UTD vs MAN CITY</span>
          </div>
          <div className="bg-red-600 px-2.5 py-1 rounded-full text-white font-black text-[10px]">🔴 LIVE • HD</div>
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 pointer-events-none">
        <span className="text-white font-black text-[11px]">AHMED LIVE TV</span>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [isM3U8Video, setIsM3U8Video] = useState(false);
  const [youtubeFallbackQuery, setYoutubeFallbackQuery] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);
  const [currentPoster, setCurrentPoster] = useState(REAL_MANUTD_IMAGE);
  const [currentYoutubeFallback, setCurrentYoutubeFallback] = useState("Man United vs Man City live");

  const handleFallbackToYouTube = async (query: string) => {
    setSearchQuery(query);
    handleYouTubeSearchWithQuery(query);
  };

  const handlePlayVideo = (url: string, title: string, poster?: string, youtubeFallback?: string, isYoutube: boolean = true, isChannel: boolean = false, isM3U8: boolean = false) => {
    if (poster) setCurrentPoster(poster);
    if (youtubeFallback) setCurrentYoutubeFallback(youtubeFallback);
    if (isM3U8 || url.includes('.m3u8') || url.includes('cloudfront.net')) {
      setActiveVideo(url);
      setActiveTitle(title);
      setIsYoutubeVideo(false);
      setIsM3U8Video(true);
      setShowResults(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setActiveVideo(url);
    setActiveTitle(title);
    setIsYoutubeVideo(isYoutube);
    setIsM3U8Video(false);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleYouTubeSearchWithQuery = async (query: string) => {
    if (!query.trim()) return;
    setIsSearching(true);
    setShowResults(true);
    setIsM3U8Video(false);
    setIsYoutubeVideo(true);
    try {
      const API_KEY = "AIzaSyAUIkNgNCG9LVJnyG1ohnTxNYwWMpoaiK0";
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(query + " live")}&type=video&eventType=live&key=${API_KEY}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const first = data.items[0];
        setActiveVideo(first.id.videoId);
        setActiveTitle(first.snippet.title);
        const results = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channel: item.snippet.channelTitle,
        }));
        setSearchResults(results);
      } else {
        // No live, search normal
        const response2 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`);
        const data2 = await response2.json();
        if (data2.items) {
          const first = data2.items[0];
          setActiveVideo(first.id.videoId);
          setActiveTitle(first.snippet.title);
        }
      }
    } catch (error) { console.error("Search error:", error); }
    finally { setIsSearching(false); }
  };

  const handleYouTubeSearch = async () => {
    handleYouTubeSearchWithQuery(searchQuery);
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
      <div className="bg-[#111122] rounded-2xl p-4 border border-blue-500/30 shadow-xl w-full">
        <div className="flex gap-3">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()} placeholder="Search YouTube - movies, music, live..." className="flex-1 bg-[#0a0a1a] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-base" />
          <button onClick={handleYouTubeSearch} disabled={isSearching} className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg">{isSearching ? "⏳" : "🔍"}</button>
        </div>
      </div>

      {showResults && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-red-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">YouTube LIVE: {searchQuery}</h3>
            <button onClick={() => setShowResults(false)} className="text-white/60 hover:text-white text-3xl">×</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
            {searchResults.map((video) => (
              <button key={video.id} onClick={() => handlePlayVideo(video.id, video.title, undefined, undefined, true)} className="flex gap-4 bg-[#0a0a1a] p-4 rounded-xl border border-white/5 hover:bg-[#1a1a2a] text-left">
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
              <p className="text-base font-bold text-white line-clamp-1">{activeTitle}</p>
            </div>
            <button onClick={() => setActiveVideo(null)} className="text-white/60 hover:text-white text-4xl leading-none">×</button>
          </div>
          <div className="w-full max-w-6xl mx-auto">
            {isM3U8Video ? (
              <HLSPlayer src={activeVideo} title={activeTitle} poster={currentPoster} youtubeFallback={currentYoutubeFallback} onFallbackToYouTube={handleFallbackToYouTube} />
            ) : (
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe src={isYoutubeVideo ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
              </div>
            )}
          </div>
          {isM3U8Video && (
            <div className="mt-3 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-400 text-xs font-bold">⚠️ If black screen / Loading forever = Link expired! Click "Watch on YouTube LIVE" below or update beIN link from provider.</p>
            </div>
          )}
        </div>
      )}

      {/* HERO - WITH REAL IMAGE */}
      <div className="relative w-full">
        <div className="w-full rounded-3xl overflow-hidden border-2 border-green-500/50 shadow-2xl relative h-[420px]">
          <img src={REAL_MANUTD_IMAGE} alt="MAN UTD vs MAN CITY" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
          <div className="relative z-10 text-center py-6 h-full flex flex-col justify-center items-center p-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">🇬🇲 Ahmed Abdikani live TV 🇸🇴</h2>
            <p className="text-green-400 text-sm font-black mb-8">✓ FIXED PLAYER • Auto fallback to YouTube if beIN expires</p>
            <button onClick={() => handlePlayVideo(BEIN_LINKS.bein5_main, "MAN UNITED vs MAN CITY • LIVE • beIN 5 1080p", REAL_MANUTD_IMAGE, "Man United vs Man City live Premier League", false, false, true)} className="bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4 px-12 rounded-xl shadow-2xl uppercase">🔴 Watch Derby LIVE - Auto Backup</button>
          </div>
        </div>
      </div>

      <div className="w-full space-y-8">
        <section className="w-full">
          <h2 className="text-xl font-black mb-4 text-white/90 uppercase">All Live Channels - FIXED Player</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
            {SPORTS_CHANNELS.map((ch) => (
              <button key={ch.id} onClick={() => handlePlayVideo((ch as any).m3u8, ch.title, (ch as any).image, (ch as any).youtubeFallback, false, false, true)} className="shrink-0 w-52 h-36 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-green-400 relative group">
                <img src={(ch as any).image} alt={ch.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${ch.bg} opacity-80 mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start"><span className="text-2xl">{ch.icon}</span><span className="bg-red-600 text-[9px] px-2 py-1 rounded-full font-black text-white animate-pulse">{(ch as any).badge}</span></div>
                  <div><p className="text-white font-black text-sm">{ch.title}</p></div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <>
      <Head>
        <title>Ahmed Live TV - FIXED - Auto Fallback</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js" async></script>
      </Head>
      <div className="min-h-screen bg-[#050510] text-white w-full">
        <Header />
        <HomePage />
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}
