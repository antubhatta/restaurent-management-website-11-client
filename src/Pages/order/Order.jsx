import { Link, useParams } from "react-router-dom";

import { OrderForm } from "../../Components/OrderForm";
import useFoodById from "../../hooks/useFoodById";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const { id } = useParams();

  const { food, isLoading, error } = useFoodById(id);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="mt-20">
        <p>{error?.message || "Something went wrong"}</p>
      </div>
    );

  if (food.quantity === 0)
    return (
      <div className="my-28 flex flex-col text-center mx-auto">
        <p className="text-red-500 mb-4">Out of stock</p>
        <Link to="/foods" className="mt-6">
          <button className="mt-6 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-indigo">
            Go to Foods
          </button>
        </Link>
      </div>
    );

  return (
    <div className="container max-w-3xl mx-auto px-3 md:px-0 my-20 flex flex-col gap-10">
                  <Helmet>
        <title>Create Order - EatsHub</title>
      </Helmet>
      <div>
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-2">{`Order for ${food.food_name}`}</h1>
      </div>
      <OrderForm food={food} />
    </div>
  );
};

export default Order;
