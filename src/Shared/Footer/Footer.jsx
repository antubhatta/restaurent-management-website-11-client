import logo from "../../assets/logoipsum-249.svg";
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="" />
            <Link to="/" className="text-2xl font-bold">
              <span className="text-indigo-400">EatsHub</span>
            </Link>
          </div>
          <p className="text-base mt-2 md:text-lg">Restaurant Website Management</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg lg:text-2xl font-semibold mb-2">Pages</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/foods">Food</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg lg:text-2xl font-semibold mb-2">Contact Information</h3>
          <p>Email: antubhatta09@gmail.com</p>
          <p>Phone: 01830833895</p>
          <p>Address: 1137 Nurerchala, Vatara, Gulshan 1212</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/hd.antu.1" className="text-4xl"><FaFacebook /></a>
          <a href="#" className="text-4xl"><FaInstagram /></a>
          <a href="https://github.com/topics/login" className="text-4xl"><FaGithub /></a>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Restaurant Website Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
