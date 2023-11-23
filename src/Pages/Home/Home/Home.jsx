import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopFood from "../TopFood/TopFood";
import WhyChoose from "../Whychoose/WhyChoose";
import AboutUs from "../AboutUs/AboutUs";
import CustomerSay from "../CustomerSay/CustomerSay";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - EatsHub</title>
      </Helmet>
      <Banner></Banner>
      <TopFood></TopFood>
      <WhyChoose></WhyChoose>
      <AboutUs></AboutUs>
      <CustomerSay></CustomerSay>
    </div>
  );
};

export default Home;
