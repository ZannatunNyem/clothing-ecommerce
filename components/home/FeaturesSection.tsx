const features = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Free delivery on orders over ৳3,000",
  },
  {
    icon: "↩️",
    title: "Easy Returns",
    description: "Simple and hassle-free returns",
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    description: "Your payment information is protected",
  },
  {
    icon: "💬",
    title: "Customer Support",
    description: "We're here to help whenever you need",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 rounded-2xl border border-base-200 bg-base-100 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {feature.icon}
              </div>

              <div>
                <h3 className="font-semibold">{feature.title}</h3>

                <p className="mt-1 text-sm text-base-content/60">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
