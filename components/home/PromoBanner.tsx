const PromoBanner = () => {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary">
        <div className="flex flex-col items-center justify-between gap-8 px-6 py-12 text-center text-primary-content md:flex-row md:px-12 md:text-left">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em]">
              Limited Time Offer
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Get 20% Off Your First Order
            </h2>

            <p className="mt-3 opacity-80">
              Use code <span className="font-bold">WELCOME20</span> at checkout.
            </p>
          </div>

          <button className="btn rounded-full border-none bg-white px-8 text-primary hover:bg-base-200">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
