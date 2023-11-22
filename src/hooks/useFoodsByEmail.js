import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFoodsByEmail(email) {
  const {
    data: foods,
    isPending,
    error,
  } = useQuery({
    queryKey: ["foods", "email"],
    queryFn: async function getFoodByEmail() {
      const response = await axios.get(
        `http://localhost:5000/foods/user/${email}`,
        { withCredentials: true }
      );
      return response.data;
    },
  });

  return { foods, isPending, error };
}
