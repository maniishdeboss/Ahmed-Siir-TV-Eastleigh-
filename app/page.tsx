'use client'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'

// --- YOUR REAL IMAGES ---
const NEW_IMAGE_8057919 = "https://d2egosedh0nm8l.cloudfront.net/images/channel-links/8057919/image/7cbb6c4d-3cd3-4f1e-9645-8a383b307a05";
const NEW_IMAGE_8043772 = "https://d2egosedh0nm8l.cloudfront.net/images/channel-links/8043772/image/96cba5ea-6378-4942-a8d3-27c16ab7f646";
const NEW_IMAGE_8056129 = "https://d2egosedh0nm8l.cloudfront.net/images/channel-links/8056129/image/d3bd750c-a6dc-414e-8cce-d5e98cb33e5b";

// --- YOUR REAL LIVE M3U8 YOU FOUND - SPORTY 8805 ---
const SPORTY_LIVE_M3U8 = "https://adad4ee0-ke-signed.sporty.com/8805/index_5.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9hZGFkNGVlMC1rZS1zaWduZWQuc3BvcnR5LmNvbS8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzg5NTkyODY1fX19XX0_&Signature=A2JcatvgV0mNoO03ScCGjrngeUK-X5riHL422fcqppzMBiol~Qv~bRGZGu8P-a2zlePG92EqsYze1giWhF2tJ9Cam5c7O4woh95kSZsiEp6FoZSwtBqaUMRO5sxrpDkletUOAkjELK6B~V6VKQce1i8sv3a4G6A07svSeDrLmtldscJ9phd5rVvpYdqne2wWC4t1eJoiexBj5LkkE4I3ZK5RtuJG6bpwcJYxnuUVTQoBImqUeql6S~-ot~kBvG2okiB-JK0ju2uymIoRmwet98QffeKi7T2TFQX~8SsQkcs8JPRS5z-5wHUJBTXNPiuJ-thxVd8Ac6rxZBLxwN~-hg__&Key-Pair-Id=K2L5LXWMJS3T7Q";

