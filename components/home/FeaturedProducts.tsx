import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: "1",
    name: "Floral Summer Dress",
    price: 2490,
    image: "/images/products/dress-1.jpg",
    category: "Dresses",
  },
  {
    id: "2",
    name: "Classic Linen Shirt",
    price: 1890,
    image: "/images/products/shirt-1.jpg",
    category: "Shirts",
  },
  {
    id: "3",
    name: "Elegant Midi Dress",
    price: 2990,
    image: "/images/products/dress-2.jpg",
    category: "Dresses",
  },
  {
    id: "4",
    name: "Casual Wide Leg Pants",
    price: 2190,
    image: "/images/products/pants-1.jpg",
    category: "Pants",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 text-base-content/60">
              Our most loved styles, selected just for you.
            </p>
          </div>

          <button className="btn btn-outline rounded-full">View All</button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
