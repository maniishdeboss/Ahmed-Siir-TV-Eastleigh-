"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Match {
  id: number;
  channel_1: string;
  channel_2: string;
  channel_3: string;
  channel_4: string;
  upcoming: string;
  link_1: string;
  link_2: string;
}

export default function LeaguePage() {
  const params = useParams();
  const league = params?.league as string;

  const [matches, setMatches] = useState<Match[]>([]);
  const [activeStream, setActiveStream] = useState<string | null>(null);
  const [currentMatchTitle, setCurrentMatchTitle] = useState<string>("");

  useEffect(() => {
    // Koodhkan wuxuu si toos ah xogta uga soo jiidayaa GitHub links.json-kaaga weyn
    fetch("https://raw.githubusercontent.com/maniishdeboss/v0-sports-live-website/main/links.json")
      .then((res) => res.json())
      .then((data) => setMatches(data))
      .catch((err) => console.error("Error loading links:", err));
  }, []);

  const handleStreamClick = (link: string, matchTitle: string) => {
    // Haddii uu yahay Adsterra Smartlink, tab cusub ha u furo si dakhli u dhalan karo
    if (link.includes("effectivecpmnetwork.com") || link.includes("adsterra")) {
      window.open(link, "_blank");
    } else {
      // Haddii uu yahay link-ga ciyaaraha, ku dhex fur Player-ka gudaha app-ka
      setActiveStream(link);
      setCurrentMatchTitle(matchTitle);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white p-4 font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link href="/" className="text-xl mr-4 hover:text-gray-400">
          ←
        </Link>
        <h1 className="text-2xl font-bold capitalize">{league?.replace("-", " ")}</h1>
      </div>

      {/* WATCH FOOTBALL LIVE NOW Banner */}
      <div className="w-full bg-red-600 text-center py-3 rounded-lg font-bold text-lg mb-6 animate-pulse">
        🔴 WATCH FOOTBALL LIVE NOW
      </div>

      {/* IN-APP VIDEO PLAYER COMPONENT */}
      {activeStream && (
        <div className="w-full max-w-2xl mx-auto bg-[#1b263b] rounded-xl p-4 border border-red-500 mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
              <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider">
                Ahmed Live TV Player — {currentMatchTitle}
              </h2>
            </div>
            <button
              onClick={() => setActiveStream(null)}
              className="bg-gray-700 hover:bg-gray-600 text-xs px-3 py-1 rounded-md transition"
            >
              Xir Player-ka
            </button>
          </div>

          {/* Aspect Ratio Box ee Iframe-ka */}
          <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src={activeStream}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              allow="autoplay; encrypted-media; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms"
            ></iframe>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Haddii baahintu istaagto ama ay jarto, fadlan dib u riix badhanka Stream-ka.
          </p>
        </div>
      )}

      {/* MATCHES LIST */}
      <div className="max-w-xl mx-auto space-y-4">
        {matches.length === 0 ? (
          <p className="text-center text-gray-400">Ciyaaro diyaar ah ma jiraan hadda...</p>
        ) : (
          matches.map((match) => (
            <div
              key={match.id}
              className="bg-[#1b263b] rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition"
            >
              {/* Team Info Row */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3 w-2/5">
                  <img
                    src={match.home_logo}
                    alt={match.home_team}
                    className="w-10 h-10 rounded-full bg-gray-800 object-cover"
                  />
                  <span className="font-semibold text-sm truncate">{match.home_team}</span>
                </div>

                <div className="bg-green-600/20 text-green-400 text-xs font-bold px-2 py-1 rounded border border-green-600/30">
                  {match.match_time}
                </div>

                <div className="flex items-center space-x-3 w-2/5 justify-end">
                  <span className="font-semibold text-sm truncate text-right">{match.away_team}</span>
                  <img
                    src={match.away_logo}
                    alt={match.away_team}
                    className="w-10 h-10 rounded-full bg-gray-800 object-cover"
                  />
                </div>
              </div>

              {/* Stream Buttons Row */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    handleStreamClick(match.link_1, `${match.home_team} vs ${match.away_team}`)
                  }
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition text-center shadow-md shadow-blue-900/20"
                >
                  Stream 1
                </button>
                <button
                  onClick={() =>
                    handleStreamClick(match.link_2, `${match.home_team} vs ${match.away_team}`)
                  }
                  className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2.5 px-4 rounded-lg text-sm transition text-center shadow-md"
                >
                  Stream 2 (Ads)
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
