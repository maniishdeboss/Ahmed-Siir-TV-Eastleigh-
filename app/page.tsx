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
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-600 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-600 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-700 to-black/40" },
  { country: "Global", flag: "🌍", status: "Live", bg: "from-purple-600 to-indigo-700" },
];

const FOOTBALL_LEAGUES = [
  { id: 1, name: "FIFA World Cup", logo: "🏆", bg: "bg-gradient-to-r from-blue-600 to-blue-800" },
  { id: 2, name: "Int. Friendly", logo: "⚽", bg: "bg-gradient-to-r from-slate-700 to-slate-900" },
  { id: 3, name: "Premier League", logo: "🦁", bg: "bg-gradient-to-r from-purple-700 to-purple-900" },
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
  <header className="px-4 py-3 flex items-center justify-between bg-[#06060f] border-b border-white/5 sticky top-0 z-50 w-full">
    <h1 className="text-xl font-black tracking-tighter text-white">
      AHMED <span className="text-blue-500">LIVE</span> TV
    </h1>
    <button className="bg-[#b45309]/20 text-[#f59e0b] w-9 h-9 rounded-full flex items-center justify-center text-lg">
      🔔
    </button>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a1a] border-t border-white/5 py-3 flex justify-around items-center z-50">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-[10px] font-bold uppercase tracking-widest ${activeTab === tab ? 'text-blue-500' : 'text-white/40'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

