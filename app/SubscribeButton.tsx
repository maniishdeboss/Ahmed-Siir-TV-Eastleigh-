'use client'; // Tani waxay u sheegaysaa Next.js inuu yahay Client Component

export default function SubscribeButton() {
  return (
    <div style={{ padding: '15px', textAlign: 'center', backgroundColor: '#1a1a1a' }}>
      <button 
        onClick={() => {
            if ((window as any).OneSignal) {
                (window as any).OneSignal.push(async (OneSignal: any) => {
                    await OneSignal.showNativePrompt();
                });
            }
        }}
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
  );
}
