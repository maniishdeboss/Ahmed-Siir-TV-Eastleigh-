'use client'
import Link from 'next/link'

// Link-gaaga xayeysiiska
const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {
  
  // Shaqada Ads-ka (Ads-ka 2 ayaa furmaya: midkaaga iyo kan ciyaarta)
  const handleStreamClick = (streamUrl: string) => {
    window.open(ADSTERRA_URL, "_blank"); // Ads 1
    window.open(streamUrl, "_blank");    // Ads 2 / Stream
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white pb-10 font-sans">
      
      <div className="bg-[#1A1A4B] p-4 text-center border-b border-gray-800">
        <h1 className="text-xl font-black">Ahmed Abdikani LIVE TV 🇸🇴 🖥️</h1>
        <p className="text-[11px] text-gray-400">Ciyaaraha Caalamiga ah oo Toos ah</p>
      </div>

      <div className="p-4 max-w-xl mx-auto">
        <h2 className="text-xs font-bold text-yellow-400 mb-4 uppercase flex items-center gap-2">
          🔴 CIYAARAHA MAANTA TOOS U SOCDA
        </h2>

        <div className="space-y-4">
          <div className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-800">
            <p className="text-xs font-bold mb-4">France vs Belgium</p>
            <div className="flex gap-3">
              <button 
                onClick={() => handleStreamClick('https://beinmatch26.com/bein/live/20160')}
                className="flex-1 py-3 bg-green-600 rounded-xl text-xs font-black"
              >
                CHANNEL 1 ↗
              </button>
              <button 
                onClick={() => handleStreamClick('https://beinmatch26.com/bein/live/20160')}
                className="flex-1 py-3 bg-yellow-500 text-black rounded-xl text-xs font-black"
              >
                CHANNEL 2 ↗
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase">HORYAALLADA NAADIGA</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-800 text-xs font-bold">⚽ FIFA World Cup 2026</div>
            <div className="bg-[#1A1A4B] p-3 rounded-lg border border-gray-800 text-xs font-bold">⚽ EPL</div>
          </div>
        </div>
      </div>
    </div>
  )
}
