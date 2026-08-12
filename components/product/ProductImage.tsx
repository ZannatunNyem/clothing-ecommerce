type ProductImageProps = {
  image: string;
  name: string;
};

const ProductImage = ({ image, name }: ProductImageProps) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-base-200">
      <img
        src={image}
        alt={name}
        className="h-full max-h-[600px] w-full object-cover"
      />
    </div>
  );
};

export default ProductImage;
