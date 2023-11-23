import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

export function useDeleteFood() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteFood,
    isPending,
    error,
  } = useMutation({
    mutationFn: async function deleteFood(id) {
      const response = await axios.delete(`https://restaurent-management-website-11-server.vercel.app/foods/${id}`, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: () => {
      toast("Food deleted");
      queryClient.invalidateQueries(["foods", "email"]);
    },
  });

  return { deleteFood, isPending, error };
}
