'use client'
import { useState } from 'react'
import Head from 'next/head'

const HERO_SIIIIR_ID = "https://sporty.com/football/world-cup/match/norway-vs-england/sr:match:53452529"

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
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧", siiiir: HERO_SIIIIR_ID },
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

export default function HomePage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
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
    <main className="min-h-screen bg-[#06060f] text-white p-6 pb-28 w-full">
      <header className="mb-8">
        <h1 className="text-3xl font-black">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
      </header>

      {/* Main Hero */}
      <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl p-10 text-center border-2 border-blue-500/30 mb-8">
        <h2 className="text-3xl font-black mb-4">🇬🇲 Ahmed Abdikani Live TV 🇸🇴</h2>
        <button
          onClick={() => handlePlaySiiiir(HERO_SIIIIR_ID, "Ahmed Abdikani Live TV")}
          className="bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4 px-12 rounded-xl transition-all"
        >
          CLICK HERE TO WATCH LIVE
        </button>
      </div>

      {/* Live Video Player */}
      {(activeVideoId || activeSiiiirUrl) && (
        <div className="bg-[#111122] rounded-3xl p-5 mb-8 border border-blue-500/30">
          <div className="aspect-video w-full">
            <iframe
              src={activeVideoId ? `https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1` : activeSiiiirUrl!}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Channels */}
      <section className="mb-8">
        <h2 className="text-xl font-black mb-4 uppercase">All Live Channels</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {SPORTS_CHANNELS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => ch.youtube ? handlePlayVideo(ch.youtube, ch.title) : handlePlaySiiiir(ch.siiiir!, ch.title)}
              className="shrink-0 w-48 h-32 bg-gradient-to-br from-gray-800 to-black rounded-2xl p-4 flex flex-col justify-between"
            >
              <span className="text-3xl">{ch.icon}</span>
              <p className="font-bold text-sm">{ch.title}</p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
