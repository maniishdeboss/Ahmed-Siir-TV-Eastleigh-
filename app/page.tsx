'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026🇸🇴⚽📺🏆 ", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Champions league 🇸🇴⚽📺🏆 ", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 3, title: "Premier League⚽📺🏆🇸🇴 ", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 4, title: "Wrestling WWE💥💫 🇸🇴⚽📺🏆 ", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia🇸🇴🇬🇲⚽📺 ", status: "Live", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia🇬🇲🇸🇴📺 ", status: "Live", bg: "from-red-500 to-green-600" },
  { country: "Kenya🇰🇪📺 ", status: "Available", bg: "from-green-700 to-white/10" },
];

const HIGHLIGHTS = [
  { title: "Wrestling WWE 💥", duration: "Live", url: "https://www.youtube.com/embed/videoseries?list=PL_mK3kFw1704D1qJ3-hB7y7K5G3u4A8hW" },
  { title: "Citizen TV Live 📺", duration: "Live", url: "https://www.youtube.com/embed/9o2hG11G_7o" },
  { title: "Mohamed Khadar Somali 🎤", duration: "Highlights", url: "https://www.youtube.com/embed/Pj-27R4aY_8" },
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

const OneSignalNotification = () => {
  useEffect(() => {
    const win = window as any;
    win.OneSignal = win.OneSignal || [];
    win.OneSignal.push(function() {
      win.OneSignal.init({ appId: "YOUR_ONESIGNAL_APP_ID" });
    });
  }, []);
  return (
    <button onClick={() => (window as any).OneSignal?.showSlidedownPrompt()} className="text-yellow-400 text-2xl">
      🔔
    </button>
  );
};

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  return (
    <div className="bg-[#06060f] min-h-screen text-white pb-28 font-sans">
      <Head>
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
      </Head>

      <div className="p-4 flex justify-between items-center border-b border-white/5">
        <h1 className="text-lg font-black truncate">🇬🇲🇸🇴📺 Ahmed Abdikani LIVE TV📺🇸🇴🇸🇴🇬🇲🔴 </h1>
        <OneSignalNotification />
      </div>

      <div className="p-4">
        <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 relative">
          {activeStream ? (
            <iframe src={`${activeStream}?autoplay=1&mute=1`} className="w-full h-full" allowFullScreen />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
              Fadlan dooro kanaal si aad u daawato
            </div>
          )}
        </div>
      </div>

      <AdsterraBanner />

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

      <div className="px-4">
        <h2 className="font-bold mb-3">Recent Match Highlights</h2>
        {HIGHLIGHTS.map((h, i) => (
          <div key={i} className="bg-[#111122] p-3 rounded-xl mb-2">
            <div className="flex justify-between mb-2">
              <p className="text-xs font-bold">{h.title}</p>
              <p className="text-[10px] text-gray-400">{h.duration}</p>
            </div>
            {h.url && (
              <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/5">
                <iframe 
                  src={h.url} 
                  className="w-full h-full" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
