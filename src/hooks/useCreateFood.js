import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useCreateFood() {
  const navigate = useNavigate();

  const {
    mutate: createFood,
    isPending,
    error,
  } = useMutation({
    mutationFn: async function createFood(food) {
      const response = await axios.post("https://restaurent-management-website-11-server.vercel.app/foods", food, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Food added successfully");
      navigate("/foods/users");
    },
  });

  return { createFood, isPending, error };
}
