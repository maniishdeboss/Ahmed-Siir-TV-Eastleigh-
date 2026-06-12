import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import SubscribeButton from './SubscribeButton' // Halkan ayaan kaga soo wacnay faylkii cusbaa

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
        <Script 
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" 
          defer 
        />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            window.OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "d5e7c99a-391f-4191-b811-e2b199450cfa",
                safari_web_id: "web.onesignal.auto.694eada3-a476-4a33-8c61-99aa6c1d60b0",
              });
            });
          `}
        </Script>
      </head>
      <body>
        <SubscribeButton /> 
        {children}
      </body>
    </html>
  )
}
