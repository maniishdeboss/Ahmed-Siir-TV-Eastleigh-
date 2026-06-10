'use client'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

// Si aanan u furin xayeysiis mar walba oo la gujiyo, waxaan isticmaalayaa variable yar
let adOpened = false;

export default function HomePage() {
  
  const handleStreamClick = (url: string) => {
    // Fur xayeysiiska hal mar oo keliya
    if (!adOpened) {
      window.open(ADSTERRA_URL, "_blank");
      adOpened = true;
    }
    // Furo ciyaarta tab cusub
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV 🔴</h1>
      
      {/* Badhanka WATCH NOW */}
      <button 
        onClick={() => handleStreamClick('https://www.youtube.com/live/ntjJKCjNmcE')}
        className="w-full bg-red-600 py-4 rounded-lg font-black mb-6 animate-pulse"
      >
        WATCH NOW LIVE 🔴
      </button>

      {/* Stream-ka 3 & 4 */}
      <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase">SELECT STREAM</h2>
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => handleStreamClick('https://www.youtube.com/live/7UlI4-Gcbok')} className="bg-green-600 py-3 rounded-lg font-bold">Stream 3</button>
        <button onClick={() => handleStreamClick('https://www.youtube.com/live/ntjJKCjNmcE')} className="bg-green-600 py-3 rounded-lg font-bold">Stream 4</button>
      </div>
    </div>
  )
}
