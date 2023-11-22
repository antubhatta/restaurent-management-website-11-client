import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopFood from "../TopFood/TopFood";
import WhyChoose from "../Whychoose/WhyChoose";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - EatsHub</title>
      </Helmet>
      <Banner></Banner>
      <TopFood></TopFood>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
