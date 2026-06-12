'use client';

export default function SubscribeButton() {
  return (
    <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 999999 }}>
      <button 
        onClick={() => {
            // Hubi in OneSignal uu jiro ka hor inta aan la wicin
            const OneSignal = (window as any).OneSignal;
            if (OneSignal) {
                OneSignal.push(async () => {
                    await OneSignal.showNativePrompt();
                });
            } else {
                // Halkan ayaan ku daray log si aad u ogaato haddii uu SDK-gu maqan yahay
                console.log("OneSignal SDK weli ma rarnin");
            }
        }}
        style={{ 
          padding: '10px 15px', 
          backgroundColor: '#ff0000', 
          color: '#ffffff', 
          border: 'none', 
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
