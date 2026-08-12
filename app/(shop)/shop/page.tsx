import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";

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

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold md:text-4xl">Shop</h1>

        <p className="mt-2 text-base-content/60">
          Explore our latest clothing collection.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <ProductFilters />
      </div>

      {/* Products */}
      <ProductGrid products={products} />
    </main>
  );
}
