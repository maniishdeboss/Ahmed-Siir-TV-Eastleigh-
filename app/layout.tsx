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
