const Card = ({image,name,creator, duration}) => {


  return (
    <div className="mt-8">
      {/* cards go here */}
      <div className="card">
        <img src={image} alt={name} className="w-full h-32 sm:h-48 object-cover"/>
        <div className="m-4">
          <span className="font-bold ">{name}</span>
          <span className="block text-gray-500">Recipe by {creator}</span>
        </div>
        <div className="badge">
            <span>{duration} mins</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
