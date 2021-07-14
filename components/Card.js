const Card = () => {
  return (
    <div className="mt-8">
      {/* cards go here */}
      <div className="bg-white rounded overflow-hidden shadow-md">
        <img src="/images/avacado-burger.jpeg" alt="avacado burger" className="w-full h-32 sm:h-48 object-cover"/>
        <div className="m-4">
          <span className="font-bold ">5 Bean Chilli Stew</span>
          <span className="block text-gray-500">Recipe by Mario</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
