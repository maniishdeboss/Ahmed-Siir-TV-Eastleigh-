'use client'
import { useState } from 'react'

// --- DATA SECTION ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴", youtube: null, siirUrl: "https://sporty.com/sporty-tv" },
  { id: 11, title: "Sports Live Highlights", bg: "from-indigo-600 to-purple-800", icon: "⚡", flag: "🏅", youtube: "https://sporty.com/sporty-tv" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", youtube: "https://sporty.com/sporty-tv" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡", youtube: "https://sporty.com/sporty-tv" },
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
  { id: 22, title: "BeIN Sports", year: "2026", rating: "9.0", type: "Live Sports", bg: "from-slate-800 to-slate-950", youtube: null, siirUrl: "https://sporty.com/sporty-tv", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" },
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
        <button key={tab} onClick={() => setActiveTab(tab)} className={`text-sm font-black uppercase tracking-widest text-white transition-all ${activeTab === tab? 'opacity-100 scale-110 text-blue-500' : 'opacity-60'}`}>
          {tab}
        </button>
      ))}
    </nav>
  );
};

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPkg, setSelectedPkg] = useState<number>(1);
  const [isBuying, setIsBuying] = useState(false);

  const handlePlayVideo = (url: string, title: string, isYoutube: boolean = true, isChannel: boolean = false) => {
    if (url && url.includes('sporty.com')) { window.open(url, '_blank'); return; }
    if (isChannel || (url && url.includes('youtube.com/@'))) { window.open(url, '_blank'); return; }
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
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`);
      const data = await response.json();
      if (data.items) {
        setSearchResults(data.items.map((item: any) => ({ id: item.id.videoId, title: item.snippet.title, thumbnail: item.snippet.thumbnails.medium.url, channel: item.snippet.channelTitle })));
      }
    } catch (e) { console.error(e); } finally { setIsSearching(false); }
  };

  // --- TINYPESA SAX AH ---
  const handleBuyData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return alert("Fadlan geli number-ka M-Pesa!");

    let formattedPhone = phoneNumber.trim();
    if (formattedPhone.startsWith('0')) formattedPhone = '254' + formattedPhone.slice(1);
    if (formattedPhone.startsWith('+')) formattedPhone = formattedPhone.slice(1);
    if (!formattedPhone.startsWith('254')) return alert("Number-ka waa inuu yahay 07... ama 2547...");

    const currentPackage = DATA_PACKAGES.find(p => p.id === selectedPkg);
    const price = currentPackage? currentPackage.price : 18;

    try {
      setIsBuying(true);
      const res = await fetch('/api/stk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: price, msisdn: formattedPhone, account_no: `AHMED_DATA_${selectedPkg}_${Date.now()}` })
      });
      const data = await res.json();
      console.log("TinyPesa:", data);
      if (res.ok && (data.success!== false)) {
        alert(`✅ STK Push loo diray ${formattedPhone} - Hubi taleefankaaga oo geli PIN-ka!`);
      } else {
        alert(`❌ Khalad: ${data.message || data.error || JSON.stringify(data)}`);
      }
    } catch (err: any) {
      alert("Network error: " + err.message);
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <main className="p-6 pb-28 w-full px-4 sm:px-8 relative space-y-8 bg-[#06060f] min-h-screen">
      <div className="bg-[#111122] rounded-2xl p-4 border border-blue-500/30 shadow-xl w-full">
        <div className="flex gap-3">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleYouTubeSearch()} placeholder="Search YouTube..." className="flex-1 bg-[#0a0a1a] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-base" />
          <button onClick={handleYouTubeSearch} disabled={isSearching} className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg"> {isSearching? "⏳" : "🔍"} </button>
        </div>
      </div>

      {showResults && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-red-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4"><h3 className="text-xl font-bold text-white">Results: {searchQuery}</h3><button onClick={() => setShowResults(false)} className="text-white/60 hover:text-white text-3xl">×</button></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto">
            {searchResults.map((v) => (<button key={v.id} onClick={() => handlePlayVideo(v.id, v.title, true)} className="flex gap-4 bg-[#0a0a1a] p-4 rounded-xl border border-white/5 hover:bg-[#1a1a2a] text-left"><img src={v.thumbnail} alt={v.title} className="w-36 h-24 object-cover rounded-lg" /><div className="flex-1"><p className="text-white font-bold text-sm line-clamp-2">{v.title}</p><p className="text-white/50 text-xs mt-1.5">{v.channel}</p></div></button>))}
          </div>
        </div>
      )}

      {activeVideo && (
        <div className="bg-[#111122] rounded-3xl p-5 border border-blue-500/30 shadow-2xl w-full">
          <div className="flex justify-between items-center mb-4"><div className="flex items-center gap-2"><span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse font-bold">LIVE</span><p className="text-base font-bold text-white line-clamp-1">{activeTitle}</p></div><button onClick={() => setActiveVideo(null)} className="text-white/60 hover:text-white text-4xl leading-none">×</button></div>
          <div className="aspect-video bg-black rounded-xl overflow-hidden w-full max-w-6xl mx-auto"><iframe src={isYoutubeVideo? `https://www.youtube.com/embed/${activeVideo}?autoplay=1` : activeVideo} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen /></div>
        </div>
      )}

      <div className="relative w-full">
        <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl p-10 md:p-16 relative text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10"><div className="text-7xl mb-4">📺</div><h2 className="text-3xl sm:text-5xl font-black text-white mb-3">🇰🇪🇸🇴 Ahmed Abdikani Live TV 🇸🇴</h2><p className="text-white/80 text-base sm:text-lg mb-8">Watch Live Sports HD Content Flawlessly</p><a href="https://sporty.com/sporty-tv" target="_blank" className="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 px-12 rounded-xl shadow-xl uppercase">Click Here to Watch Live</a></div>
        </div>
        {showNotification && (<div className="absolute top-4 right-4 z-30 w-72 bg-white text-black p-3.5 rounded-xl shadow-2xl border animate-fade-in flex flex-col gap-2"><div className="flex justify-between items-start"><h4 className="text-xs font-bold">Manage Site Notifications</h4><button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-black text-base font-bold">×</button></div><button onClick={() => setShowNotification(false)} className="w-full bg-[#ef4444] text-white font-bold text-[11px] py-1.5 rounded uppercase">Unsubscribe</button></div>)}
      </div>

      <section className="w-full"><h2 className="text-xl font-black mb-4 text-white/90 uppercase">All Live Channels - 11 Streams</h2><div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">{SPORTS_CHANNELS.map((ch) => (<button key={ch.id} onClick={() => ch.youtube && handlePlayVideo(ch.youtube, ch.title, true, ch.isYoutubeChannel)} className={`shrink-0 w-48 h-32 bg-gradient-to-br ${ch.bg} rounded-2xl p-5 flex flex-col justify-between border border-white/5 shadow-xl hover:scale-105 transition-all`}><div className="flex justify-between items-start w-full"><span className="text-3xl">{ch.icon}</span>{ch.youtube && <span className="text-xs bg-red-600 px-2.5 py-1 rounded-full font-black">LIVE</span>}</div><h3 className="font-bold text-sm text-white text-left line-clamp-2">{ch.title}</h3></button>))}</div></section>

      {/* AHMED DATA DEALS - TINYPESA FIXED */}
      <section className="p-6 rounded-3xl bg-gradient-to-br from-green-950 via-[#0d1b15] to-[#050c08] border-2 border-green-500/40 shadow-2xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-white/10 pb-4">
          <div><h2 className="text-2xl font-black text-green-400 uppercase">Ahmed Data Deals Kenya</h2><p className="text-sm text-white/60">Lipa na M-Pesa - STK Push toos ah</p></div>
          <span className="text-xs bg-green-500 text-black font-black px-3 py-1.5 rounded-full">M-PESA LIVE</span>
        </div>

        <form onSubmit={handleBuyData} className="space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {DATA_PACKAGES.map((pkg) => (
              <button type="button" key={pkg.id} onClick={() => setSelectedPkg(pkg.id)} className={`text-left p-4 rounded-2xl border-2 transition-all ${selectedPkg === pkg.id? 'border-green-500 bg-green-500/20 scale-105' : 'border-white/10 bg-[#0a0a1a] hover:border-white/20'}`}>
                <div className="flex justify-between items-start"><p className="font-black text-white text-sm">{pkg.name}</p>{pkg.badge && <span className="text-[9px] bg-yellow-500 text-black font-black px-2 py-0.5 rounded-full">{pkg.badge}</span>}</div>
                <p className="text-green-400 font-black text-lg mt-1">KES {pkg.price}</p><p className="text-white/50 text-[10px] uppercase mt-1">{pkg.desc}</p>
              </button>
            ))}
          </div>

          <div className="bg-[#0a0a1a] p-4 rounded-2xl border border-white/10 space-y-3">
            <label className="text-xs font-bold text-white/70 uppercase tracking-widest">M-Pesa Phone Number</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="07... ama 2547..." className="w-full bg-[#111122] text-white px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:border-green-500 text-base font-bold" required />
            <button type="submit" disabled={isBuying} className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-black text-base py-4 rounded-xl transition-all uppercase tracking-wider shadow-xl">
              {isBuying? "⏳ STK Push la dirayaa..." : `Buy ${DATA_PACKAGES.find(p=>p.id===selectedPkg)?.name} - KES ${DATA_PACKAGES.find(p=>p.id===selectedPkg)?.price}`}
            </button>
            <p className="text-[11px] text-white/40 text-center">STK Push wuxuu si toos ah ugu soo bixi doonaa taleefankaaga. Geli PIN-ka si aad u bixiso.</p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="min-h-screen bg-[#06060f]">
      <Header />
      <HomePage />
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
