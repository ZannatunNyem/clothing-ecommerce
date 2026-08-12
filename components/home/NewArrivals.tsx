import ProductCard from "@/components/product/ProductCard";

const newProducts = [
  {
    id: "5",
    name: "Soft Cotton Kurti",
    price: 1690,
    image: "/images/products/kurti-1.jpg",
    category: "New",
  },
  {
    id: "6",
    name: "Relaxed Fit Blazer",
    price: 3490,
    image: "/images/products/blazer-1.jpg",
    category: "New",
  },
  {
    id: "7",
    name: "Pleated Long Skirt",
    price: 2290,
    image: "/images/products/skirt-1.jpg",
    category: "New",
  },
  {
    id: "8",
    name: "Classic Casual Top",
    price: 1490,
    image: "/images/products/top-1.jpg",
    category: "New",
  },
];

const NewArrivals = () => {
  return (
    <section className="bg-base-200/50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Just In
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">New Arrivals</h2>

          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Fresh styles have arrived. Discover our latest pieces.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
