import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useCreateFood } from "../../hooks/useCreateFood";
import { FormInput } from "../../Components/FormInput";
import { FormTextarea } from "../../Components/FormTextarea";
import { Helmet } from "react-helmet-async";

const NewFood = () => {
  const { user } = useAuth();
  const { createFood, isPending } = useCreateFood();

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

    createFood({
      food_name,
      description,
      food_category,
      origin,
      price: `$${price}`,
      quantity,
      made_by,
      buyer_email,
      food_image,
      order_count: 0,
    });
    form.reset();
  };

  return (
    <div className="my-20">
      <Helmet>
        <title>New Food - EatsHub</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center mb-8">Add New Food</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-6 lg:mx-auto space-y-4">
        <FormInput id="name" label="Food Name" />
        <FormInput id="image" label="Food Image" />
        <FormTextarea id="description" label="Food Description" />
        <FormInput id="category" label="Food Category" />
        <FormInput id="origin" label="Food Origin" />
        <FormInput id="price" label="Price" type="number" step="any" />
        <FormInput id="quantity" label="Quantity" type="number" step="any" />

        <FormInput
          id="buyer_name"
          label="User Name"
          readOnly
          defaultValue={user?.displayName}
        />
        <FormInput
          id="buyer_email"
          label="Seller Email"
          defaultValue={user?.email}
          readOnly
        />

        <button
          disabled={isPending}
          type="submit"
          className="mt-6 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-indigo"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default NewFood;
