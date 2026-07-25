interface ModernHeroProps {
  onContactClick: () => void;
}

export function ModernHero({ onContactClick }: ModernHeroProps) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl mx-auto">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1a1a1a]">
          Fresh Dairy, Delivered Daily
        </h1>

        <p className="text-lg md:text-xl text-[#8b7d70] max-w-2xl mx-auto leading-relaxed">
          Direct from our dairy to your doorstep. Experience authentic, fresh dairy products
          with trusted quality and convenient digital ordering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={onContactClick}
            className="px-8 py-3 rounded-full bg-[#E8621B] text-white font-medium hover:bg-[#d14513] transition-colors"
          >
            Contact Us
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-[#1a1a1a] text-[#1a1a1a] font-medium hover:bg-[#f5f1eb] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
