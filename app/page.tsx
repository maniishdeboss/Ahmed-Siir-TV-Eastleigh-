'use client'
import { useState, useEffect } from 'react'
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
    { id: 1, team1: "Spain", team2: "Saudi Arabia", flag1: "🇪🇸", flag2: "🇸🇦", time: "LIVE NOW", quality: "HD", link: "https://www.youtube.com/embed/sXaPOBDZ3YM?autoplay=1", isYoutube: true },
    { id: 2, team1: "Germany", team2: "ivory coast", flag1: "🇩🇪", flag2: "🇨🇮", time: "Finished 2:1", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
    { id: 3, team1: "Spain", team2: "Saudi Arabia", flag1: "🇪🇸", flag2: "🇸🇦", time: "LIVE NOW", quality: "HD", link: "https://www.youtube.com/embed/sXaPOBDZ3YM?autoplay=1", isYoutube: true },
  ],
  3: [
    { id: 1, team1: "Arsenal", team2: "Chelsea", flag1: "🔴", flag2: "🔵", time: "Today 22:00", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
    { id: 2, team1: "Man City", team2: "Liverpool", flag1: "🔵", flag2: "🔴", time: "Tomorrow 19:30", quality: "HD", link: "https://siiiiiiir.tv/hard/2908c7d4425d87350.html?match=4627865", isYoutube: false },
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
  const [scoreResults, setScoreResults] = useState<any[]>([]);
  const [liveMatches, setLiveMatches] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchTab, setSearchTab] = useState<'videos' | 'scores'>('videos');

  // Load LIVE matches marka app-ka furmo
  useEffect(() => {
    fetchLiveMatches();
  }, []);

  const fetchLiveMatches = async () => {
    try {
      // Free API - Live Soccer
      const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=' + new Date().toISOString().split('T')[0] + '&s=Soccer');
      const data = await response.json();
      if (data.events) {
        setLiveMatches(data.events.slice(0, 5));
      }
    } catch (error) {
      console.error("Live matches error:", error);
    }
  };

  const handlePlayVideo = (url: string, title: string, isYoutube: boolean = true) => {
    setActiveVideo(url);
    setActiveTitle(title);
    setIsYoutubeVideo(isYoutube);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setShowResults(true);

    try {
      // 1. YouTube Search
      const API_KEY = "AIzaSyAUIkNgNCG9LVJnyG1ohnTxNYwWMpoaiK0";
      const ytResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`
      );
      const ytData = await ytResponse.json();

      if (ytData.items) {
        const results = ytData.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channel: item.snippet.channelTitle,
          type: 'video'
        }));
        setSearchResults(results);
      }

      // 2. LiveScore Search - TheSportsDB Free API - 3 endpoints
      let allScores: any[] = [];

      // Method 1: Search events by name
      const eventResponse = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${encodeURIComponent(searchQuery)}`
      );
      const eventData = await eventResponse.json();
      if (eventData.event) {
        allScores = [...allScores,...eventData.event];
      }

      // Method 2: Search teams then get their last events
      const teamResponse = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(searchQuery)}`
      );
      const teamData = await teamResponse.json();

      if (teamData.teams) {
        for (const team of teamData.teams.slice(0, 2)) {
          const eventsRes = await fetch(
            `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${team.idTeam}`
          );
          const eventsData = await eventsRes.json();
          if (eventsData.results) {
            allScores = [...allScores,...eventsData.results];
          }
          // Also get next events
          const nextRes = await fetch(
            `https://www.thesportsdb.com/api/v1/json/3/eventsnext.php?id=${team.idTeam}`
          );
          const nextData = await nextRes.json();
          if (nextData.events) {
            allScores = [...allScores,...nextData.events];
          }
        }
      }

      // Format scores
      const formattedScores = allScores.slice(0, 10).map((item: any) => ({
        title: item.strEvent || `${item.strHomeTeam} vs ${item.strAwayTeam}`,
        homeTeam: item.strHomeTeam,
        awayTeam: item.strAwayTeam,
        homeScore: item.intHomeScore,
        awayScore: item.intAwayScore,
        date: item.dateEvent,
        time: item.strTime,
        status: item.strStatus || (item.intHomeScore!== null? 'Finished' : 'Scheduled'),
        league: item.strLeague,
        type: 'score'
      }));

      setScoreResults(formattedScores);

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
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Raadi: Arsenal, Barcelona, Premier League..."
            className="flex-1 bg-[#0a0a1a] text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 text-sm"
          />
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
          >
            {isSearching? "⏳" : "🔍"}
          </button>
        </div>
      </div>

      {/* LIVE MATCHES - Tus isla markiiba */}
      {liveMatches.length > 0 &&!showResults && (
        <div className="mb-6 bg-[#111122] rounded-3xl p-4 border border-green-500/30 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse">LIVE TODAY</span>
            <h3 className="text-lg font-bold text-white">Ciyaaraha Maanta</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {liveMatches.map((match: any, i: number) => (
              <div key={i} className="bg-[#0a0a1a] p-3 rounded-xl border border-green-500/20">
                <p className="text-white font-bold text-sm">{match.strEvent}</p>
                <p className="text-white/60 text-xs">{match.strLeague} - {match.strTime}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showResults && (
        <div className="mb-6 bg-[#111122] rounded-3xl p-4 border border-red-500/30 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Natiijooyinka: {searchQuery}</h3>
            <button
              onClick={() => setShowResults(false)}
              className="text-white/60 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          <div className="flex gap-2 mb-4 border-b border-white/10">
            <button
              onClick={() => setSearchTab('videos')}
              className={`px-4 py-2 font-bold text-sm ${searchTab === 'videos'? 'text-blue-500 border-b-2 border-blue-500' : 'text-white/60'}`}
            >
              📺 Videos ({searchResults.length})
            </button>
            <button
              onClick={() => setSearchTab('scores')}
              className={`px-4 py-2 font-bold text-sm ${searchTab === 'scores'? 'text-green-500 border-b-2 border-green-500' : 'text-white/60'}`}
            >
              ⚽ Scores ({scoreResults.length})
            </button>
          </div>

          {searchTab === 'videos' && (
            <div className="grid grid-cols-1 gap-3 max-h-[500px] overflow-y-auto">
              {searchResults.length === 0 &&!isSearching && (
                <p className="text-white/60 text-center py-8">Video lama helin</p>
              )}
              {searchResults.map((video) => (
                <button
                  key={video.id}
                  onClick={() => handlePlayVideo(video.id, video.title, true)}
                  className="flex gap-3 bg-[#0a0a1a] p-3 rounded-xl border border-white/5 hover:bg-[#1a2a] transition text-left"
                >
                  <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm line-clamp-2">{video.title}</p>
                    <p className="text-white/50 text-xs mt-1">{video.channel}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {searchTab === 'scores' && (
            <div className="grid grid-cols-1 gap-3 max-h-[500px] overflow-y-auto">
              {scoreResults.length === 0 &&!isSearching && (
                <p className="text-white/60 text-center py-8">Score lama helin. Isku day: "Arsenal", "Barcelona", "Real Madrid"</p>
              )}
              {scoreResults.map((match, i) => (
                <div
                  key={i}
                  className="bg-[#0a0a1a] p-4 rounded-xl border border-green-500/20"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-green-400 font-bold">{match.league}</span>
                    <span className="text-xs text-white/50">{match.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <p className="text-white font-bold text-sm">{match.homeTeam}</p>
                    </div>
                    <div className="mx-4 text-center">
                      {match.homeScore!== null && match.homeScore!== undefined? (
                        <div className="bg-green-600 px-4 py-2 rounded-lg">
                          <p className="text-white font-black text-xl">{match.homeScore} - {match.awayScore}</p>
                          <p className="text-xs text-white/80">{match.status}</p>
                        </div>
                      ) : (
                        <div className="bg-blue-600 px-4 py-2 rounded-lg">
                          <p className="text-white font-bold text-sm">{match.time || 'TBD'}</p>
                          <p className="text-xs text-white/80">Upcoming</p>
                        </div>
                      )}
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-white font-bold text-sm">{match.awayTeam}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeVideo && (
        <div className="mb-6 bg-[#111122] rounded-3xl p-4 border border-blue-500/30 shadow-2xl">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-xs px-3 py-1 rounded-full animate-pulse">LIVE</span>
              <p className="text-sm font-bold text-white line-clamp-1">{activeTitle}</p>
            </div>
            <button
              onClick={() => setActiveVideo(null)}
              className="text-white/60 hover:text-white text-3xl leading-none"
            >
              ×
            </button>
          </div>
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

      <div className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 rounded-3xl overflow-hidden border-2 border-blue-500/30 shadow-2xl mb-6 p-8 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <div className="text-6xl mb-4">📺</div>
          <h2 className="text-3xl font-black text-white mb-2">Ahmed Abdikani Live TV 🇸🇴</h2>
          <p className="text-white/70 text-sm mb-6">Daawo ciyaaraha tooska ah HD + Live Scores</p>
          <a
            href="https://www.siiiiir.tv/"
            target="_blank"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            ▶ DAARO LIVE HADA
          </a>
        </div>
      </div>

      <div className="flex items-center mb-8 px-2">
        <span className="bg-red-600 text-xs px-3 py-1 rounded-full mr-2 animate-pulse">LIVE</span>
        <p className="text-sm font-bold text-white">Ahmed Abdikani Live Streaming</p>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4 text-white/90">All Live Channels - 11 Streams</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {SPORTS_CHANNELS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => ch.youtube && handlePlayVideo(ch.youtube, ch.title)}
              disabled={!ch.youtube}
              className={`shrink-0 w-40 h-28 bg-gradient-to-br ${ch.bg} rounded-2xl p-4 flex flex-col justify-between border border-white/5 shadow-lg transition-all hover:scale-105 active:scale-95 ${ch.youtube? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-2xl">{ch.icon}</span>
                {ch.youtube && <span className="text-xs bg-red-600 px-2 py-0.5 rounded-full font-bold">LIVE</span>}
              </div>
              <h3 className="font-bold text-xs text-white text-left">{ch.title}</h3>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-8 p-4 rounded-3xl bg-[#111122] border border-green-500/30">
        <h2 className="text-lg font-bold mb-4 text-green-400">Premium Live TV</h2>
        <div className="grid grid-cols-2 gap-4">
          {FEATURED_TV.map((tv, i) => (
            <button
              key={i}
              onClick={() => tv.isYoutube? handlePlayVideo("kGJEuoSsVsM", tv.title, true) : window.open(tv.url, '_blank')}
              className={`bg-gradient-to-br ${tv.bg} p-8 rounded-2xl border border-white/10 text-center hover:scale-105 transition-transform shadow-lg`}
            >
              <p className="font-black text-white text-lg">{tv.title}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mb-8 p-4 rounded-3xl bg-[#111122] border border-orange-500/30">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-orange-400">Hindi & Hollywood Films</h2>
          <span className="text-xs bg-orange-600 px-3 py-1 rounded-full font-bold">10 FILMS</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ALL_FILMS.map((film) => (
            <button
              key={film.id}
              onClick={() => handlePlayVideo(film.youtube, film.title, true)}
              className="relative h-48 rounded-2xl border border-white/10 overflow-hidden hover:scale-105 transition-transform shadow-lg group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${film.image})`}}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${film.bg} opacity-80 group-hover:opacity-70 transition-opacity`} />
              <div className="relative z-10 h-full flex flex-col justify-between p-4 text-left">
                <div className="flex justify-between items-start">
                  <span className="text-2xl">🎬</span>
                  <div className="flex flex-col gap-1 items-end">
                    <span className="text-xs bg-black/60 px-2 py-1 rounded-full font-bold">⭐ {film.rating}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${film.type === 'Hindi'? 'bg-orange-600' : 'bg-blue-600'}`}>
                      {film.type}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-black text-white text-lg">{film.title}</p>
                  <p className="text-xs text-white/80">{film.year}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">▶</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

const LivePage = () => {
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null);
  const [activeStream, setActiveStream] = useState<string | null>(null);

  if (selectedLeague) {
    const matches = MATCHES_DATA[selectedLeague] || [];
    const leagueName = FOOTBALL_LEAGUES.find(l => l.id === selectedLeague)?.name || "";

    return (
      <section className="bg-[#0a0a1f] min-h-screen pb-24">
        <div className="bg-[#0a0a1f] p-4 flex items-center gap-4 border-b border-white/10 sticky top-0 z-40">
          <button onClick={() => {setSelectedLeague(null); setActiveStream(null);}} className="text-white text-2xl">←</button>
          <h2 className="text-xl font-bold text-white">{leagueName}</h2>
        </div>

        {activeStream && (
          <div className="bg-black aspect-video">
            <iframe
              src={activeStream}
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        )}

        <div className="p-2">
          {matches.map((match) => (
            <div key={match.id} className="bg-[#111122] mb-2 rounded-lg border border-white/5">
              <button
                onClick={() => setActiveStream(match.link)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-center w-20">
                    <div className="text-2xl">{match.flag1}</div>
                    <div className="text-2xl">{match.flag2}</div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white text-sm">{match.team1} VS {match.team2}</p>
                    <p className="text-xs text-white/50">{match.time}</p>
                  </div>
                <div className="text-right">
                  <p className="text-xs text-red-500 font-bold">{match.quality}</p>
                  <p className="text-xs text-blue-400">{match.id}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0a0a1f] min-h-screen pb-24">
      <div className="bg-[#0a0a1f] p-4 flex justify-between items-center border-b border-white/10 sticky top-0 z-40">
        <h1 className="text-2xl font-bold text-white">Football Live HD</h1>
        <div className="flex gap-4 text-white/60">
          <button>⟲</button>
          <button>⭐</button>
          <button>⤴</button>
        </div>
      </div>

      <div className="p-2">
        {FOOTBALL_LEAGUES.map((league) => (
          <button
            key={league.id}
            onClick={() => setSelectedLeague(league.id)}
            className={`${league.bg} w-full mb-2 p-6 rounded-lg border border-white/10 flex flex-col items-center justify-center hover:opacity-80 transition`}
          >
            <div className="bg-white p-4 rounded mb-3 w-32 h-20 flex items-center justify-center">
              <span className="text-4xl">{league.logo}</span>
            </div>
            <p className="font-bold text-white text-lg">{league.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

const BrowsePage = () => (
  <section className="p-4 pb-24 text-center">
    <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
    <div className="grid grid-cols-2 gap-4">
        {WATCH_BY_COUNTRY.map((c, i) => (
            <div key={i} className={`bg-gradient-to-br ${c.bg} p-4 rounded-2xl border border-white/10`}>
                <span className="text-3xl">{c.flag}</span>
                <p className="font-bold text-sm text-white">{c.country}</p>
            </div>
        ))}
    </div>
  </section>
);

const ProfilePage = () => (
  <section className="p-4 pb-24 text-center">
    <h2 className="text-xl font-bold">Profile</h2>
    <p className="text-gray-400">Ahmed Abdikani Mohamed</p>
  </section>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderPage = () => {
    switch (activeTab) {
      case 'Home': return <HomePage />;
      case 'Live': return <LivePage />;
      case 'Browse': return <BrowsePage />;
      case 'Profile': return <ProfilePage />;
      default: return
