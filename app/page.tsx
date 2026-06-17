'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

// --- DATA SECTION (Xogta) ---
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", bg: "from-blue-600 to-blue-800", icon: "🏆", flag: "🇸🇴" },
  { id: 2, title: "Champions League", bg: "from-purple-600 to-indigo-800", icon: "⚽", flag: "🌍" },
  { id: 3, title: "Premier League", bg: "from-emerald-600 to-green-800", icon: "🏆", flag: "🇬🇧" },
  { id: 4, title: "Wrestling WWE", bg: "from-red-600 to-orange-800", icon: "💥", flag: "⚡" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia", flag: "🇸🇴", status: "Live", bg: "from-blue-500 to-blue-700" },
  { country: "Ogadenia", flag: "🇬🇲", status: "Live", bg: "from-red-500 to-green-700" },
  { country: "Kenya", flag: "🇰🇪", status: "Available", bg: "from-green-600 to-black/20" },
  { country: "Global", flag: "🌍", status: "Live", bg: "from-purple-500 to-indigo-700" },
];

const HIGHLIGHTS = [
  { title: "Goals Highlights 🔥", duration: "Live", url: "https://www.youtube.com/embed/5h-camjSQ-4" },
  { title: "Match Recap 📋", duration: "Live", url: "" },
  { title: "News Aljazira 📺", duration: "Live", url: "https://www.youtube.com/embed/gCNeDWCI0vo" },
];

const LIVE_EVENTS_LOGS = [
  { time: "90'", event: "GOAL!", player: "Player X", team: "Team A" },
  { time: "75'", event: "Yellow Card", player: "Player Y", team: "Team B" },
  { time: "60'", event: "GOAL!", player: "Player Z", team: "Team A" },
];

// --- COMPONENTS (Qaybaha) ---

// Qaybta Xayeysiiska (Adsterra)
const AdsterraBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.highperformancedpm.com/your-adsterra-code-here/invoke.js";
    script.async = true;
    script.dataset.cfasync = "false";
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return <div id="container-your-adsterra-id" className="my-6 flex justify-center py-4 bg-white/5 rounded-xl border border-white/5 mx-4"></div>;
};

// Qaybta Sare (Header) - Hoos ayaan u yara dhignay oo magaca waan hagaajinay
const Header = () => (
  <header className="p-4 flex justify-between items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-1 z-50 mt-3 rounded-b-2xl mx-2 shadow-xl">
    <h1 className="text-2xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
    <button className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-all duration-300">🔔</button>
  </header>
);

