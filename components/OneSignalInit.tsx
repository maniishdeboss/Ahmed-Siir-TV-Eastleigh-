'use client'; // Tani waa qaybta ugu muhiimsan

import { useEffect } from 'react';
import Script from 'next/script';

export default function OneSignalInit() {
  useEffect(() => {
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
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
