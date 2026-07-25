interface ModernNavigationProps {
  onContactClick: () => void;
}

export function ModernNavigation({ onContactClick }: ModernNavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[#faf7f3] border-b border-[#e5dcd3]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg tracking-tight">MurliMadhav</div>
        <button
          onClick={onContactClick}
          className="px-5 py-2 rounded-full bg-[#E8621B] text-white text-sm font-medium hover:bg-[#d14513] transition-colors"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
