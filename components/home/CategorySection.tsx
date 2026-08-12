const categories = [
  {
    name: "Women",
    image: "/images/categories/women.jpg",
  },
  {
    name: "Men",
    image: "/images/categories/men.jpg",
  },
  {
    name: "Kids",
    image: "/images/categories/kids.jpg",
  },
  {
    name: "Accessories",
    image: "/images/categories/accessories.jpg",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Shop By Category
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Find Your Style
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Explore our collections and discover something perfect for you.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group card overflow-hidden bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <figure className="relative h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

                <div className="absolute inset-0 flex items-end justify-center p-5">
                  <button className="btn btn-sm rounded-full border-none bg-white px-6 text-black hover:bg-primary hover:text-white">
                    {category.name}
                  </button>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
