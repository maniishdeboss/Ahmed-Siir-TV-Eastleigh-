import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script' 

export const metadata: Metadata = {
  title: 'Sports Live',
  description: 'Watch live sports streams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Kani waa koodka OneSignal ee ogeysiisyada kuu keenaya */}
        <Script 
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" 
          defer 
        />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
              OneSignal.init({
                appId: "D5e7c99a-391f-4191-b811-e2b199450cfa",
              });
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
