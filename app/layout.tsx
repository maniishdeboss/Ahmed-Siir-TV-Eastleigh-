import './globals.css';
import OneSignalInit from '../components/OneSignalInit'; // Halkan ayaan kaga soo yeernay faylkaaga cusub

// Tani waxay ku qasbaysaa telefoonada inay u furaan boggaga sidii desktop oo kale
export const viewport = {
  width: 1200, 
  initialScale: 1,
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
