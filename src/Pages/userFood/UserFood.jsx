import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useFoodsByEmail } from "../../hooks/useFoodsByEmail";
import { useDeleteFood } from "../../hooks/useDeleteFood";
import { BsTrash } from "react-icons/bs";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet-async";

const UserFood = () => {
  const { user } = useAuth();
  const { foods, isPending } = useFoodsByEmail(user?.email);
  const { deleteFood } = useDeleteFood();

  if (isPending) return <Loader />;

  if (foods.length === 0)
    return (
      <div className="mt-28 h-[60vh] font-medium flex items-center justify-center">
        <p>No food available</p>
      </div>
    );

  return (
    <div className="container mx-auto my-8 p-4 sm:p-8">
      <Helmet>
        <title>My Added Food - EatsHub</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        Your Added Food
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 text-base lg:text-xl px-4 border">Image</th>
              <th className="py-3 text-base lg:text-xl px-4 border">Name</th>
              <th className="py-3 text-base lg:text-xl px-4 border">Category</th>
              <th className="py-3 text-base lg:text-xl px-4 border">Price</th>
              <th className="py-3 text-base lg:text-xl px-4 border">Quantity</th>
              <th className="py-3 px-4 border"></th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id} className="bg-white border-b">
                <td className="py-4 px-4 border">
                  <div className="">
                  <img
                    src={food.food_image}
                    alt=""
                    className="h-20 w-20 text-center object-cover rounded-md"
                  />
                  </div>
                </td>
                <td className="py-4 text-base text-center lg:text-lg px-4 border">{food.food_name}</td>
                <td className="py-4 text-base text-center lg:text-lg px-4 border">{food.food_category}</td>
                <td className="py-4 text-base text-center lg:text-lg px-4 border">{food.price}</td>
                <td className="py-4 text-base text-center lg:text-lg px-4 border">{food.quantity}</td>
                <td className="py-4 text-base text-center lg:text-lg px-4 border text-right space-x-6">
                  <Link
                    state={{ food }}
                    to={`/food/update/${food._id}`}
                    className="text-blue-600 text-base text-center lg:text-lg hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteFood(food._id)}
                    className="text-red-600 text-center text-base lg:text-lg hover:underline"
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFood;
