import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopFood from "../TopFood/TopFood";
import WhyChoose from "../Whychoose/WhyChoose";
import AboutUs from "../AboutUs/AboutUs";
import CustomerSay from "../CustomerSay/CustomerSay";
import Aos from "aos";

import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, [])
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
