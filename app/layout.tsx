import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Waxaan u beddelaynaa strategy-ga si uu u rarto ka dib marka boggu diyaar noqdo */}
        <Script 
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" 
          strategy="afterInteractive"
        />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            window.OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "d5e7c99a-391f-4191-b811-e2b199450cfa",
                notifyButton: {
                  enable: true,
                },
              });
            });
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
