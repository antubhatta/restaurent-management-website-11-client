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
        <p>You haven&apos;t any order yet.</p>
      </div>
    );

  console.log(orders);

  return (
    <div className="container max-w-5xl mx-auto px-3 md:px-0 mt-20 p-8 space-y-2 ">
      <Helmet>
        <title>Orders - EatsHub</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-10">Your Orders</h1>
      {orders?.map((order) => (
        <div
          key={order._id}
          className="w-full flex items-center justify-between space-x-8"
        >
          <img
            src={order.imageUrl}
            alt={order.name}
            className="h-16 w-20 rounded-sm"
          />
          <div>
            <h3 className="text-lg font-medium mb-1 text-dark-2">
              {order.name}
            </h3>
            <div className="space-x-2 text-dark-3">
              <span>{order.quantity} items</span>
              <span>{order.price}</span>
            </div>
          </div>
          <button
            onClick={() => deleteOrder(order._id)}
            className="text-red-500 ml-auto"
          >
            <BsTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;