'use client';

export default function SubscribeButton() {
  return (
    <div style={{ padding: '15px', textAlign: 'center', backgroundColor: '#1a1a1a', zIndex: 9999, position: 'relative' }}>
      <button 
        onClick={() => {
            // Waxaan isticmaalaynaa OneSignalDeferred si loo hubiyo in SDK-gu diyaar yahay
            (window as any).OneSignalDeferred = (window as any).OneSignalDeferred || [];
            (window as any).OneSignalDeferred.push(async (OneSignal: any) => {
                await OneSignal.showNativePrompt();
            });
        }}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#ff0000', 
          color: '#ffffff', 
          border: 'none', 
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold',
          pointerEvents: 'auto' 
        }}
      >
        Subscribe to Notifications
      </button>
    </div>
  );
}
