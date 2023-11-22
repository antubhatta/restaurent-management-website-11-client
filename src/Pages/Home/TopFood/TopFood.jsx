import TopFoodCard from "./TopFoodCard";
import { useTopFood } from "../../../hooks/useTopFood";
import Loader from "../../../Components/Loader";
import { Link } from "react-router-dom";

const TopFood = () => {
  const { foods, isPending, error } = useTopFood();

  if (isPending) return <Loader />;
  if (error) return <p>{error?.message || "Something went wrong"}</p>;

  return (
    <div className="mt-20 container mx-auto">
      <h3 className="text-4xl font-bold text-center mb-10">Top Selling Food</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {foods.map((foods) => (
          <TopFoodCard key={foods._id} food={foods}></TopFoodCard>
        ))}
      </div>
      <div className="text-center mb-20">
        <Link to="/foods">
          <button className="mt-6 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-indigo">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
