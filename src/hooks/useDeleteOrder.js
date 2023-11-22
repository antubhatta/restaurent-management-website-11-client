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
        `http://localhost:5000/orders/${id}`,
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