// --- HOME PAGE TAB ---
const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`
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
    if (!phoneNumber.trim()) return alert("Please enter phone number!");
    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage ? currentPackage.price : 20;
    window.open(`https://tinypesa.com/ahmeddatadealskenya?amount=${price}&phone=${encodeURIComponent(phoneNumber)}`, '_blank');
  };

  return (
    <main className="p-4 pb-24 w-full flex flex-col gap-6">
      
      {/* VIDEO VIEWPORT (HERO) */}
      <div className="w-full">
        <div className="w-full bg-[#111122] rounded-2xl overflow-hidden aspect-[16/10] relative flex items-center justify-center border border-white/5 shadow-md">
          {activeVideo ? (
            <iframe
              src={isYoutubeVideo ? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-4">
              <span className="text-4xl block mb-2">⚽</span>
              <p className="text-xs text-white/50 font-medium">Select a stream or search below to play</p>
            </div>
          )}
        </div>
        {activeVideo && (
          <p className="text-[11px] font-bold text-blue-400 mt-2 px-1 truncate">Playing: {activeTitle}</p>
        )}
      </div>

      {/* SEARCH BAR */}
      <div className="bg-[#111122] rounded-xl p-2.5 border border-white/5 shadow-md flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()}
          placeholder="Search YouTube matches, music..."
          className="flex-1 bg-[#06060f] text-white px-3 py-2.5 rounded-lg border border-white/10 focus:outline-none text-xs"
        />
        <button
          onClick={handleYouTubeSearch}
          disabled={isSearching}
          className="bg-red-600 active:bg-red-700 text-white px-4 rounded-lg font-bold text-sm"
        >
          {isSearching ? "⏳" : "🔍"}
        </button>
      </div>

      {/* SEARCH RESULTS */}
      {showResults && (
        <div className="bg-[#111122] rounded-xl p-3 border border-white/5 max-h-60 overflow-y-auto space-y-2">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xs font-bold text-white">Results</h3>
            <button onClick={() => setShowResults(false)} className="text-white/60 text-lg">×</button>
          </div>
          {searchResults.map((video) => (
            <button
              key={video.id}
              onClick={() => handlePlayVideo(video.id, video.title, true)}
              className="w-full flex gap-3 bg-[#06060f] p-2 rounded-lg border border-white/5 text-left"
            >
              <img src={video.thumbnail} className="w-20 h-14 object-cover rounded" alt="" />
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-xs line-clamp-2">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* FEATURED SPORTS (2-COLUMN GRID) */}
      <section>
        <h2 className="text-white font-bold text-base mb-3 tracking-tight">Featured Sports</h2>
        <div className="grid grid-cols-2 gap-3">
          {SPORTS_CHANNELS.slice(0, 2).map((ch) => (
            <button
              key={ch.id}
              onClick={() => ch.youtube ? handlePlayVideo(ch.youtube, ch.title, true, ch.isYoutubeChannel) : ch.siirUrl ? window.open(ch.siirUrl, '_blank') : null}
              className="bg-[#2b5deb] rounded-2xl p-4 h-32 flex flex-col justify-between text-left shadow-md"
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-2xl">{ch.icon}</span>
                <span className="text-lg">{ch.flag}</span>
              </div>
              <span className="text-white font-bold text-[13px] leading-tight truncate-2-lines">{ch.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* WATCH BY COUNTRY (2-COLUMN GRID) */}
      <section>
        <h2 className="text-white font-bold text-base mb-3 tracking-tight">Watch By Country</h2>
        <div className="grid grid-cols-2 gap-3">
          {WATCH_BY_COUNTRY.map((item, i) => (
            <div key={i} className={`bg-gradient-to-br ${item.bg} rounded-2xl p-3 flex items-center gap-2.5 shadow-md`}>
              <div className="bg-black/20 w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0">{item.flag}</div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-white font-bold text-xs truncate">{item.country}</p>
                <p className="text-white/60 text-[8px] tracking-wider uppercase mt-0.5">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALL LIVE STREAMS (2-COLUMN GRID FOR PHONE) */}
      <section>
        <h2 className="text-white font-bold text-base mb-3 tracking-tight">All Live Channels</h2>
        <div className="grid grid-cols-2 gap-3">
          {SPORTS_CHANNELS.slice(2).map((ch) => (
            <button
              key={ch.id}
              onClick={() => ch.youtube ? handlePlayVideo(ch.youtube, ch.title, true, ch.isYoutubeChannel) : ch.siirUrl ? window.open(ch.siirUrl, '_blank') : null}
              className={`bg-gradient-to-br ${ch.bg} rounded-xl p-3.5 h-24 flex flex-col justify-between text-left border border-white/5 shadow-md`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-xl">{ch.icon}</span>
                <span className="text-[9px] bg-red-600 px-1.5 py-0.5 rounded-full font-black text-white">LIVE</span>
              </div>
              <h3 className="font-bold text-xs text-white truncate w-full">{ch.title}</h3>
            </button>
          ))}
        </div>
      </section>

      {/* AHMED DATA DEALS KENYA */}
      <section className="p-4 rounded-2xl bg-[#0c1a12] border border-green-500/20 shadow-md">
        <h2 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-3">Ahmed Data Deals Kenya</h2>
        <form onSubmit={handleBuyData} className="flex flex-col gap-3">
          <div className="max-h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
            {DATA_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkg(pkg.id)}
                className={`p-2.5 rounded-xl border flex justify-between items-center ${selectedPkg === pkg.id ? 'bg-green-950/50 border-green-400' : 'bg-black/30 border-white/5'}`}
              >
                <div className="text-left min-w-0 flex-1">
                  <p className="text-white font-bold text-xs truncate">{pkg.name}</p>
                  <p className="text-[9px] text-white/40">{pkg.desc}</p>
                </div>
                <span className="text-white font-bold text-xs shrink-0 pl-2">KSh {pkg.price}</span>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Safaricom Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full bg-black/40 text-white p-3 rounded-xl border border-white/10 text-xs focus:outline-none"
          />
          <button type="submit" className="w-full bg-green-500 text-black font-bold py-3 rounded-xl text-xs uppercase tracking-wider">
            Buy Selected Bundle
          </button>
        </form>
      </section>

      {/* FILMS (2-COLUMN GRID FOR PHONE) */}
      <section className="p-3 rounded-2xl bg-[#111122] border border-white/5">
        <h2 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-3">Films</h2>
        <div className="grid grid-cols-2 gap-3">
          {ALL_FILMS.map((film) => (
            <button
              key={film.id}
              onClick={() => film.youtube ? handlePlayVideo(film.youtube, film.title, true) : film.siirUrl ? window.open(film.siirUrl, '_blank') : null}
              className="relative h-36 rounded-xl overflow-hidden text-left border border-white/5 shadow-md"
            >
              <img src={film.image} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative p-2.5 h-full flex flex-col justify-between z-10">
                <span className="bg-black/60 text-[9px] px-1.5 py-0.5 rounded-full self-end text-white">⭐ {film.rating}</span>
                <div>
                  <p className="text-white font-bold text-xs truncate">{film.title}</p>
                  <p className="text-white/40 text-[9px]">{film.year}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

    </main>
  );
};

// --- LIVE TAB ---
const LivePage = () => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  const [activeStream, setActiveStream] = useState<string | null>(null);

  if (selectedLeague) {
    const matches = MATCHES_DATA[selectedLeague] || [];
    return (
      <div className="p-4 pb-24">
        <button onClick={() => {setSelectedLeague(null); setActiveStream(null);}} className="text-white font-bold text-xs mb-4">← Back</button>
        {activeStream && (
          <div className="bg-black aspect-video rounded-xl overflow-hidden mb-4 border border-white/5">
            <iframe src={activeStream} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
          </div>
        )}
        <div className="space-y-2">
          {matches.map((match) => (
            <button
              key={match.id}
              onClick={() => (!match.isYoutube && match.link.includes('siiiiir.tv')) ? window.open(match.link, '_blank') : setActiveStream(match.link)}
              className="w-full p-3.5 bg-[#111122] border border-white/5 rounded-xl flex justify-between items-center"
            >
              <div className="text-left min-w-0 flex-1 pr-2">
                <p className="text-white font-bold text-xs truncate">{match.team1} vs {match.team2}</p>
                <p className="text-[10px] text-white/50 mt-0.5">{match.time}</p>
              </div>
              <span className="text-[10px] text-red-500 font-bold shrink-0">{match.quality}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 pb-24 flex flex-col gap-4">
      <h2 className="text-white font-bold text-base tracking-tight">Leagues</h2>
      <div className="grid grid-cols-2 gap-3">
        {FOOTBALL_LEAGUES.map((league) => (
          <button
            key={league.id}
            onClick={() => setSelectedLeague(league.id)}
            className={`${league.bg} p-4 h-28 rounded-xl flex flex-col items-center justify-center border border-white/5 shadow-md`}
          >
            <span className="text-3xl mb-1">{league.logo}</span>
            <p className="text-white font-bold text-xs text-center leading-tight">{league.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans flex flex-col w-full overflow-x-hidden select-none">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      
      <Header />
      
      <div className="w-full flex-1">
        {activeTab === 'Home' && <HomePage />}
        {activeTab === 'Live' && <LivePage />}
        {activeTab === 'Browse' && <div className="p-6 text-center text-white/40 text-xs">Categories Coming Soon</div>}
        {activeTab === 'Profile' && (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-black">A</div>
            <p className="text-gray-400 text-sm">Ahmed Abdikani Mohamed</p>
          </div>
        )}
      </div>
      
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <style jsx global>{`
        body { background-color: #06060f; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 197, 94, 0.3); border-radius: 4px; }
      `}</style>
    </div>
  );
}
