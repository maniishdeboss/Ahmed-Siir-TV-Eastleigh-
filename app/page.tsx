'use client'
import { useState } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", youtube: "y7tv1y_Q_Q0" },
  { id: 11, title: "Sports Live Highlights", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", youtube: "vqu4z34wENw" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", youtube: "x_7YlGv9u1g" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", youtube: "K0eDlFX9GMc" },
  { id: 5, title: "Wildlife Live", bg: "from-green-600 to-lime-800", icon: "🦁", flag: "🌿", youtube: "MiQe9ob9aDc" },
  { id: 6, title: "Al Jazeera", bg: "from-teal-600 to-cyan-800", icon: "📰", flag: "🇶🇦", youtube: "gCNeDWCI0vo" },
  { id: 7, title: "Movies Live", bg: "from-pink-600 to-rose-800", icon: "🎥", flag: "🎞️", youtube: "89c4owSHL2E" },
  { id: 8, title: "Highlights", bg: "from-yellow-600 to-orange-700", icon: "🎬", flag: "📺", youtube: "dQw4w9WgXcQ" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍", youtube: "https://youtube.com/@supersport?si=Bq3DEZJtL0RLyoD2", isYoutubeChannel: true },
  { id: 9, title: "Kenya Citizens TV", bg: "from-red-600 to-black", icon: "🇰🇪", flag: "🇰🇪", youtube: "1YzlFiqmHDY" },
  { id: 10, title: "Somali TV", bg: "from-blue-500 to-cyan-600", icon: "🇸🇴", flag: "🇸🇴", youtube: "-qDzZEXIJdk" },
];

const ALL_FILMS = [
  { id: 1, title: "Jawan", year: "2023", rating: "8.1", type: "Hindi", bg: "from-orange-600 to-red-800", youtube: "y7tv1y_Q_Q0", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 2, title: "Pathaan", year: "2023", rating: "7.2", type: "Hindi", bg: "from-yellow-600 to-orange-700", youtube: "vqu4z34wENw", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 3, title: "Dangal", year: "2016", rating: "8.3", type: "Hindi", bg: "from-blue-600 to-indigo-800", youtube: "x_7YlGv9u1g", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 4, title: "3 Idiots", year: "2009", rating: "8.4", type: "Hindi", bg: "from-green-600 to-teal-800", youtube: "K0eDlFX9GMc", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400" },
  { id: 5, title: "PK", year: "2014", rating: "8.1", type: "Hindi", bg: "from-purple-600 to-pink-800", youtube: "82ZEDGPCkT8", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400" },
  { id: 22, title: "BeIN Sports", year: "2026", rating: "9.0", type: "Live Sports", bg: "from-slate-800 to-slate-950", youtube: "MiQe9ob9aDc", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
  { id: 6, title: "Bajrangi Bhaijaan", year: "2015", rating: "8.0", type: "Hindi", bg: "from-red-600 to-rose-800", youtube: "vyX4toD395U", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400" },
  { id: 7, title: "KGF Chapter 2", year: "2022", rating: "8.4", type: "Hindi", bg: "from-amber-600 to-yellow-800", youtube: "Qah9sSIXJqk", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400" },
  { id: 8, title: "RRR", year: "2022", rating: "7.8", type: "Hindi", bg: "from-cyan-600 to-blue-800", youtube: "NgBoMJy386M", image: "https://images.unsplash.com/photo-1594909122845-11baa9b7703b?w=400" },
  { id: 9, title: "Avengers: Endgame", year: "2019", rating: "8.4", type: "Hollywood", bg: "from-indigo-600 to-purple-900", youtube: "TcMBFSGVi1c", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400" },
  { id: 10, title: "Avatar", year: "2009", rating: "7.9", type: "Hollywood", bg: "from-sky-600 to-blue-900", youtube: "5PSNL1qE6VY", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400" },
];

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
export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Home');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  // States for Data Bundles
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);

  const handlePlayVideo = (url: string, title: string, isYoutube: boolean = true, isChannel: boolean = false) => {
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

  const handleBuyData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      alert("Fadlan geli lambarkaaga taleefanka!");
      return;
    }

    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage ? currentPackage.price : 20;

    let formattedPhone = phoneNumber.trim();
    if (formattedPhone.startsWith("0")) {
      formattedPhone = "254" + formattedPhone.substring(1);
    }

    setIsLoadingPayment(true);

    try {
      const response = await fetch("/api/stk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price,
          msisdn: formattedPhone,
          account_no: "11020"
        }),
      });

      const data = await response.json();
      
      if (response.ok && (data.success || data.status === 200 || data.ResponseCode === "0" || data.status === "Queued" || data.checkout_request_id)) {
        alert("Success! Fadlan eeg taleefankaaga oo geli PIN-kaaga M-Pesa si aad u xaqiijiso lacagta.");
      } else {
        alert("Cillad: " + (data.message || data.errorMessage || "Fadlan hubi lambarkaaga ama Pay Hero Configuration-ka!"));
      }
    } catch (error) {
      console.error("STK Error:", error);
      alert("Cillad xagga shabakadda ah ayaa dhacday intii lagu guda jiray dirista Pay Hero STK Push.");
    } finally {
      setIsLoadingPayment(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#06060f] text-white flex flex-col">
      <Header />

      <main className="flex-1 p-6 pb-28 w-full px-4 sm:px-8 relative space-y-8">
        
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
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* HERO BANNER */}
        <div className="relative w-full">
          <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl p-10 md:p-16 relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10 text-center py-6">
              <div className="text-7xl mb-4">📺</div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">🇬🇲 Ahmed Abdikani Live TV 🇸🇴</h2>
              <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Watch Live Sports HD Content Flawlessly</p>
              <button
                onClick={() => handlePlayVideo("y7tv1y_Q_Q0", "FIFA World Cup 2026", true)}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-wider cursor-pointer"
              >
                 Click Here to Watch Live
              </button>
            </div>
          </div>

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

        {/* LIVE CHANNELS */}
        <section className="w-full">
          <h2 className="text-xl font-black mb-4 text-white/90 tracking-wide uppercase">All Live Channels - 11 Streams</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
            {SPORTS_CHANNELS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handlePlayVideo(ch.youtube, ch.title, true, ch.isYoutubeChannel)}
                className={`shrink-0 w-48 h-32 bg-gradient-to-br ${ch.bg} rounded-2xl p-5 flex flex-col justify-between border border-white/5 shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className="text-3xl">{ch.icon}</span>
                  <span className="text-xs bg-red-600 px-2.5 py-1 rounded-full font-black">LIVE</span>
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
              onClick={() => handlePlayVideo("MiQe9ob9aDc", "BeIN Sports HD", true)}
              className="bg-gradient-to-r from-slate-800 to-slate-900 p-5 rounded-2xl border border-white/10 flex items-center justify-between hover:border-blue-500 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">⚽</span>
                <div className="text-left">
                  <h4 className="font-bold text-white">BeIN Sports Live</h4>
                  <p className="text-xs text-white/60">HD Quality Stream</p>
                </div>
              </div>
              <span className="bg-red-600 text-xs px-3 py-1 rounded-full font-bold">WATCH</span>
            </button>
            <button
              onClick={() => handlePlayVideo("y7tv1y_Q_Q0", "SuperSport TV", true)}
              className="bg-gradient-to-r from-slate-800 to-slate-900 p-5 rounded-2xl border border-white/10 flex items-center justify-between hover:border-blue-500 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🏆</span>
                <div className="text-left">
                  <h4 className="font-bold text-white">SuperSport Live</h4>
                  <p className="text-xs text-white/60">HD Quality Stream</p>
                </div>
              </div>
              <span className="bg-red-600 text-xs px-3 py-1 rounded-full font-bold">WATCH</span>
            </button>
          </div>
        </section>

        {/* DATA BUNDLES PAYMENT SECTION */}
        <section className="p-6 rounded-3xl bg-[#111122] border border-blue-500/30 shadow-xl w-full">
          <h2 className="text-xl font-black mb-2 text-white uppercase tracking-wide">Buy Internet Data Packages</h2>
          <p className="text-white/60 text-sm mb-6">Select a bundle and enter your M-Pesa phone number to pay instantly via Pay Hero STK Push.</p>
          
          <form onSubmit={handleBuyData} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-72 overflow-y-auto p-1">
              {DATA_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedPkg === pkg.id ? 'bg-blue-600/20 border-blue-500' : 'bg-[#0a0a1a] border-white/5 hover:border-white/20'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-white text-sm">{pkg.name}</span>
                    <span className="text-blue-400 font-black text-sm">KES {pkg.price}</span>
                  </div>
                  <p className="text-white/60 text-xs">{pkg.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter M-Pesa Phone (e.g., 0712345678)"
                className="flex-1 bg-[#0a0a1a] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-base"
              />
              <button
                type="submit"
                disabled={isLoadingPayment}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-black px-8 py-4 rounded-xl text-base transition shadow-lg uppercase tracking-wider cursor-pointer"
              >
                {isLoadingPayment ? "Processing..." : "Pay via M-Pesa"}
              </button>
            </div>
          </form>
        </section>

      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
