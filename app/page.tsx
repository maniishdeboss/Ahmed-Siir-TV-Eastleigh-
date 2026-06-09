'use client'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function FootballPlayerPage() {

  const handleStreamClick = (url: string) => {
    window.open(ADSTERRA_URL, "_blank"); // Ads-ka
    window.open(url, "_blank");         // Link-ga ciyaarta
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      
      {/* Player Box */}
      <div className="bg-[#1A1A4B] border border-gray-700 rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-red-500 font-bold text-xs">🔴 AHMED LIVE TV PLAYER</span>
          <span className="text-[10px] bg-gray-700 px-2 py-1 rounded">Xir Player-ka</span>
        </div>
        
        <div className="text-center py-10">
          <p className="font-bold">Baahintu Waxay Diyaar Ku Tahay Stream-ka</p>
          <p className="text-[10px] text-gray-400 mt-2">Si aad u daawato ciyaarta adigoo adeegsanaya adeegga App-ka, fadlan guji badhanka hoose.</p>
          <button className="mt-4 bg-red-600 px-4 py-2 rounded text-xs font-bold">Foor Baahinta Tooska Ah 🚀</button>
        </div>
      </div>

      {/* Big Watch Button */}
      <button className="w-full bg-red-600 py-4 rounded-lg font-black mb-4 flex items-center justify-center gap-2">
        🔴 WATCH FOOTBALL LIVE NOW
      </button>

      {/* Streams Selection */}
      <div className="bg-[#1A1A4B] border border-gray-700 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
          <span className="font-bold text-xs">beIN SPORTS HD 1</span>
          <span className="ml-auto bg-red-500 text-[10px] px-2 py-0.5 rounded">LIVE</span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => handleStreamClick('https://beinmatch26.com/bein/live/20160')}
            className="flex-1 py-3 bg-blue-600 rounded text-xs font-bold"
          >
            Stream 1
          </button>
          <button 
            onClick={() => handleStreamClick('https://beinmatch26.com/bein/live/20160')}
            className="flex-1 py-3 bg-gray-600 rounded text-xs font-bold"
          >
            Stream 2
          </button>
        </div>
      </div>
    </div>
  )
}
