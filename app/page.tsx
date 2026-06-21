'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", youtube: "GDieIfkT1FQ" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍", youtube: null },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", youtube: null },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", youtube: "2A_OLvCo_q8" },
  { id: 5, title: "Wildlife Live", bg: "from-green-600 to-lime-800", icon: "🦁", flag: "🌿", youtube: "MiQe9ob9aDc" },
  { id: 6, title: "Al Jazeera", bg: "from-teal-600 to-cyan-800", icon: "📰", flag: "🇶🇦", youtube: "gCNeDWCI0vo" },
  { id: 7, title: "Movies Live", bg: "from-pink-600 to-rose-800", icon: "🎥", flag: "🎞️", youtube: "89c4owSHL2E" },
  { id: 8, title: "Highlights", bg: "from-yellow-600 to-orange-700", icon: "🎬", flag: "📺", youtube: "dQw4w9WgXcQ" },
  { id: 9, title: "Kenya Citizens TV", bg: "from-red-600 to-black", icon: "🇰🇪", flag: "🇰🇪", youtube: "1YzlFiqmHDY" },
  { id: 10, title: "Somali TV", bg: "from-blue-500 to-cyan-600", icon: "🇸🇴", flag: "🇸🇴", youtube: "-qDzZEXIJdk" },
  { id: 11, title: "Sports Live Highlights", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", youtube: "kJQP7kiw5Fk" },
];

const FEATURED_TV = [
  { title: "World cup - Live", url: "https://www.siiiiir.tv/", bg: "from-blue-900 to-black", isYoutube: false },
  { title: "BeIN Sports", url: "https://www.siiiiir.tv/", bg: "from-green-900 to-black", isYoutube: false },
];

const ALL_FILMS = [
  { id: 1, title: "Jawan", year: "2023", rating: "8.1", type: "Hindi", bg: "from-orange-600 to-red-800", youtube: "y7tv1y_Q_Q0", image: "/mnt/data/photo8213703842848463668.webp" },
  { id: 2, title: "Pathaan", year: "2023", rating: "7.2", type: "Hindi", bg: "from-yellow-600 to-orange-700", youtube: "vqu4z34wENw", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 3, title: "Dangal", year: "2016", rating: "8.3", type: "Hindi", bg: "from-blue-600 to-indigo-800", youtube: "x_7YlGv9u1g", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 4, title: "3 Idiots", year: "2009", rating: "8.4", type: "Hindi", bg: "from-green-600 to-teal-800", youtube: "K0eDlFX9GMc", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400" },
  { id: 5, title: "PK", year: "2014", rating: "8.1", type: "Hindi", bg: "from-purple-600 to-pink-800", youtube: "82ZEDGPCkT8", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400" },
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
    { id: 1, team1: "Spain", team2: "Saudi Arabia", flag1: "🇪🇸", flag2: "🇸🇦", time: "LIVE NOW", quality: "HD", link: "https://www.siiiiir.tv/", isYoutube: false },
    { id: 2, team1: "Germany", team2: "ivory coast", flag1: "🇩🇪", flag2: "🇨🇮", time: "Finished 2:1", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
  ],
  5: [
    { id: 1, team1: "Barcelona", team2: "Real Madrid", flag1: "🔵", flag2: "⚪", time: "Sunday 22:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
  ],
};

// --- COMPONENTS ---
const Header = () => (
  <header className="p-4 flex justify-between items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-1 z-50 mt-3 rounded-b-2xl mx-2 shadow-xl">
    <h1 className="text-2xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
  </header>
);

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 w-full bg-[#0a0a1a]/95 border-t border-white/10 p-4 flex justify-around backdrop-blur-xl z-50 shadow-2xl rounded-t-3xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab? 'opacity-100 scale-110 text-blue-500' : 'opacity-60'}`}
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

  const handlePlayVideo = (url: string, title: string, isYoutube: boolean = true) => {
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

  return (
    <main className="p-4 pb-24">
      <div className="mb-6 bg-[#111122] rounded-2xl p-3 border border-blue-500/30 shadow-xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ka raadi YouTube..."
            className="flex-1 bg-[#0a0a1a] text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-sm"
          />
          <button onClick={handleYouTubeSearch} className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold">🔍</button>
        </div>
      </div>
      
      {activeVideo && (
        <div className="mb-6 bg-[#111122] rounded-3xl p-4 border border-blue-500/30 shadow-2xl">
          <button onClick={() => setActiveVideo(null)} className="text-white mb-2">× Xir</button>
          <div className="aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              src={isYoutubeVideo? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl p-8 mb-6 border border-blue-500/30 text-center">
        <h2 className="text-2xl font-black text-white mb-4">Ahmed Abdikani Live TV 🇸🇴</h2>
        <a href="https://www.siiiiir.tv/" target="_blank" className="bg-red-600 text-white font-bold py-3 px-8 rounded-xl block">▶ DAARO LIVE HADA</a>
      </div>
    </main>
  );
};

const LivePage = () => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);

  const handleMatchClick = (match: any) => {
    if (match.isYoutube) {
      // Halkan waxaad ku dari kartaa logic-ga play-ga youtube-ka
    } else {
      window.open(match.link, '_blank');
    }
  };

  if (selectedLeague) {
    const matches = MATCHES_DATA[selectedLeague] || [];
    return (
      <section className="bg-[#0a0a1f] min-h-screen pb-24 p-4">
        <button onClick={() => setSelectedLeague(null)} className="text-white mb-4">← Dib u noqo</button>
        {matches.map((match) => (
          <button key={match.id} onClick={() => handleMatchClick(match)} className="w-full bg-[#111122] p-4 mb-2 rounded-lg border border-white/5 text-left">
            <p className="font-bold text-white">{match.team1} VS {match.team2}</p>
            <p className="text-xs text-red-500">{match.time}</p>
          </button>
        ))}
      </section>
    );
  }

  return (
    <section className="bg-[#0a0a1f] min-h-screen pb-24 p-4">
      {FOOTBALL_LEAGUES.map((league) => (
        <button key={league.id} onClick={() => setSelectedLeague(league.id)} className={`${league.bg} w-full mb-2 p-6 rounded-lg`}>
          <p className="font-bold text-white text-lg">{league.name}</p>
        </button>
      ))}
    </section>
  );
};

const BrowsePage = () => <section className="p-4 text-center"><h2>Browse</h2></section>;
const ProfilePage = () => <section className="p-4 text-center"><h2>Profile</h2></section>;

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const renderPage = () => {
    switch (activeTab) {
      case 'Home': return <HomePage />;
      case 'Live': return <LivePage />;
      case 'Browse': return <BrowsePage />;
      case 'Profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-[#06060f] min-h-screen text-white font-sans">
      <Header />
      {renderPage()}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
