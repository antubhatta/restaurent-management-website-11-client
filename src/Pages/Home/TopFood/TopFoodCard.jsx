import { Link } from "react-router-dom";

const TopFoodCard = ({ food }) => {
  const { food_name, food_image, food_category, price, _id } = food;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md m-4 border">
      <div>
        <img
          className="w-full h-64 object-cover"
          src={food_image}
          alt={food_name}
        />
      </div>
      <div className="p-6">
        <div className="font-bold text-2xl text-blue-500 mb-2">{food_name}</div>
        <p className="text-gray-700 text-lg">{food_category}</p>
      </div>
      <div className="flex justify-between items-center bg-gray-100 py-4">
        <div className="px-6">
          <span className="inline-block bg-green-500 text-white rounded-full px-4 py-2 text-lg font-semibold">
            ${price}
          </span>
        </div>
        <div className="px-6">
          <Link to={`/singlePage/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;
