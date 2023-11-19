
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const loader = useLoaderData();
  const {
    food_image,
    food_name,
    food_category,
    price,
    made_by,
    food_origin,
    description,
  } = loader;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-xl w-full bg-white rounded-lg overflow-hidden shadow-xl">
        <img
          className="h-64 md:h-72 w-full object-cover rounded-t-lg"
          src={food_image}
          alt={food_name}
        />
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{food_name}</h2>
          <p className="text-gray-600 text-sm md:text-base mb-2">
            <span className="text-base md:text-lg text-black font-bold">Category:</span> {food_category}
          </p>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
            <span className="text-base md:text-lg text-black font-bold">Price:</span> {price}
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            <span className="text-base md:text-lg text-black font-bold">Made By:</span> {made_by}
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            <span className="text-base md:text-lg text-black font-bold">Origin:</span> {food_origin}
          </p>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            <span className="text-base md:text-lg text-black font-bold">Description:</span> {description}
          </p>
          <button className="mt-6 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-indigo">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
