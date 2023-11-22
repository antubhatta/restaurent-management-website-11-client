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
    <div className="relative container my-16 mx-auto overflow-x-auto  ">
      <Helmet>
        <title>My Added Food - EatsHub</title>
      </Helmet>
      <h1 className="p-5 text-2xl text-center font-semibold  text-gray-900 bg-white ">
        Your Added Food
      </h1>
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food._id} className="bg-white border-b  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <img
                  src={food.food_image}
                  alt=""
                  className="h-12 w-12 object-cover rounded-md"
                />
              </th>
              <td className="px-6 py-4">{food.food_name}</td>
              <td className="px-6 py-4">{food.food_category}</td>
              <td className="px-6 py-4">{food.price}</td>
              <td className="px-6 py-4">{food.quantity}</td>
              <td className="px-6 py-4 text-right space-x-6">
                <Link
                  state={{ food }}
                  to={`/food/update/${food._id}`}
                  className="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteFood(food._id)}
                  className="font-medium text-red-600  hover:underline"
                >
                  <BsTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserFood;
