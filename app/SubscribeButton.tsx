'use client'; // Muhiim: Tani waxay u sheegaysaa Next.js inuu yahay Client Component

export default function SubscribeButton() {
  return (
    <button 
      onClick={() => {
        if ((window as any).OneSignal) {
          (window as any).OneSignal.push((OneSignal: any) => {
            OneSignal.showNativePrompt();
          });
        }
      }}
      style={{ 
        padding: '10px 20px', 
        backgroundColor: '#ff0000', 
        color: '#fff', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Subscribe to Notifications
    </button>
  );
}
