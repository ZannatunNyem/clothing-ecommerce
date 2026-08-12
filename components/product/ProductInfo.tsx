import AddToCartButton from "./AddToCartButton";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
};

type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm font-medium text-primary">{product.category}</p>

      <h1 className="mt-2 text-3xl font-bold md:text-4xl">{product.name}</h1>

      <p className="mt-4 text-2xl font-semibold">
        ৳{product.price.toLocaleString()}
      </p>

      <p className="mt-6 leading-7 text-base-content/60">
        {product.description}
      </p>

      {/* Size */}
      <div className="mt-6">
        <p className="mb-2 font-semibold">Size</p>

        <div className="flex gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button key={size} className="btn btn-outline btn-sm">
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <p className="mb-2 font-semibold">Quantity</p>

        <input
          type="number"
          min="1"
          defaultValue="1"
          className="input input-bordered w-24"
        />
      </div>

      {/* Add to Cart */}
      <div className="mt-8">
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductInfo;
