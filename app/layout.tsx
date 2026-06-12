import './globals.css';
import OneSignalInit from '../components/OneSignalInit'; // Halkan ayaan kaga soo yeernay faylkaaga cusub

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
