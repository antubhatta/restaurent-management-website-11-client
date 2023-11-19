import { Link } from "react-router-dom";


const TopFoodCard = ({food}) => {
    const {food_name, food_image,food_category,price,id}=food;
    return (
        <div className="rounded-xl overflow-hidden shadow-lg m-4">
      <div>
      <img
        className="w-full rounded-xl px-6 h-64 object-cover"
        src={food_image}
      />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{food_name}</div>
        <p className="text-gray-700 text-lg">{food_category}</p>
      </div>
      <div className="flex justify-between items-center">
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2">
          Price:{price}
        </span>
      </div>
      <div className="px-6">
      <Link to={`/singlePage/${id}`}>
      <button
          className="bg-gray-200  text-gray-700 font-bold py-2 px-4 rounded-full">
          Details
        </button>
      </Link>
      </div>
      </div>
    </div>
    );
};

export default TopFoodCard;