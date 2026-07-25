export function FeaturesGrid() {
  const features = [
    {
      title: 'Fresh & Trusted',
      description: 'Direct from our dairy with guaranteed freshness and quality you can trust.',
    },
    {
      title: 'Convenient Delivery',
      description: 'Choose your delivery slot and we deliver right to your doorstep on time.',
    },
    {
      title: 'Premium Quality',
      description: 'All products are carefully sourced and tested for the highest standards.',
    },
    {
      title: 'Flexible Plans',
      description: 'Schedule your deliveries weekly, bi-weekly, or monthly as per your needs.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Why Choose MurliMadhav?
          </h2>
          <p className="text-lg text-[#8b7d70] max-w-2xl mx-auto">
            We're revolutionizing how you access fresh dairy by combining traditional quality
            with modern convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFE8DC]">
                  <span className="text-[#E8621B] text-lg font-bold">{index + 1}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#8b7d70]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
