import './globals.css';
import OneSignalInit from '../components/OneSignalInit'; // Halkan ayaan kaga soo yeernay faylkaaga cusub

// Tani waxay ku qasbaysaa telefoonada inay u furaan boggaga sidii desktop oo kale iyadoo dhan oo wada muuqata
export const viewport = {
  width: 1200, 
  initialScale: 0.35,  // Bogga wuxuu furmayaa isagoo dib u raddan (zoomed out) si uu dhan u muuqdo
  minimumScale: 0.35,  // Waxay u diadaysaa inuu isku dhoweeyo oo dacallada ka go'o
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OneSignalInit /> 
        {children}
      </body>
    </html>
  );
}
