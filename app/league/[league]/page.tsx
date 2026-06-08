'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'

export default function LeaguePage() {
  const params = useParams()
  const league = params?.league as string
  
  // Halkan ku beddel ID-ga rasmiga ah ee YouTube-kaaga
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/lDePOyElEeY")

  return (
    <div className="bg-[#0A0A23] min-h-screen text-white p-4">
      <h1 className="text-xl font-bold capitalize mb-4">{league?.replace(/-/g, ' ')}</h1>

      {/* YouTube Player */}
      <div className="relative pt-[56.25%] w-full bg-black rounded-2xl overflow-hidden mb-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Button-yada Streams-ka */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setVideoUrl("https://www.youtube.com/embed/lDePOyElEeY")}
          className="py-3 bg-red-600 rounded-xl font-bold text-sm"
        >
          YouTube Live
        </button>
        
        <button 
          onClick={() => window.open("https://siiir.tv", "_blank")}
          className="py-3 bg-blue-600 rounded-xl font-bold text-sm"
        >
          Siiir TV (External)
        </button>
      </div>
    </div>
  )
}
