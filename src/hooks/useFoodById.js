import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFoodById = (id) => {
  const { data: food = [], isLoading } = useQuery({
    queryKey: ["food", id],
    queryFn: async function getFoodById() {
      const response = await axios.get(`https://restaurent-management-website-11-server.vercel.app/foods/${id}`, {
        withCredentials: true,
      });

      console.log("response", response.data);
      return response.data;
    },
  });

  return { food, isLoading };
};

export default useFoodById;
