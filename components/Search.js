const Search = () => {
  return (
    <div>
      <div className="bg-white flex items-center rounded-full shadow-md ">
        <input
          className="w-full py-1 px-6 rounded-full leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="search"
        />
        <div className="p-1">
          <button className="bg-secondary text-gray-700 rounded-full p-1 hover:bg-primary hover:text-white focus:outline-none flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
