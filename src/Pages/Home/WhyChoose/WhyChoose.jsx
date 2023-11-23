import { FaUtensils } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const WhyChoose = () => {
    return (
        <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-xl lg:text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
             
              <i className="flex justify-center text-red-500 mb-4 text-3xl"><FaUtensils></FaUtensils></i>
              <h3 className="text-base lg:text-xl font-bold mb-2">Exquisite Cuisine</h3>
              <p className="mx-6 lg:mx-0">Indulge in our chefs finest creations made from the freshest ingredients.</p>
            </div>
            <div className="text-center">
              {/* <i className="fas fa-hand-holding-heart fa-4x text-red-500 mb-4"></i> */}
              <i className="flex justify-center text-red-500 mb-4 text-3xl"><FaHandHoldingHeart></FaHandHoldingHeart></i>
              <h3 className="text-base lg:text-xl font-bold mb-2">Exceptional Service</h3>
              <p className="mx-6 lg:mx-0">Our team is dedicated to providing a delightful dining experience for every guest.</p>
            </div>
            <div className="text-center">
              {/* <i className="fas fa-users fa-4x text-red-500 mb-4"></i> */}
              <i className="flex justify-center text-red-500 mb-4 text-3xl"><FaUser></FaUser></i>
              <h3 className="text-base lg:text-xl font-bold mb-2">Customer-Centric Approach</h3>
              <p className="mx-6 lg:mx-0">We prioritize our customers needs, ensuring satisfaction and comfort.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyChoose;