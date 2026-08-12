const SearchBar = () => {
  return (
    <div className="form-control">
      <div className="join">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered join-item w-64"
        />

        <button className="btn btn-primary join-item">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
