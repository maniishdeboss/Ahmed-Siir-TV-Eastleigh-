'use client'

// Link-gaaga Xayeysiiska
const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

export default function HomePage() {
  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Ahmed Abdikani LIVE TV</h1>
      
      {/* Badhanka Cas */}
      <a href={ADSTERRA_URL} target="_blank" className="block w-full bg-red-600 py-4 rounded-lg font-black mb-6 text-center">
        🔴 WATCH FOOTBALL LIVE NOW
      </a>

      {/* Qaybta Horyaallada */}
      <div className="grid grid-cols-1 gap-4">
        {/* FIFA 2026 */}
        <div className="bg-[#1A1A4B] p-4 rounded-xl border border-gray-700">
          <div className="flex items-center gap-3 mb-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/FIFA_World_Cup_2026_logo.png" alt="FIFA 2026" className="w-10 h-10 object-contain" />
             <p className="text-sm font-bold">FIFA World Cup 2026</p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => window.open('https://beinmatch26.com/bein/live/20155', '_blank')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 1</button>
            <button onClick={() => window.open('https://beinmatch26.com/bein/live/20154', '_blank')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 2</button>
            <button onClick={() => window.open('https://beinmatch26.com/bein/live/20155', '_blank')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 3</button>
            <button onClick={() => window.open('https://beinmatch26.com/bein/live/20154', '_blank')} className="bg-gray-700 py-1 text-[10px] rounded">Ch 4</button>
          </div>
        </div>
        
        {/* Horyaallada kale waxaad u raacaysaa isla habkan */}
      </div>
    </div>
  )
}
