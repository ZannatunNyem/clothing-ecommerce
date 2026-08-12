const ProductFilters = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <select className="select select-bordered">
        <option>All Categories</option>
        <option>Dresses</option>
        <option>Shirts</option>
        <option>Pants</option>
        <option>Tops</option>
      </select>

      <select className="select select-bordered">
        <option>Sort By</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest</option>
      </select>

      <select className="select select-bordered">
        <option>All Sizes</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
    </div>
  );
};

export default ProductFilters;
