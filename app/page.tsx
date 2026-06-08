'use client'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {
  
  const handleStreamClick = () => {
    window.open(ADSTERRA_URL, "_blank");
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4 font-sans">
      
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold">Ahmed Abdikani LIVE TV 🇸🇴 🖥️</h1>
        <p className="text-[10px] text-gray-400">Ciyaaraha Caalamiga ah oo Toos ah</p>
      </div>

      <h2 className="text-[10px] font-bold text-yellow-500 mb-3 uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        🔴 CIYAARAHA MAANTA TOOS U SOCDA
      </h2>

      <div className="space-y-4">
        {/* Match 1 */}
        <div className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs">beIN SPORTS HD 1 vs Beinmatch Live</span>
            <span className="text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">LIVE NOW</span>
          </div>
          <div className="flex gap-2">
            <button onClick={handleStreamClick} className="flex-1 py-2 bg-yellow-500 text-black rounded-lg text-xs font-bold">Stream 2 ↗</button>
            <button onClick={handleStreamClick} className="flex-1 py-2 bg-blue-600 rounded-lg text-xs font-bold">Stream 3 ↗</button>
          </div>
        </div>

        {/* Match 2 */}
        <div className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs">YouTube Live Match vs Alternative Stream</span>
            <span className="text-[9px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">LIVE NOW</span>
          </div>
          <div className="flex gap-2">
            <button onClick={handleStreamClick} className="flex-1 py-2 bg-yellow-500 text-black rounded-lg text-xs font-bold">Stream 2 ↗</button>
            <button onClick={handleStreamClick} className="flex-1 py-2 bg-blue-600 rounded-lg text-xs font-bold">Stream 3 ↗</button>
          </div>
        </div>
      </div>

      {/* HORYAALLADA */}
      <div className="mt-8">
        <h3 className="text-[10px] text-gray-400 mb-3 uppercase tracking-widest">HORYAALLADA NAADIGA</h3>
        <div className="grid grid-cols-2 gap-2 text-xs font-bold">
          <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-700">⚽ FIFA World Cup 2026</div>
          <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-700">⚽ EPL</div>
          <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-700">🏆 UEFA Champions League</div>
          <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-700">🇪🇸 La Liga</div>
          <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-700">🇮🇹 Serie A</div>
          <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-700">🇩🇪 Bundesliga</div>
        </div>
      </div>
    </div>
  )
}
