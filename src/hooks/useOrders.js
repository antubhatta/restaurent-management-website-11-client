import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export function useOrders() {
  const { user } = useAuth();

  const {
    data: orders,
    isPending,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async function getOrders() {
      const response = await axios.get(
        `http://localhost:5000/orders?email=${user?.email}`,
        { withCredentials: true }
      );
      return response.data;
    },
  });

  return { orders, isPending, error };
}
