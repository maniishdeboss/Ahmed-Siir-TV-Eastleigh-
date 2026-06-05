const MOCK_MATCHES: { [key: string]: Match[] } = {
  'fifa-world-cup-2026': [{
    id: 1, league: 'FIFA World Cup 2026', home_team: 'Argentina', away_team: 'Germany', 
    home_logo: 'https://flagcdn.com/w80/ar.png', away_logo: 'https://flagcdn.com/w80/de.png',
    home_score: 2, away_score: 1, match_time: new Date().toISOString(), is_live: true,
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'epl': [{
    id: 2, league: 'EPL', home_team: 'Man United', away_team: 'Liverpool',
    home_logo: 'https://resources.premierleague.com/premierleague/badges/t1.png', away_logo: 'https://resources.premierleague.com/premierleague/badges/t14.png',
    home_score: 3, away_score: 1, match_time: new Date().toISOString(), is_live: true,
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }],
  'uefa-champions-league': [{
    id: 3, league: 'UCL', home_team: 'Real Madrid', away_team: 'Man City',
    home_logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', away_logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    home_score: 2, away_score: 2, match_time: new Date().toISOString(), is_live: true,
    link_1: 'https://test-streams.mux.dev/x36xhzz.m3u8', link_2: 'https://test-streams.mux.dev/x36xhzz.m3u8'
  }]
}
