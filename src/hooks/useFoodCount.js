import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFoodsCount() {
  const { data: totalFoods } = useQuery({
    queryKey: ["foods", "count"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/count/foods", {
        withCredentials: true,
      });
      return res.data || 0;
    },
  });

  return { totalFoods };
}
