'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Kudar koodkan yar si TypeScript u aqoonsado OneSignal
declare global {
  interface Window {
    OneSignalDeferred: any;
  }
}

export default function OneSignalInit() {
  useEffect(() => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal: any) {
      await OneSignal.init({
        appId: "d5e7c99a-391f-4191-b811-e2b199450cfa",
        notifyButton: {
          enable: true,
        },
      });
    });
  }, []);

  return (
    <Script 
      src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" 
      strategy="afterInteractive"
    />
  );
}
