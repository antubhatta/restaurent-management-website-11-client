import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { FormInput } from "../../Components/FormInput";
import { FormTextarea } from "../../Components/FormTextarea";
import { useLocation } from "react-router-dom";
import { useUpdateFood } from "../../hooks/useUpdateFood";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";

const FoodUpdate = () => {
  const {
    state: { food },
  } = useLocation();
  const { user } = useAuth();
  const { updateFood, isPending } = useUpdateFood();

  console.log(food);

  if (isPending) return <Loader />;

  food.price = food.price.replace("$", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const food_name = form.name.value;
    const description = form.description.value;
    const food_image = form.image.value;
    const food_category = form.category.value;
    const origin = form.origin.value;
    const price = form.price.value;
    const quantity = Number(form.quantity.value);
    const made_by = user?.displayName;
    const buyer_email = user?.email;

    if (
      !food_name ||
      !description ||
      !food_category ||
      !origin ||
      !price ||
      !quantity ||
      !made_by ||
      !buyer_email ||
      !food_image
    ) {
      return toast("Please fill all the fields");
    }
    updateFood({
      ...food,
      food_name,
      description,
      food_category,
      origin,
      price: `$${price}`,
      quantity,
      made_by,
      buyer_email,
      food_image,
    });
    form.reset();
  };

  return (
    <div className="my-16 container mx-auto">
      <Helmet>
        <title>Food Update - EatsHub</title>
      </Helmet>
      <h1 className="p-5 text-2xl text-center font-semibold  text-gray-900 bg-white ">
        Update Food
      </h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4">
        <FormInput defaultValue={food?.food_name} id="name" label="Food Name" />
        <FormInput
          defaultValue={food?.food_image}
          id="image"
          label="Food Image"
        />
        <FormTextarea
          defaultValue={food?.description}
          id="description"
          label="Food Description"
        />
        <FormInput
          defaultValue={food?.food_category}
          id="category"
          label="Food Category"
        />
        <FormInput
          defaultValue={food?.origin}
          id="origin"
          label="Food Origin"
        />
        <FormInput
          defaultValue={parseInt(food?.price)}
          id="price"
          label="Price"
          type="number"
          step="any"
        />
        <FormInput
          defaultValue={food?.quantity}
          id="quantity"
          label="Quantity"
          type="number"
          step="any"
        />

        <FormInput
          id="sellerName"
          label="User Name"
          readOnly
          defaultValue={user?.displayName}
        />
        <FormInput
          id="sellerEmail"
          label="Seller Email"
          defaultValue={user?.email}
          readOnly
        />

        <button
          disabled={isPending}
          type="submit"
          className="mt-6 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-indigo"
        >
          Update Food
        </button>
      </form>
    </div>
  );
};

export default FoodUpdate;
