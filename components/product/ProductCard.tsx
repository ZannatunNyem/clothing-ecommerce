import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card overflow-hidden bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <figure className="relative aspect-[3/4] overflow-hidden bg-base-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <span className="badge badge-primary absolute left-3 top-3">
          {product.category}
        </span>
      </figure>

      {/* Product Info */}
      <div className="card-body p-4">
        <h3 className="line-clamp-1 text-base font-semibold">{product.name}</h3>

        <p className="font-bold text-primary">
          ৳{product.price.toLocaleString()}
        </p>

        <Link
          href={`/product/${product.id}`}
          className="btn btn-sm btn-outline mt-2 w-full rounded-full"
        >
          View Product
        </Link>

        <AddToCartButton
          product={{
            _id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
