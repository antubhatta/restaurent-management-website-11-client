import { BsTrash } from "react-icons/bs";
import { useOrders } from "../../hooks/useOrders";
import { useDeleteOrder } from "../../hooks/useDeleteOrder";
import { Helmet } from "react-helmet-async";

const Orders = () => {
  const { orders, isPending } = useOrders();
  const { deleteOrder } = useDeleteOrder();

  if (isPending) return <div>Loading...</div>;

  if (orders?.length === 0)
    return (
      <div className="mt-28 font-medium w-full min-h-[60vh] flex items-center justify-center">
        <p>You haven&apos;t placed any orders yet.</p>
      </div>
    );

  return (
    <div className="container max-w-5xl mx-auto px-3 md:px-0 mt-20 p-8 space-y-4 bg-gray-100 rounded-lg shadow-lg">
      <Helmet>
        <title>Your Orders - EatsHub</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Your Orders
      </h1>
      {orders?.map((order) => (
        <div
          key={order._id}
          className="w-full flex items-center justify-between space-x-8 bg-white p-4 rounded-md shadow-md"
        >
          <img
            src={order.imageUrl}
            alt={order.name}
            className="h-16 w-20 rounded-md object-cover"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-1 text-gray-800">
              {order.name}
            </h3>
            <div className="flex items-center text-gray-600">
              <span className="mr-2">{order.quantity} items</span>
              <span>{order.price}</span>
            </div>
          </div>
          <button
            onClick={() => deleteOrder(order._id)}
            className="text-red-500 ml-auto focus:outline-none"
          >
            <span className="md:text-xl"><BsTrash /></span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
