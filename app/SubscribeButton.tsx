'use client';

export default function SubscribeButton() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 999999, 
      width: '90%', 
      textAlign: 'center' 
    }}>
      <button 
        onClick={() => {
            (window as any).OneSignalDeferred = (window as any).OneSignalDeferred || [];
            (window as any).OneSignalDeferred.push(async (OneSignal: any) => {
                await OneSignal.showNativePrompt();
            });
        }}
        style={{ 
          padding: '12px 24px', 
          backgroundColor: '#ff0000', 
          color: '#ffffff', 
          border: 'none', 
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
        }}
      >
        Subscribe to Notifications
      </button>
    </div>
  );
}
