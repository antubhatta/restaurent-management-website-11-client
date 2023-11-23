import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useTopFood() {
  const {
    data: foods,
    isPending,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async function getTopSellingFood() {
      try {
        const response = await axios.get("https://restaurent-management-website-11-server.vercel.app/top/foods", {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        throw new Error("Top foods could not be loaded.");
      }
    },
  });

  return { foods, isPending, error };
}
