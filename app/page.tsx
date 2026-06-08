'use client'

const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/q837jyihaw?key=d55cb1f2f8b7f2b42fa4d820c07f4847";

// Halkan ku beddel link-yada aad rabto
const match1 = {
  stream2: "Halkan-ku-shub-link-ga-stream2-ee-kulan1",
  stream3: "https://www.youtube.com/live/8EwtVudEs5g?si=vMt4fRsBSQ1nBjBu"
};

const match2 = {
  stream2: "Halkan-ku-shub-link-ga-stream2-ee-kulan2",
  stream3: "Halkan-ku-shub-link-ga-stream3-ee-kulan2"
};

export default function HomePage() {
  
  const handleStreamClick = (url: string) => {
    window.open(ADSTERRA_URL, "_blank"); // Xayeysiiska
    window.open(url, "_blank");         // Link-ga ciyaarta
  };

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold">Ahmed Abdikani LIVE TV 🇸🇴 🖥️</h1>
      </div>

      <div className="space-y-4">
        {/* Match 1 */}
        <div className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-700">
          <p className="text-xs mb-4">beIN SPORTS HD 1 vs Beinmatch Live</p>
          <div className="flex gap-2">
            <button onClick={() => handleStreamClick(match1.stream2)} className="flex-1 py-2 bg-yellow-500 text-black rounded-lg text-xs font-bold">Stream 2 ↗</button>
            <button onClick={() => handleStreamClick(match1.stream3)} className="flex-1 py-2 bg-blue-600 rounded-lg text-xs font-bold">Stream 3 ↗</button>
          </div>
        </div>

        {/* Match 2 */}
        <div className="bg-[#1A1A4B] rounded-2xl p-4 border border-gray-700">
          <p className="text-xs mb-4">YouTube Live Match vs Alternative Stream</p>
          <div className="flex gap-2">
            <button onClick={() => handleStreamClick(match2.stream2)} className="flex-1 py-2 bg-yellow-500 text-black rounded-lg text-xs font-bold">Stream 2 ↗</button>
            <button onClick={() => handleStreamClick(match2.stream3)} className="flex-1 py-2 bg-blue-600 rounded-lg text-xs font-bold">Stream 3 ↗</button>
          </div>
        </div>
      </div>
    </div>
  )
}
