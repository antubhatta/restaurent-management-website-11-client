import { useState } from "react";
import FoodCard from "./FoodCard";
import { SearchBar } from "./SearchBar";
import { Pagination } from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { useFoodsCount } from "../../hooks/useFoodCount";
import axios from "axios";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet-async";

const Foods = () => {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { totalFoods } = useFoodsCount();

  const { data: foods = [], isPending } = useQuery({
    queryKey: ["foods", currentPage, pageSize],
    queryFn: async function getFoods() {
      const response = await axios.get(
        `http://localhost:5000/foods?page=${currentPage}&size=${pageSize}`,
        { withCredentials: true }
      );
      return response.data;
    },
  });

  if (isPending) return <Loader />;

  const totalPages = Math.ceil((totalFoods?.count || 10) / pageSize);

  const handleSearch = () => {
    const results = foods.filter((food) =>
      food.food_name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const data = value ? searchResults : foods;

  return (
    <div className=" container mx-auto px-3 md:px-0 my-10">
      <Helmet>
        <title>Food Delivery - EatsHub</title>
      </Helmet>
      <SearchBar value={value} setValue={setValue} onSearch={handleSearch} />
      {data?.length === 0 && (
        <div className="mt-20 mb-[30vh] w-full flex justify-center">
          <p className="text-neutral-500 font-medium">No food found.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          setCurrentPage(newPage);
          setValue("");
        }}
      />
    </div>
  );
};

export default Foods;
