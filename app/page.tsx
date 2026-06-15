// 1. Waxaan ku kordhiyay 'url' mid kasta oo ka mid ah xogtaada
const SPORTS_CHANNELS = [
  { id: 1, title: "FIFA World Cup 2026", url: "https://siir-tv.com/fifa-world-cup/", bg: "from-amber-500 to-yellow-600", icon: "🏆" },
  { id: 2, title: "Premier League", url: "https://siir-tv.com/premier-league/", bg: "from-purple-600 to-indigo-700", icon: "⚽" },
  { id: 3, title: "Champions League", url: "https://siir-tv.com/champions-league/", bg: "from-blue-600 to-cyan-700", icon: "🌍" },
];

const WATCH_BY_COUNTRY = [
  { country: "Somalia 🇸🇴", url: "https://siir-tv.com/somalia-live/", bg: "from-blue-500 to-blue-600" },
  { country: "Ogadenia 🇬🇲", url: "https://siir-tv.com/ogadenia-live/", bg: "from-red-500 to-green-600" },
  { country: "Kenya 🇰🇪", url: "https://siir-tv.com/kenya-live/", bg: "from-green-700 to-white/10" },
];

// 2. Waxaan beddelay onClick-ga kaararka si ay u isticmaalaan url-ka saxda ah
// Tusaale ahaan qaybta Featured Sports:
{SPORTS_CHANNELS.map((ch) => (
  <div 
    key={ch.id}
    onClick={() => setActiveStream(ch.url)} // Halkan ayuu link-ga gaarka ah ka shaqaynayaa
    className={`snap-center shrink-0 w-64 h-36 bg-gradient-to-br ${ch.bg} rounded-xl p-4 flex flex-col justify-between cursor-pointer`}
  >
    {/* ... code-ka kale */}
  </div>
))}

// 3. Tusaale ahaan qaybta Watch By Country:
{WATCH_BY_COUNTRY.map((item, idx) => (
  <div 
    key={idx}
    onClick={() => setActiveStream(item.url)} // Halkan ayuu link-ga gaarka ah ka shaqaynayaa
    className={`snap-center shrink-0 w-40 bg-gradient-to-b ${item.bg} p-4 rounded-xl flex flex-col justify-between h-28 cursor-pointer`}
  >
    {/* ... code-ka kale */}
  </div>
))}
