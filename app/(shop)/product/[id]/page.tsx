import ProductImage from "@/components/product/ProductImage";
import ProductInfo from "@/components/product/ProductInfo";

const product = {
  id: "1",
  name: "Floral Summer Dress",
  price: 2490,
  image: "/images/products/dress-1.jpg",
  category: "Dresses",
  description:
    "A comfortable and elegant summer dress, perfect for casual and special occasions.",
};

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <ProductImage image={product.image} name={product.name} />

        <ProductInfo product={product} />
      </div>
    </main>
  );
}
