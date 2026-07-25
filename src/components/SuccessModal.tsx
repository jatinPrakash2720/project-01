'use client';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function SuccessModal({ isOpen, onClose, message = 'Thank you!' }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm z-50 bg-white rounded-xl shadow-xl p-8">
        <div className="flex flex-col items-center gap-6">
          <div
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-scale-in"
            style={{
              animation: 'scale-in 0.5s ease-out',
            }}
          >
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Message Received!</h3>
            <p className="text-[#8b7d70] max-w-xs">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2 bg-[#E8621B] text-white font-medium rounded-lg hover:bg-[#d14513] transition-colors mt-2"
          >
            Close
          </button>
        </div>

        <style>{`
          @keyframes scale-in {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </>
  );
}
