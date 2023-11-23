import { QueryCache, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useCreateOrder() {
  const navigate = useNavigate();

  const {
    mutate: createOrder,
    isLoading,
    error,
  } = useMutation({
    mutationFn: async function createOrder(order) {
      const response = await axios.post("https://restaurent-management-website-11-server.vercel.app/orders", order, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: () => {
      toast("Order placed successfully");
      QueryCache.invalidateQueries("orders");
      navigate("/orders");
    },
  });

  return { createOrder, isLoading, error };
}
