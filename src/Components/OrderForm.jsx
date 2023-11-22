import { toast } from "react-toastify";

import { FormInput } from "./FormInput";
import { useCreateOrder } from "../hooks/useCreateOrder";
import { useAuth } from "../contexts/AuthContext";

export const OrderForm = ({ food }) => {
  const { user } = useAuth();

  console.log(user);

  const { createOrder, isLoading } = useCreateOrder();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const foodId = food._id;
    const name = form.name.value;
    const imageUrl = food.food_image;
    const price = parseFloat(form.price.value);
    const quantity = Number(form.quantity.value);
    const buyerName = user.displayName;
    const buyerEmail = user.email;
    const buyingDate = new Date().toISOString();

    if (food.sellerEmail === buyerEmail) {
      return toast.error("You can't buy your own food");
    }

    if (quantity > food.quantity) {
      return toast.error(`${quantity} items are not available`);
    }

    if (!name || !price || !quantity) {
      return toast.error("Please fill all the fields");
    }

    createOrder({
      foodId,
      name,
      imageUrl,
      price,
      quantity,
      buyerName,
      buyerEmail,
      buyingDate,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 space-y-4">
      <FormInput id="name" label="Food Name" defaultValue={food.food_name} />
      <FormInput
        id="price"
        label="Price"
        type="number"
        step="any"
        defaultValue={parseFloat(food.price.replace("$", ""))}
      />
      <FormInput
        id="quantity"
        label="Quantity"
        type="number"
        defaultValue={1}
      />
      <FormInput
        id="buyerName"
        label="Buyer Name"
        readOnly
        defaultValue={user.displayName}
      />
      <FormInput
        id="buyerEmail"
        label="Buyer Email"
        defaultValue={user.email}
        readOnly
      />

      {food.quantity > 0 && user?.email !== food?.buyer_email && (
        <button
          disabled={isLoading}
          className="mt-6 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-indigo"
        >
          Place Order
        </button>
      )}
    </form>
  );
};