// Qaybta Hoos (Bottom Navigation) - Hadda waxaan ku darnay shaqo loogu kala gudbo boggaga
const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabs = ['Home', 'Live', 'Browse', 'Profile'];
  return (
    <nav className="fixed bottom-0 w-full bg-[#0a0a1a]/95 border-t border-white/10 p-4 flex justify-around backdrop-blur-xl z-50 shadow-2xl rounded-t-3xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 ${activeTab === tab ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-80'}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

// --- TAB PAGES (Boggaga Kala Duwan) ---

// Bogga Home (Muuqaalkii hore)
const HomePage = ({ activeStream }: { activeStream: string }) => (
  <>
    {/* Hero Player */}
    <main className="p-4">
      <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative group">
        <iframe src={`${activeStream}?autoplay=1&mute=1`} className="w-full h-full" allowFullScreen />
      </div>
    </main>

    <AdsterraBanner />

    {/* Featured Sports */}
    <section className="px-4 mb-8">
      <h2 className="text-lg font-bold mb-4 opacity-90 text-white">Featured Sports</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {SPORTS_CHANNELS.map((ch) => (
          <div key={ch.id} className={`shrink-0 w-48 h-32 bg-gradient-to-br ${ch.bg} rounded-2xl p-4 flex flex-col justify-between border border-white/5 transition-transform hover:scale-105 duration-300 shadow-lg`}>
            <div className="flex justify-between items-start">
              <span className="text-2xl">{ch.icon}</span>
              <span className="text-2xl">{ch.flag}</span>
            </div>
            <h3 className="font-bold text-sm text-white">{ch.title}</h3>
          </div>
        ))}
      </div>
    </section>

    {/* Country Grid */}
    <section className="px-4 mb-8">
      <h2 className="text-lg font-bold mb-4 opacity-90 text-white">Watch By Country</h2>
      <div className="grid grid-cols-2 gap-4">
        {WATCH_BY_COUNTRY.map((c, i) => (
          <div key={i} className={`bg-gradient-to-br ${c.bg} p-4 rounded-2xl border border-white/10 flex items-center gap-3 transition-transform hover:scale-105 duration-300 shadow-md`}>
            <span className="text-3xl">{c.flag}</span>
            <div>
              <p className="font-bold text-sm text-white">{c.country}</p>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">{c.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Highlights */}
    <section className="px-4">
      <h2 className="text-lg font-bold mb-4 opacity-90 text-white">Match Highlights</h2>
      {HIGHLIGHTS.map((h, i) => (
        <div key={i} className="bg-[#111122] p-4 rounded-2xl mb-4 border border-white/5 hover:border-blue-500/30 transition duration-300 shadow-sm">
          <div className="flex justify-between mb-3">
            <p className="text-xs font-bold text-white">{h.title}</p>
            <p className="text-[10px] text-gray-400">{h.duration}</p>
          </div>
          {h.url && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/5">
              <iframe src={h.url} className="w-full h-full" allowFullScreen />
            </div>
          )}
        </div>
      ))}
    </section>
  </>
);

// Bogga Live (Bogg cusub) - Qurux badan
const LivePage = () => (
  <section className="p-4 text-white">
    <h2 className="text-2xl font-bold mb-6 text-center">Current Live Events</h2>
    
    <div className="bg-[#111122] rounded-3xl p-6 border border-white/5 shadow-2xl mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-2xl">⚽</div>
        <div>
          <p className="font-bold">Team A vs Team B</p>
          <p className="text-xs text-gray-400">Match in 5</p>
        </div>
      </div>
      
      <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4 border border-white/5 relative group">
          <iframe src="https://www.youtube.com/embed/5h-camjSQ-4?autoplay=1&mute=1" className="w-full h-full" allowFullScreen />
      </div>

      <div className="space-y-3">
          {LIVE_EVENTS_LOGS.map((log, index) => (
              <div key={index} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-xs text-gray-400">{log.time}</span>
                  <p className="text-xs font-bold">{log.event}</p>
                  <p className="text-[10px] text-white/80">{log.player} ({log.team})</p>
              </div>
          ))}
      </div>
    </div>

  </section>
);

// Bogga Browse (Bogg cusub) - Qurux badan
const BrowsePage = () => (
    <section className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Browse Channels</h2>
      
      <div className="grid grid-cols-2 gap-4">
          {[...WATCH_BY_COUNTRY, ...WATCH_BY_COUNTRY].map((item, index) => (
              <div key={index} className={`shrink-0 w-full h-32 bg-gradient-to-br ${item.bg} rounded-2xl p-4 flex flex-col justify-between border border-white/5 transition-transform hover:scale-105 duration-300 shadow-lg`}>
                  <div className="flex justify-between items-start">
                      <span className="text-3xl">{item.flag}</span>
                  </div>
                  <h3 className="font-bold text-sm text-white">{item.country} Live</h3>
              </div>
          ))}
      </div>
    </section>
  );

// Bogga Profile (Bogg cusub) - Qurux badan
const ProfilePage = () => (
    <section className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>
      
      <div className="bg-[#111122] rounded-3xl p-6 border border-white/5 shadow-2xl flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-4xl mb-4 border-4 border-white/10">👤</div>
          <p className="font-bold text-xl mb-1">Guest User</p>
          <p className="text-xs text-gray-400 mb-6">@guest_user</p>
          
          <button className="bg-blue-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-700 transition">Edit Profile</button>
      </div>

    </section>
  );

// --- MAIN PAGE (Main Entry Point) ---
export default function App() {
  const [activeStream, setActiveStream] = useState("https://siir-tv.com/bein-sport-1/");
  const [activeTab, setActiveTab] = useState('Home'); // Maaree boggaga kala duwan

  // Go'aami bogga la muujinayo iyadoo loo eegayo tab-ka firfircoon
  const renderPage = () => {
    switch (activeTab) {
      case 'Home':
        return <HomePage activeStream={activeStream} />;
      case 'Live':
        return <LivePage />;
      case 'Browse':
        return <BrowsePage />;
      case 'Profile':
        return <ProfilePage />;
      default:
        return <HomePage activeStream={activeStream} />;
    }
  };

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-32 font-sans selection:bg-blue-500/30 selection:text-white">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
      </Head>

      <Header />

      {/* Muuji Bogga Saxda Ah */}
      {renderPage()}

      {/* Gudubka hoose ee leh shaqo boggag-kala-gudub */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