const BEIN_LINKS = {
  bein1: SPORTY_LIVE_M3U8,
  bein2: SPORTY_LIVE_M3U8,
  bein3: SPORTY_LIVE_M3U8,
  bein4: SPORTY_LIVE_M3U8,
  bein5: SPORTY_LIVE_M3U8,
  bein6: SPORTY_LIVE_M3U8,
};

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026 - LIVE 8805", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", m3u8: SPORTY_LIVE_M3U8, image: NEW_IMAGE_8057919, badge: "LIVE • 8805", youtubeFallback: "FIFA World Cup live" },
  { id: 11, title: "Sports Live 8805", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", m3u8: SPORTY_LIVE_M3U8, image: NEW_IMAGE_8043772, badge: "LIVE • SPORTY" },
  { id: 3, title: "Premier League LIVE", bg: "from-emerald-600 to-green-800", icon: "⚽", flag: "🇬🇧", m3u8: SPORTY_LIVE_M3U8, image: NEW_IMAGE_8057919, badge: "LIVE • DERBY", youtubeFallback: "Man United vs Man City live Premier League" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", m3u8: SPORTY_LIVE_M3U8, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400", badge: "LIVE" },
  { id: 5, title: "Wildlife Live", bg: "from-green-600 to-lime-800", icon: "🦁", flag: "🌿", youtube: "MiQe9ob9aDc", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400" },
];

const Header = () => (
  <header className="p-5 flex items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50 shadow-xl w-full px-6">
    <h1 className="text-3xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full ml-2">SPORTY 8805 LIVE</span></h1>
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

const HLSPlayer = ({ src, title, poster, youtubeFallback, onFallback }: { src: string; title: string; poster?: string; youtubeFallback?: string; onFallback?: (q: string) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setIsLoading(true); setHasError(false); setErrorMsg("");

    const handleError = (msg?: string) => { 
      console.log("HLS Error:", msg);
      setIsLoading(false); 
      setHasError(true); 
      setErrorMsg(msg || "CORS or Token expired");
    };

    // Try native HLS first (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.crossOrigin = "anonymous";
      video.addEventListener('loadedmetadata', () => setIsLoading(false));
      video.addEventListener('error', () => handleError("Native player failed"));
      video.play().catch(()=>{});
    } else {
      // Use hls.js with CORS fix
      const loadHls = () => {
        const Hls = (window as any).Hls;
        if (!Hls) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.7/dist/hls.min.js';
          script.onload = loadHls;
          script.onerror = () => handleError("Failed to load hls.js");
          document.head.appendChild(script);
          return;
        }
        if (!Hls.isSupported()) { handleError("HLS not supported"); return; }
        const hls = new Hls({ 
          enableWorker: true,
          xhrSetup: function(xhr: any, url: string) {
            xhr.withCredentials = false;
          }
        });
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => { 
          setIsLoading(false); 
          video.play().catch((e)=> console.log("Autoplay blocked", e)); 
        });
        hls.on(Hls.Events.ERROR, (event: any, data: any) => { 
          console.log("HLS Error Data:", data);
          if (data.fatal) {
            if (data.type === 'networkError') {
              setErrorMsg("Network/CORS - Sporty blocks embed. Use YouTube fallback.");
            }
            handleError(data.details);
          }
        });
      };
      loadHls();
    }
  }, [src]);

  if (hasError) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-xl flex flex-col items-center justify-center p-6 text-center border border-red-500/30 overflow-hidden">
        <img src={poster || NEW_IMAGE_8057919} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Poster" />
        <div className="relative z-10">
          <div className="text-4xl mb-2">⚠️</div>
          <h3 className="text-white font-black text-sm mb-1">Stream Error - CORS Blocked!</h3>
          <p className="text-white/60 text-[11px] mb-1">SportyTV blocks embed on other domains.</p>
          <p className="text-yellow-400 text-[10px] mb-3">{errorMsg}</p>
          <div className="flex gap-2 justify-center">
            <button onClick={() => window.location.reload()} className="bg-white/10 px-4 py-2 rounded-full font-bold text-xs">🔄 Retry</button>
            <button onClick={() => onFallback && youtubeFallback && onFallback(youtubeFallback)} className="bg-red-600 px-4 py-2 rounded-full font-bold text-xs">🔴 Watch on YouTube LIVE</button>
          </div>
          <p className="text-white/30 text-[9px] mt-3">Tip: For permanent fix, host your own M3U8 on YOUR CloudFront or ask Sporty for official embed API</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden rounded-xl group">
      {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-black z-20"><div className="text-white font-bold animate-pulse text-sm">Loading {title} - SPORTY 8805 LIVE...</div></div>}
      <video ref={videoRef} controls autoPlay playsInline poster={poster || NEW_IMAGE_8057919} className="w-full h-full" crossOrigin="anonymous" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 pointer-events-none">
        <div className="flex justify-between items-center">
          <div className="bg-black/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white font-black text-[10px]">AHMED LIVE TV - SPORTY 8805 LIVE</span>
          </div>
          <div className="bg-green-600 px-2 py-0.5 rounded-full text-white font-black text-[9px]">LIVE - HD</div>
        </div>
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
  const [currentPoster, setCurrentPoster] = useState(NEW_IMAGE_8057919);
  const [currentFallback, setCurrentFallback] = useState("Man United vs Man City live");

  const handleFallbackToYouTube = async (query: string) => { setSearchQuery(query); handleYouTubeSearchWithQuery(query); };
  
  const handlePlayVideo = (url: string, title: string, posterOrYoutube?: string | boolean, maybeYoutubeFallback?: string, isYoutube: boolean = true, isChannel: boolean = false, isM3U8: boolean = false) => {
    let poster: string | undefined; let youtubeFallback: string | undefined; let _isYoutube = isYoutube; let _isChannel = isChannel; let _isM3U8 = isM3U8;
    if (typeof posterOrYoutube === 'string') { poster = posterOrYoutube; youtubeFallback = maybeYoutubeFallback; } else if (typeof posterOrYoutube === 'boolean') { _isYoutube = posterOrYoutube; _isChannel = maybeYoutubeFallback as any as boolean; }
    if (poster) setCurrentPoster(poster); if (youtubeFallback) setCurrentFallback(youtubeFallback);
    if (_isM3U8 || url.includes('.m3u8') || url.includes('cloudfront.net') || url.includes('sporty.com')) { 
      setActiveVideo(url); setActiveTitle(title); setIsYoutubeVideo(false); setIsM3U8Video(true); setShowResults(false); 
      window.scrollTo({ top: 0, behavior: 'smooth' }); return; 
    }
    setActiveVideo(url); setActiveTitle(title); setIsYoutubeVideo(_isYoutube); setIsM3U8Video(false); setShowResults(false); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleYouTubeSearchWithQuery = async (query: string) => {
    if (!query.trim()) return; setIsSearching(true); setShowResults(true); setIsM3U8Video(false); setIsYoutubeVideo(true);
    try {
      const API_KEY = "AIzaSyAUIkNgNCG9LVJnyG1ohnTxNYwWMpoaiK0";
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(query + " live")}&type=video&eventType=live&key=${API_KEY}`);
      const data = await response.json(); let items = data.items;
      if (!items || items.length === 0) { 
        const r2 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`); 
        const d2 = await r2.json(); items = d2.items; 
      }
      if (items) { 
        setActiveVideo(items[0].id.videoId); setActiveTitle(items[0].snippet.title); 
        setSearchResults(items.map((item: any) => ({ id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.medium.url, channel: item.snippet.channelTitle }))); 
      }
    } catch (e) { console.error(e); } finally { setIsSearching(false); }
  };

  const handleYouTubeSearch = () => handleYouTubeSearchWithQuery(searchQuery);

  return (
    <main className="p-6 pb-28 w-full px-4 sm:px-8 relative space-y-8">
      <div className="bg-[#111122] rounded-2xl p-4 border border-blue-500/30 shadow-xl w-full">
        <div className="flex gap-3">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()} placeholder="Search YouTube - movies, music, live..." className="flex-1 bg-[#0a0a1a] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-base" />
          <button onClick={handleYouTubeSearch} disabled={isSearching} className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg">{isSearching ? "⏳" : "🔍"}</button>
        </div>
      </div>

      {showResults && <div className="bg-[#111122] rounded-3xl p-5 border border-red-500/30 shadow-2xl w-full"><div className="flex justify-between items-center mb-4"><h3 className="text-xl font-bold text-white">Results: {searchQuery}</h3><button onClick={() => setShowResults(false)} className="text-white/60 hover:text-white text-3xl">×</button></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">{searchResults.map((video) => (<button key={video.id} onClick={() => (handlePlayVideo as any)(video.id, video.title, true)} className="flex gap-4 bg-[#0a0a1a] p-4 rounded-xl border border-white/5 hover:bg-[#1a1a2a] text-left"><img src={video.thumbnail} alt={video.title} className="w-36 h-24 object-cover rounded-lg" /><div className="flex-1"><p className="text-white font-bold text-sm line-clamp-2">{video.title}</p><p className="text-white/50 text-xs mt-1.5">{video.channel}</p></div></button>))}</div></div>}

      {activeVideo && <div className="bg-[#111122] rounded-3xl p-5 border border-green-500/50 shadow-2xl w-full"><div className="flex justify-between items-center mb-4"><div className="flex items-center gap-2"><span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse font-bold">LIVE</span><span className="bg-green-600 text-xs px-2 py-1 rounded-full font-bold">SPORTY 8805</span><p className="text-base font-bold text-white line-clamp-1">{activeTitle}</p></div><button onClick={() => setActiveVideo(null)} className="text-white/60 hover:text-white text-4xl leading-none">×</button></div><div className="aspect-video bg-black rounded-xl overflow-hidden w-full max-w-6xl mx-auto">{isM3U8Video ? <HLSPlayer src={activeVideo} title={activeTitle} poster={currentPoster} youtubeFallback={currentFallback} onFallback={handleFallbackToYouTube} /> : <iframe src={isYoutubeVideo ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />}</div></div>}

      <div className="relative w-full">
        <div className="w-full rounded-3xl overflow-hidden border-2 border-green-500/50 shadow-2xl relative h-[420px]">
          <img src={NEW_IMAGE_8057919} alt="SPORTY LIVE NEW" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>
          <div className="relative z-10 text-center py-6 h-full flex flex-col justify-center items-center p-6">
            <div className="text-5xl mb-3">📺</div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight drop-shadow-xl">Isli Sports Live - SPORTY 8805</h2>
            <p className="text-white/90 text-base sm:text-lg mb-2 max-w-2xl mx-auto font-bold drop-shadow">Watch Live Sports HD 1080p - Sporty CloudFront - No Betting</p>
            <p className="text-green-400 text-sm font-black mb-8 drop-shadow">NEW: SPORTY 8805 index_5.m3u8 - LIVE NOW - Image 8057919</p>
            <button onClick={() => (handlePlayVideo as any)(SPORTY_LIVE_M3U8, "SPORTY 8805 LIVE - REAL M3U8", NEW_IMAGE_8057919, "Man United vs Man City live Premier League", false, false, true)} className="inline-block bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider border-2 border-white/20">🔴 CLICK HERE TO WATCH SPORTY 8805 LIVE</button>
          </div>
        </div>
      </div>

      <div className="w-full space-y-8">
        <section className="w-full">
          <h2 className="text-xl font-black mb-4 text-white/90 tracking-wide uppercase">ALL LIVE CHANNELS - SPORTY 8805 CLOUDFRONT</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
            {SPORTS_CHANNELS.map((ch) => (
              <button key={ch.id} onClick={() => { if ((ch as any).m3u8) { (handlePlayVideo as any)((ch as any).m3u8, ch.title, (ch as any).image, (ch as any).youtubeFallback, false, false, true); } else if ((ch as any).youtube) { (handlePlayVideo as any)((ch as any).youtube, ch.title, true); } }} className={`shrink-0 w-52 h-36 bg-gradient-to-br ${ch.bg} rounded-2xl p-5 flex flex-col justify-between border-2 border-white/10 hover:border-green-400 transition-all relative overflow-hidden group`}>
                <img src={(ch as any).image} alt={ch.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60" />
                <div className={`absolute inset-0 bg-gradient-to-br ${ch.bg} opacity-80`}></div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start"><span className="text-2xl">{ch.icon}</span>{(ch as any).badge && <span className="bg-red-600 text-[9px] px-2 py-1 rounded-full font-black text-white animate-pulse">{(ch as any).badge}</span>}</div>
                  <div><p className="text-white font-black text-sm drop-shadow">{ch.title}</p><p className="text-white/80 text-[10px]">{(ch as any).flag} SPORTY 8805</p></div>
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
        <title>Ahmed Live TV - SPORTY 8805 LIVE - NEW IMAGE 8057919</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-[#050510] text-white w-full">
        <Header />
        <HomePage />
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <style jsx global>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`}</style>
      </div>
    </>
  );
}
