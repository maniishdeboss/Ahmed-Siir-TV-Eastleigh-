'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'

// Hubi in constant-yadan ay ka sarreeyaan function-ka HomePage
const STREAM_URL = "https://siir-tv.com/bein-sport-1/";

const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026🇸🇴⚽📺🏆 ", subtitle: "LIVE MATCH", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Champions league 🇸🇴⚽📺🏆 ", subtitle: "LIVE MATCH", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 3, title: "Premier League⚽📺🏆🇸🇴 ", subtitle: "SUPER SUNDAY", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 4, title: "Wrestling WWE💥💫 🇸🇴⚽📺🏆 ", subtitle: "LIVE MATCH", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia🇸🇴🇬🇲⚽📺 ", status: "Live", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia🇬🇲🇸🇴📺 ", status: "Live", bg: "from-red-500 to-green-600" },
  { country: "Kenya🇰🇪📺 ", status: "Available", bg: "from-green-700 to-white/10" },
];

const HIGHLIGHTS = [
  { title: "Goals Highlights 🔥", duration: "10 min" },
  { title: "Match Recap 📋", duration: "15 min" },
];

// ... (Halkan geli AdsterraBanner iyo OneSignalNotification) ...

export default function HomePage() {
  const [activeStream, setActiveStream] = useState<string | null>(null);

  // Marka aad koodhka ku dhejinayso, hubi in qaybta iframe-ka ay sidan u qoran tahay:
  // src={`${activeStream || STREAM_URL}?autoplay=1&mute=1`}
  
  return (
    // ... koodhka kale ee UI-ga ...
  )
}
