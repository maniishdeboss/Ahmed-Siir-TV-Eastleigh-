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
        {/* OneSignal Web SDK */}
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
        {/* Badhan Subscribe ah */}
        <div style={{ padding: '15px', textAlign: 'center', backgroundColor: '#1a1a1a' }}>
          <button 
            onClick={() => (window as any).OneSignalDeferred.push(async (OneSignal: any) => {
              await OneSignal.showNativePrompt();
            })}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#ff0000', 
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Subscribe to Notifications
          </button>
        </div>
        {children}
      </body>
    </html>
  )
}
