const Banner = () => {
  return (
    <section className="hero min-h-[500px] bg-base-200">
      <div className="hero-content flex-col-reverse gap-10 lg:flex-row-reverse lg:gap-20">
        {/* Image */}
        <div className="w-full max-w-lg">
          <img
            src="/images/banner.jpg"
            alt="New clothing collection"
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            New Collection
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Find Your
            <span className="block text-primary">Perfect Style</span>
          </h1>

          <p className="my-6 text-base-content/70 md:text-lg">
            Discover stylish clothing made for every moment. Explore our latest
            collection and find something that feels uniquely you.
          </p>

          <div className="flex justify-center gap-3 lg:justify-start">
            <button className="btn btn-primary rounded-full px-7">
              Shop Now
            </button>

            <button className="btn btn-outline rounded-full px-7">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
