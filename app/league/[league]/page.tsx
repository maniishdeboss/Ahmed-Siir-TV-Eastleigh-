'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function WatchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const url = searchParams.get('url')

  useEffect(() => {
    if (!url) return
    if (videoRef.current) {
      const video = videoRef.current

      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(url)
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play()
        })
      }
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
      }
    }
  }, [url])

  return (
    <div className="fixed inset-0 bg-black z-[9999]">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 z-50 bg-black/70 text-white px-4 py-2 rounded-lg text-sm"
      >
        ← Back
      </button>
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        className="w-screen h-screen object-contain bg-black"
      />
    </div>
  )
}
