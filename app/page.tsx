'use client'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

const LEAGUES = [
  { name: "FIFA World Cup 2026", icon: "🇸🇴 🏆🇬🇲 ", url: "https://beinmatch26.com/bein/live/20155" },
  { name: "Premier League", icon: "🇬🇲 ⚽🇸🇴 ", url: "https://beinmatch26.com/bein/live/20154" },
  { name: "Champions League", icon: "⚽", url: "https://www.youtube.com/live/7UlI4-Gcbok" },
  { name: "La Liga", icon: "🇸🇴 🇪🇸", url: "https://beinmatch26.com/bein/live/20159" },
  { name: "Serie A", icon: "🇮🇹", url: "https://beinmatch26.com/bein/live/20152" },
  { name: "Bundesliga", icon: "🇩🇪", url: "https://beinmatch26.com/bein/live/20160" }
];

export default function HomePage() {
  
  const handleStreamClick = (url: string) => {
    // Waxay fureysaa xayeysiiska iyo link-ga ciyaarta oo kala ah laba tab
    window.open(ADSTERRA_URL, "_blank");
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>
      
      {/* Badhanka ugu weyn ee WATCH NOW LIVE */}
      <button 
        onClick={() => handleStreamClick('https://www.youtube.com/live/ntjJKCjNmcE')}
        className="w-full bg-red-600 py-4 rounded-lg font-black mb-6 animate-pulse text-lg"
      >
        WATCH NOW LIVE/DAAWO HAADA🇬🇲🇸🇴😎 🔴
      </button>

      {/* Liiska Horyaallada */}
      <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase">LEAGUES</h2>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {LEAGUES.map((league) => (
          <button key={league.name} onClick={() => handleStreamClick(league.url)} className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700 text-left">
            <span className="text-xl">{league.icon}</span>
            <p className="text-xs font-bold mt-2">{league.name}</p>
          </button>
        ))}
      </div>

      {/* Qaybta Stream-ka 3 & 4 oo YouTube ah */}
      <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase">SELECT STREAM</h2>
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => handleStreamClick('https://www.youtube.com/live/7UlI4-Gcbok')} className="bg-green-600 py-3 rounded-lg font-bold">Stream 3</button>
        <button onClick={() => handleStreamClick('https://www.youtube.com/live/ntjJKCjNmcE')} className="bg-green-600 py-3 rounded-lg font-bold">Stream 4</button>
      </div>
    </div>
  )
}
