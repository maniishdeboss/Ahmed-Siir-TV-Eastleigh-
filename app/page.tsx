'use client'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {
  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV</h1>
      
      {/* Ads-ka waxaa ku jira badhankan kaliya */}
      <a 
        href={ADSTERRA_URL} 
        target="_blank" 
        className="block w-full bg-red-600 py-4 rounded-lg font-black mb-6 text-center"
      >
        🔴 WATCH FOOTBALL LIVE NOW
      </a>

      <h2 className="text-xs font-bold text-gray-400 mb-3 uppercase">HORYAALLADA</h2>
      <div className="grid grid-cols-2 gap-3">
        
        {/* EPL - YouTube Links */}
        <div className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
          <p className="text-xs font-bold">EPL</p>
          <div className="flex gap-2 mt-3">
            <a href="https://www.youtube.com/embed/VZoPxuna9uM" target="_blank" className="flex-1 bg-blue-600 text-[10px] py-1 rounded text-center">Stream 1</a>
            <a href="https://www.youtube.com/embed/K_Pw3qP4Cpc" target="_blank" className="flex-1 bg-gray-600 text-[10px] py-1 rounded text-center">Stream 2</a>
          </div>
        </div>

        {/* FIFA - Beinmatch/Kora Links */}
        <div className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
          <p className="text-xs font-bold">FIFA World Cup 2026</p>
          <div className="flex gap-2 mt-3">
            <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="flex-1 bg-blue-600 text-[10px] py-1 rounded text-center">Stream 1</a>
            <a href="https://beinmatch26.com/bein/live/20154" target="_blank" className="flex-1 bg-gray-600 text-[10px] py-1 rounded text-center">Stream 2</a>
          </div>
        </div>

        {/* Champions League - Beinmatch/Kora Links */}
        <div className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
          <p className="text-xs font-bold">Champions League</p>
          <div className="flex gap-2 mt-3">
            <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="flex-1 bg-blue-600 text-[10px] py-1 rounded text-center">Stream 1</a>
            <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="flex-1 bg-gray-600 text-[10px] py-1 rounded text-center">Stream 2</a>
          </div>
        </div>

        {/* La Liga - Beinmatch/Kora Links */}
        <div className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
          <p className="text-xs font-bold">La Liga</p>
          <div className="flex gap-2 mt-3">
            <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="flex-1 bg-blue-600 text-[10px] py-1 rounded text-center">Stream 1</a>
            <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="flex-1 bg-gray-600 text-[10px] py-1 rounded text-center">Stream 2</a>
          </div>
        </div>

        {/* Serie A - Beinmatch/Kora Links */}
        <div className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
          <p className="text-xs font-bold">Serie A</p>
          <div className="flex gap-2 mt-3">
            <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="flex-1 bg-blue-600 text-[10px] py-1 rounded text-center">Stream 1</a>
            <a href="https://beinmatch26.com/bein/live/20155" target="_blank" className="flex-1 bg-gray-600 text-[10px] py-1 rounded text-center">Stream 2</a>
          </div>
        </div>

      </div>
    </div>
  )
}
