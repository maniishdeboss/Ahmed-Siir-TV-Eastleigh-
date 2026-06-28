'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const FEATURED_SPORTS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "bg-[#2b5deb]", icon: "🏆", flag: "🇸🇴", link: "https://www.siiiiir.tv/" },
  { id: 2, title: "Champions League", bg: "bg-[#6338d9]", icon: "⚽", flag: "🌍", link: "https://youtube.com/@supersport?si=Bq3DEZJtL0RLyoD2" },
];

const WATCH_BY_COUNTRY = [
  { id: 1, country: "Somalia", flag: "🇸🇴", status: "LIVE", bg: "bg-[#2b5deb]" },
  { id: 2, country: "Ogadenia", flag: "🇬🇲", status: "LIVE", bg: "bg-gradient-to-r from-[#dc2626] to-[#16a34a]" },
  { id: 3, country: "Kenya", flag: "🇰🇪", status: "AVAILABLE", bg: "bg-gradient-to-r from-[#065f2a] to-[#022c11]" },
  { id: 4, country: "Global", flag: "🌍", status: "LIVE", bg: "bg-[#6338d9]" },
];

const SPORTS_CHANNELS = [
  { id: 11, title: "Sports Live Highlights", bg: "from-indigo-600 to-purple-800", icon: "⚡", youtube: "anFb5YF3nZk" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", youtube: null, siirUrl: "https://www.siiiiir.tv/" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", youtube: "2A_OLvCo_q8" },
  { id: 5, title: "Wildlife Live", bg: "from-green-600 to-lime-800", icon: "🦁", youtube: "MiQe9ob9aDc" },
  { id: 6, title: "Al Jazeera", bg: "from-teal-600 to-cyan-800", icon: "📰", youtube: "gCNeDWCI0vo" },
];

const FOOTBALL_LEAGUES = [
  { id: 1, name: "FIFA World Cup", logo: "🏆", bg: "from-blue-600 to-blue-800" },
  { id: 3, name: "English Premier League", logo: "🦁", bg: "from-purple-700 to-purple-900" },
  { id: 5, name: "La Liga", logo: "🇪🇸", bg: "from-red-600 to-yellow-500" },
];

const MATCHES_DATA: Record<number, any[]> = {
  1: [
    { id: 1, team1: "Portugal", team2: "Uzbekistan", flag1: "🇵🇹", flag2: "🇺🇿", time: "LIVE NOW", quality: "HD", link: "https://www.siiiiir.tv/" },
    { id: 2, team1: "England", team2: "Ghana", flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", flag2: "🇬🇭", time: "LIVE NOW", quality: "HD", link: "https://www.siiiiir.tv/" },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD", link: "https://www.siiiiir.tv/" },
  ]
};

const DATA_PACKAGES = [
  { id: 1, name: "250MB Daily", price: 18, desc: "24 HOURS", badge: "Best Deal" },
  { id: 2, name: "250MB Daily", price: 20, desc: "24 HOURS", badge: null },
  { id: 3, name: "1GB Flash Data", price: 19, desc: "1 HOUR - TUNUKIWA", badge: "Tunukiwa" },
  { id: 4, name: "1.25GB Midnight", price: 50, desc: "TILL MIDNIGHT", badge: "Best Deal" },
  { id: 5, name: "1.5GB Heavy Bundle", price: 49, desc: "3 HOURS - TUNUKIWA", badge: "Tunukiwa" },
  { id: 6, name: "2GB Super Deal", price: 99, desc: "TILL MIDNIGHT - TUNUKIWA", badge: "Bingwa" },
];

const ALL_FILMS = [
  { id: 1, title: "Jawan", year: "2023", rating: "8.1", type: "Hindi", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400", youtube: "y7tv1y_Q_Q0" },
  { id: 2, title: "Pathaan", year: "2023", rating: "7.2", type: "Hindi", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400", youtube: "vqu4z34wENw" },
  { id: 3, title: "Dangal", year: "2016", rating: "8.3", type: "Hindi", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400", youtube: "x_7YlGv9u1g" },
  { id: 4, title: "3 Idiots", year: "2009", rating: "8.4", type: "Hindi", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400", youtube: "K0eDlFX9GMc" },
];

// --- COMPONENTS ---
const Header = () => (
  <header className="px-4 py-3 flex items-center justify-between bg-[#0b0b14] border-b border-white/5 sticky top-0 z-50 w-full">
    <h1 className="text-xl font-black tracking-tighter text-white">
      AHMED <span className="text-blue-500">LIVE</span> TV
    </h1>
    <button className="bg-[#b45309]/20 text-[#f59e0b] w-9 h-9 rounded-full flex items-center justify-center text-lg">
      🔔
    </button>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['HOME', 'LIVE', 'BROWSE', 'PROFILE'];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0f0f1b] border-t border-white/5 px-2 py-3.5 flex justify-around items-center z-50">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-[10px] font-bold tracking-widest ${activeTab === tab ? 'text-blue-500' : 'text-white/40'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

// --- HOME PAGE TAB ---
const HomePage = ({ onPlayVideo }: { onPlayVideo: (url: string, title: string, isYoutube?: boolean) => void }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);

  const handleBuyData = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return alert("Enter number");
    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage ? currentPackage.price : 20;
    window.open(`https://tinypesa.com/ahmeddatadealskenya?amount=${price}&phone=${encodeURIComponent(phoneNumber)}`, '_blank');
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* FEATURED SPORTS */}
      <section>
        <h2 className="text-white font-bold text-base mb-3">Featured Sports</h2>
        <div className="grid grid-cols-2 gap-3.5">
          {FEATURED_SPORTS.map((sport) => (
            <button
              key={sport.id}
              onClick={() => window.open(sport.link, '_blank')}
              className={`${sport.bg} rounded-2xl p-4 h-32 flex flex-col justify-between shadow-md`}
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-2xl">{sport.icon}</span>
                <span className="text-xl">{sport.flag}</span>
              </div>
              <span className="text-white font-bold text-xs text-left leading-tight">{sport.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* WATCH BY COUNTRY */}
      <section>
        <h2 className="text-white font-bold text-base mb-3">Watch By Country</h2>
        <div className="grid grid-cols-2 gap-3.5">
          {WATCH_BY_COUNTRY.map((item) => (
            <div key={item.id} className={`${item.bg} rounded-2xl p-3 flex items-center gap-2.5 shadow-md`}>
              <div className="bg-black/20 w-8 h-8 rounded-lg flex items-center justify-center text-base">{item.flag}</div>
              <div className="text-left min-w-0 flex-1">
                <p className="text-white font-bold text-xs truncate">{item.country}</p>
                <p className="text-white/60 text-[8px] tracking-wider uppercase mt-0.5">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DATA DEALS KENYA */}
      <section className="p-4 rounded-2xl bg-gradient-to-br from-[#0c1a12] to-[#040a06] border border-green-500/20 shadow-md">
        <h2 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-3">Ahmed Data Deals Kenya</h2>
        <form onSubmit={handleBuyData} className="flex flex-col gap-3">
          <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
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

      {/* FILMS */}
      <section className="p-4 rounded-2xl bg-[#111122] border border-white/5">
        <h2 className="text-orange-400 font-bold text-sm uppercase tracking-wide mb-3">Films</h2>
        <div className="grid grid-cols-2 gap-3">
          {ALL_FILMS.map((film) => (
            <button
              key={film.id}
              onClick={() => onPlayVideo(film.youtube, film.title, true)}
              className="relative h-36 rounded-xl overflow-hidden text-left"
            >
              <img src={film.image} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="relative p-2.5 h-full flex flex-col justify-between">
                <span className="bg-black/60 text-[9px] px-1.5 py-0.5 rounded-full self-end">⭐ {film.rating}</span>
                <div>
                  <p className="text-white font-bold text-xs truncate">{film.title}</p>
                  <p className="text-white/40 text-[9px]">{film.year}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- LIVE CHANNELS & LEAGUES TAB ---
const LivePage = ({ onPlayVideo }: { onPlayVideo: (url: string, title: string, isYoutube?: boolean) => void }) => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);

  if (selectedLeague) {
    const matches = MATCHES_DATA[selectedLeague] || [];
    return (
      <div className="p-4">
        <button onClick={() => setSelectedLeague(null)} className="text-white font-bold text-xs mb-4">← Back</button>
        <div className="space-y-3">
          {matches.map((match) => (
            <button
              key={match.id}
              onClick={() => window.open(match.link, '_blank')}
              className="w-full p-4 bg-[#111122] border border-white/5 rounded-xl flex justify-between items-center"
            >
              <div className="text-left">
                <p className="text-white font-bold text-xs">{match.team1} vs {match.team2}</p>
                <p className="text-[10px] text-white/50 mt-1">{match.time}</p>
              </div>
              <span className="text-xs text-red-500 font-bold">{match.quality}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-5">
      <section>
        <h2 className="text-white font-bold text-base mb-3">Live Streams</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {SPORTS_CHANNELS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => ch.youtube ? onPlayVideo(ch.youtube, ch.title) : window.open(ch.siirUrl, '_blank')}
              className={`shrink-0 w-32 h-20 bg-gradient-to-br ${ch.bg} rounded-xl p-3 flex flex-col justify-between`}
            >
              <span className="text-xl">{ch.icon}</span>
              <p className="text-white font-bold text-[11px] truncate w-full text-left">{ch.title}</p>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-white font-bold text-base mb-3">Leagues</h2>
        <div className="grid grid-cols-2 gap-3">
          {FOOTBALL_LEAGUES.map((league) => (
            <button
              key={league.id}
              onClick={() => setSelectedLeague(league.id)}
              className={`bg-gradient-to-br ${league.bg} p-4 h-28 rounded-xl flex flex-col items-center justify-center`}
            >
              <span className="text-2xl mb-1">{league.logo}</span>
              <p className="text-white font-bold text-xs text-center">{league.name}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- APP WRAPPER ---
export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState("");

  const handlePlayVideo = (url: string, title: string, isYoutube: boolean = true) => {
    setActiveVideo(url);
    setVideoTitle(title);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0b0b14] min-h-screen text-white font-sans flex flex-col w-full overflow-x-hidden pb-20 select-none">
      <Head>
        <title>Ahmed Live TV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      
      <Header />

      {/* TOP VIDEO PLAYER VIEWPORT FRAME */}
      <div className="w-full px-4 pt-4">
        <div className="w-full bg-[#161625] rounded-2xl overflow-hidden aspect-[16/10] relative flex items-center justify-center border border-white/5 shadow-inner">
          {activeVideo ? (
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-4">
              <span className="text-3xl block mb-1">📺</span>
              <p className="text-xs text-white/50 font-medium">Select a channel or film below to stream</p>
            </div>
          )}
        </div>
        {activeVideo && (
          <p className="text-xs font-bold text-blue-400 mt-2 px-1 truncate">Streaming: {videoTitle}</p>
        )}
      </div>

      {/* TAB CONTENT SPY */}
      <div className="w-full flex-1">
        {activeTab === 'HOME' && <HomePage onPlayVideo={handlePlayVideo} />}
        {activeTab === 'LIVE' && <LivePage onPlayVideo={handlePlayVideo} />}
        {activeTab === 'BROWSE' && <div className="p-6 text-center text-white/40 text-xs">Categories Coming Soon</div>}
        {activeTab === 'PROFILE' && <div className="p-6 text-center text-white/40 text-xs">Profile Dashboard</div>}
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
