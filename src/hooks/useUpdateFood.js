import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useUpdateFood() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: updateFood,
    isPending,
    error,
  } = useMutation({
    mutationFn: async function updateFood(food) {
      const response = axios.patch(
        `https://restaurent-management-website-11-server.vercel.app/foods/${food._id}`,
        food,
        { withCredentials: true }
      );
      return response.data;
    },
    onSuccess: () => {
      toast("Food updated successfully.");
      queryClient.invalidateQueries(["foods", "email"]);
      navigate("/foods/users");
    },
  });

  return { updateFood, isPending, error };
}
