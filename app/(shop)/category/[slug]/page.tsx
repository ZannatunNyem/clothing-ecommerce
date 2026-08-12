import ProductGrid from "@/components/product/ProductGrid";

const products = [
  {
    id: "1",
    name: "Floral Summer Dress",
    price: 2490,
    image: "/images/products/dress-1.jpg",
    category: "Dresses",
  },
  {
    id: "3",
    name: "Elegant Midi Dress",
    price: 2990,
    image: "/images/products/dress-2.jpg",
    category: "Dresses",
  },
];

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Collection
        </p>

        <h1 className="mt-2 text-3xl font-bold md:text-4xl">{categoryName}</h1>

        <p className="mt-2 text-base-content/60">
          Explore our {categoryName.toLowerCase()} collection.
        </p>
      </div>

      <ProductGrid products={products} />
    </main>
  );
}
