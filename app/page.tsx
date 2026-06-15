'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

// --- DATA SECTION ---
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
  { title: "Goals Highlights 🔥", duration: "24/7", url: "https://www.youtube.com/embed/5h-camjSQ-4" },
  { title: "Match Recap 📋", duration: "24/7", url: "" },
  { title: "News Aljazira 📺", duration: "Live", url: "https://www.youtube.com/embed/gCNeDWCI0vo" },
];

// --- COMPONENTS ---
const AdsterraBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.highperformancedpm.com/your-adsterra-code-here/invoke.js";
    script.async = true;
    script.dataset.cfasync = "false";
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return <div id="container-your-adsterra-id" className="my-6 flex justify-center py-4 bg-white/5 rounded-xl border border-white/5"></div>;
};

const Header = () => (
  <header className="p-4 flex justify-between items-center border-b border-white/10 bg-[#06060f]/90 backdrop-blur-md sticky top-0 z-50">
    <h1 className="text-xl font-black tracking-tighter text-white">AHMED <span className="text-blue-500">LIVE</span> TV</h1>
    <button className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">🔔</button>
  </header>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 w-full bg-[#0a0a1a] border-t border-white/10 p-4 flex justify-around backdrop-blur-xl z-50">
    {['Home', 'Live', 'Browse', 'Profile'].map((nav) => (
      <button key={nav} className="text-[10px] font-bold opacity-60 hover:opacity-100 uppercase tracking-widest text-white transition">
        {nav}
      </button>
    ))}
  </nav>
);

// --- MAIN PAGE ---
export default function HomePage() {
  const [activeStream, setActiveStream] = useState("https://siir-tv.com/bein-sport-1/");

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28 font-sans">
      <Head>
        <title>Ahmed Abdikani Live TV</title>
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
      </Head>

      <Header />

      {/* Hero Player */}
      <main className="p-4">
        <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
          <iframe src={`${activeStream}?autoplay=1&mute=1`} className="w-full h-full" allowFullScreen />
        </div>
      </main>

      <AdsterraBanner />

      {/* Featured Sports */}
      <section className="px-4 mb-8">
        <h2 className="text-lg font-bold mb-4 opacity-90">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} className={`shrink-0 w-48 h-32 bg-gradient-to-br ${ch.bg} rounded-2xl p-4 flex flex-col justify-between border border-white/5 transition-transform hover:scale-105`}>
              <div className="flex justify-between items-start">
                <span className="text-2xl">{ch.icon}</span>
                <span className="text-2xl">{ch.flag}</span>
              </div>
              <h3 className="font-bold text-sm">{ch.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Country Grid */}
      <section className="px-4 mb-8">
        <h2 className="text-lg font-bold mb-4 opacity-90">Watch By Country</h2>
        <div className="grid grid-cols-2 gap-4">
          {WATCH_BY_COUNTRY.map((c, i) => (
            <div key={i} className={`bg-gradient-to-br ${c.bg} p-4 rounded-2xl border border-white/10 flex items-center gap-3 transition hover:scale-105`}>
              <span className="text-3xl">{c.flag}</span>
              <div>
                <p className="font-bold text-sm">{c.country}</p>
                <p className="text-[10px] text-white/70 uppercase tracking-widest">{c.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4">
        <h2 className="text-lg font-bold mb-4 opacity-90">Match Highlights</h2>
        {HIGHLIGHTS.map((h, i) => (
          <div key={i} className="bg-[#111122] p-4 rounded-2xl mb-4 border border-white/5 hover:border-blue-500/30 transition">
            <div className="flex justify-between mb-3">
              <p className="text-xs font-bold">{h.title}</p>
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

      <BottomNav />
    </div>
  );
}
