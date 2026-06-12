'use client';

export default function SubscribeButton() {
  return (
    <div style={{ position: 'fixed', top: '10px', zIndex: 999999 }}>
      <button 
        onClick={() => {
            alert("Badhanka waa la taabtay!"); // Tani waxay noo sheegaysaa haddii button-ka la taaban karo
            if ((window as any).OneSignal) {
                (window as any).OneSignal.push(async (OneSignal: any) => {
                    await OneSignal.showNativePrompt();
                });
            } else {
                alert("OneSignal weli ma diyaarsana");
            }
        }}
        style={{ padding: '15px', backgroundColor: 'red', color: 'white' }}
      >
        Subscribe
      </button>
    </div>
  );
}
