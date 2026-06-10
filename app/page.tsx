'use client'
import { useState } from 'react'

// ... (LEAGUES constant sidaadii ayay u ahaanaysaa)

export default function HomePage() {
  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      {/* ... (Qaybaha kale ee koodhka) */}

      {/* Halkan waxaa ka muuqanaya Iframe-ka oo leh styling lagu hagaajiyay scrolling */}
      {activeIframe && (
        <div className="mb-6">
          <div className="w-full h-[50vh] rounded-lg overflow-y-auto bg-black border border-gray-600">
             <iframe 
               src={activeIframe} 
               className="w-full h-full" 
               allow="autoplay; encrypted-media" 
               allowFullScreen
               style={{ border: 'none' }}
             ></iframe>
          </div>
          <button 
            onClick={() => setActiveIframe(null)} 
            className="w-full mt-2 bg-gray-600 py-2 rounded-lg font-bold"
          >
            Close Player
          </button>
        </div>
      )}

      {/* ... (Qaybta Stream-ka) */}
    </div>
  )
}
