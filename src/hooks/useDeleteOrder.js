import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteOrder,
    isPending,
    error,
  } = useMutation({
    mutationFn: async function deleteOrder(id) {
      const response = await axios.delete(
        `https://restaurent-management-website-11-server.vercel.app/orders/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast("Order deleted");
      queryClient.invalidateQueries("orders");
    },
  });

  return { deleteOrder, isPending, error };
}
