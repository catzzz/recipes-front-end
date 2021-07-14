const Card = ({ image, name, creator, duration }) => {
  return (
    <div className="card hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold ">{name}</span>
        <span className="block text-gray-500">Recipe by {creator}</span>
      </div>
      <div className="badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-5 inline-block mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{duration} mins</span>
      </div>
    </div>
  );
};

export default Card;
