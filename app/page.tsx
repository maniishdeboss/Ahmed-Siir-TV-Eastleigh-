'use client'
import { useState, useEffect } from 'react'

const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026🇸🇴⚽📺🏆 ", subtitle: "LIVE MATCH", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Champions league 🇸🇴⚽📺🏆 ", subtitle: "LIVE MATCH", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 3, title: "Premier League⚽📺🏆🇸🇴 ", subtitle: "SUPER SUNDAY", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 4, title: "Wrestling WWE💥💫 🇸🇴⚽📺🏆 ", subtitle: "LIVE MATCH", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia🇸🇴🇬🇲⚽📺 ", status: "Live", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia🇬🇲🇸🇴📺 ", status: "Live", bg: "from-red-500 to-green-600" },
  { country: "Kenya🇰🇪📺 ", status: "Available", bg: "from-green-700 to-white/10" },
];

const HIGHLIGHTS = [
  { title: "Goals Highlights 🔥", duration: "10 min" },
  { title: "Match Recap 📋", duration: "15 min" },
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
      {/* Header sida 1000287129.jpg */}
      <div className="p-4 flex justify-between items-center border-b border-white/5">
        <h1 className="text-lg font-black">Ahmed Abdikani LIVE TV</h1>
        <button className="text-xl">🔔</button>
      </div>

      {/* Player Area */}
      <div className="p-4">
        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 relative">
          <iframe src={`${activeStream || STREAM_URL}?autoplay=1&mute=1`} className="w-full h-full" />
        </div>
      </div>

      <AdsterraBanner />

      {/* Featured Sports sida 1000287129.jpg */}
      <div className="px-4 mb-6">
        <h2 className="font-bold mb-3">Featured Sports</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {SPORTS_CHANNELS.map((ch) => (
            <div key={ch.id} className={`shrink-0 w-64 h-36 bg-gradient-to-br ${ch.bg} rounded-xl p-4 flex flex-col justify-between`}>
              <div className="flex justify-between items-start">
                <div className="text-2xl">{ch.icon}</div>
                <span className="bg-white text-black text-[10px] font-black px-2 py-1 rounded-full">WATCH NOW</span>
              </div>
              <h3 className="font-bold text-sm">{ch.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Watch By Country sida 1000287116_2.jpg */}
      <div className="px-4 mb-6">
        <h2 className="font-bold mb-3">Watch By Country</h2>
        <div className="flex gap-3 overflow-x-auto">
          {WATCH_BY_COUNTRY.map((c, i) => (
            <div key={i} className={`shrink-0 w-32 h-24 bg-gradient-to-b ${c.bg} rounded-xl p-3`}>
              <p className="font-bold text-sm">{c.country}</p>
              <p className="text-[10px] text-white/70">{c.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights List */}
      <div className="px-4">
        <h2 className="font-bold mb-3">Recent Match Highlights</h2>
        {HIGHLIGHTS.map((h, i) => (
          <div key={i} className="bg-[#111122] p-3 rounded-xl mb-2 flex justify-between">
            <p className="text-xs font-bold">{h.title}</p>
            <p className="text-[10px] text-gray-400">{h.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
