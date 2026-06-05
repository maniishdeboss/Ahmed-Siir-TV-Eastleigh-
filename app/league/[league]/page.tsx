'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Match = {
  id: number
  home_team: string
  away_team: string
  home_logo: string
  away_logo: string
  home_score: number
  away_score: number
  match_time: string
  link_1: string
  link_2: string
}

const MOCK_MATCHES: { [key: string]: Match[] } = {
  'fifa-world-cup-2026': [{
    id: 1, home_team: 'NASA Live', away_team: 'Space Station',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE 24/7',
    link_1: 'https://ntv1.akamaized.net/hls/live/2003878/NASA_NTV1-HLS/master.m3u8',
    link_2: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  }],
  'epl': [{
    id: 2, home_team: 'Red Bull Live', away_team: 'Extreme Sports',
    home_logo: 'https://images.squarespace-cdn.com/content/v1/5a4b1b1b4c326ddb41e9e5d5/1515023841129-8QZQZQZQZQZQZ/redbull-logo.png',
    away_logo: 'https://images.squarespace-cdn.com/content/v1/5a4b1b1b4c326ddb41e9e5d5/1515023841129-8QZQZQZQZ/redbull-logo.png',
    home_score: 0, away_score: 0, match_time: 'LIVE NOW',
    link_1: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
    link_2: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  }],
  'uefa-champions-league': [{
    id: 3, home_team: 'Bloomberg TV', away_team: 'News Live',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Bloomberg_Television_logo.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Bloomberg_Television_logo.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE 24/7',
    link_1: 'https://bloomberg.com/media-manifest/streams/phoenix-us.m3u8',
    link_2: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  }],
  'la-liga': [{
    id: 4, home_team: 'Test Stream', away_team: 'Mux Live',
    home_logo: 'https://mux.com/images/mux-logo-white.svg',
    away_logo: 'https://mux.com/images/mux-logo-white.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE NOW',
    link_1: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    link_2: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8'
  }],
  'serie-a': [{
    id: 5, home_team: 'Red Bull Live', away_team: 'Racing',
    home_logo: 'https://images.squarespace-cdn.com/content/v1/5a4b1b1b4c326ddb41e9e5d5/1515023841129-8QZQZQZQZQZQZQZQZ/redbull-logo.png',
    away_logo: 'https://images.squarespace-cdn.com/content/v1/5a4b1b1b4c326ddb41e9e5d5/1515023841129-8QZQZQZQZQZQZQZQZ/redbull-logo.png',
    home_score: 0, away_score: 0, match_time: 'LIVE 24/7',
    link_1: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
    link_2: 'https://ntv1.akamaized.net/hls/live/2003878/NASA_NTV1-HLS/master.m3u8'
  }],
  'bundesliga': [{
    id: 6, home_team: 'NASA Live', away_team: 'Earth View',
    home_logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    away_logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    home_score: 0, away_score: 0, match_time: 'LIVE NOW',
    link_1: 'https://ntv1.akamaized.net/hls/live/2003878/NASA_NTV1-HLS/master.m3u8',
    link_2: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8'
  }]
}

export default function LeaguePage() {
  const params = useParams()
  const league = params.league as string
  const matches = MOCK_MATCHES[league] || []

  return (
    <div className="bg-[#0A0A23] min-h-screen">
      <div className="bg-[#1A1A4B] p-
