'use client'
import { useState, useEffect } from 'react'

const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026🏆 ", subtitle: "Live Match", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Premier League🏆 ", subtitle: "Super Sunday", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 3, title: "Champions League🏆 ", subtitle: "Europe Nights", bg: "from-blue-600 to-cyan-700", icon: "🌍" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia 🇸🇴", status: "Live Streaming", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia 🇬🇲", status: "Live Streaming", bg: "from-red-500 to-green-600" },
  { country: "Kenya 🇰🇪", status: "Available", bg: "from-green-700 to-white/10" },
];

const AdsterraBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.highperformancedpm.com/your-adsterra-code-here/invoke.js";
    script.async = true;
    script.dataset.cfasync = "false";
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);
  return <div id="container-your-adsterra-id" className="my-4 flex justify-center"></div>;
};

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28 font-sans">
      
      {/* Header */}
      <div className="p-4 flex justify-between items-center bg-[#06060f] border-b border-white/5">
        <h1 className="text-lg font-black text-white">Ahmed Abdikani LIVE TV</h1>
        {/* Gambaleelka Notifications */}
        <button className="text-xl hover:scale-110 transition">🔔</button>
      </div>

      {/* Banner & Player */}
      <div className="p-4">
        {activeStream ? (
           <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10">
             <iframe src={`${activeStream}?autoplay=1`} className="w-full h-full" allowFullScreen />
             <button onClick={() => setActiveStream(null)} className="absolute top-3 right-3 bg-black/50 px-2 py-1 rounded text-xs">✕</button>
           </div>
        ) : (
          <div onClick={() => setActiveStream(STREAM_URL)} className="w-full aspect-video bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl flex flex-col items-center justify-center cursor-pointer">
            <p className="font-bold">Tap to Stream beIN SPORTS 1 HD</p>
          </div>
        )}
      </div>

      <AdsterraBanner />

      {/* Featured Sports */}
      <div className="px-4">
        <h2 className="text-md font-extrabold mb-3">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-3">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} onClick={() => setActiveStream(STREAM_URL)} className={`shrink-0 w-64 h-36 bg-gradient-to-br ${ch.bg} rounded-xl p-4 flex flex-col justify-between cursor-pointer relative`}>
              <div className="flex justify-between">
                <div className="text-2xl">{ch.icon}</div>
                {/* Badhanka Watch Now ee aad codsatay */}
                <span className="bg-white text-black text-[9px] font-black px-2 py-1 rounded-full uppercase">Watch Now</span>
              </div>
              <h3 className="font-bold text-sm">{ch.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Qaybaha kale halkaan ayay ku xigayaan... */}
      
    </div>
  );
}
