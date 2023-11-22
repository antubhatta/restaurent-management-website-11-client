import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Container";
import useFoodById from "../../hooks/useFoodById";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";

const SinglePage = () => {
  // const loader = useLoaderData();
  const { id } = useParams();
  const { food = [], isLoading } = useFoodById(id);
  console.log(id, food);

  if (isLoading) return <Loader />;

  const {
    _id,
    food_image,
    food_name,
    food_category,
    price,
    made_by,
    food_origin,
    description,
  } = food;

  return (
    <div className="flex justify-center items-center bg-gray-100 py-20">
      <Container>
        <Helmet>
          <title>{`${food_name} - EatsHub`}</title>
        </Helmet>
        <div className="w-full h-full  items-center justify-center">
          <div className=" w-full flex flex-col md:flex-row gap-10 rounded-lg overflow-hidden">
            <div className="flex-1">
              <img
                className="flex-1 h-64 md:h-[70vh] w-full object-cover rounded-t-lg "
                src={food_image}
                alt={food_name}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {food_name}
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-2">
                <span className="text-base md:text-lg text-black font-bold">
                  Category:
                </span>{" "}
                {food_category}
              </p>
              <p className="text-xl text-gray-700 font-semibold mb-2">
                <span className="text-base md:text-lg text-black font-bold">
                  Price:
                </span>{" "}
                {price}
              </p>
              <p className="text-gray-700 text-sm md:text-base mb-2">
                <span className="text-base md:text-lg text-black font-bold">
                  Made By:
                </span>{" "}
                {made_by}
              </p>
              <p className="text-gray-700 text-sm md:text-base mb-2">
                <span className="text-base md:text-lg text-black font-bold">
                  Origin:
                </span>{" "}
                {food_origin}
              </p>
              <p className="text-gray-700 text-sm md:text-base mb-2">
                <span className="text-base md:text-lg text-black font-bold">
                  Description:
                </span>{" "}
                {description}
              </p>
              <Link to={`/foods/order/${_id}`}>
                <button className="mt-6 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-indigo">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePage;
