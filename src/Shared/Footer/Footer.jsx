import logo from "../../assets/logoipsum-249.svg"
import { FaFacebook, FaInstagram,FaGithub } from 'react-icons/fa';
import { NavLink,Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-black dark:bg-slate-800 text-white py-8">
  <div className="container mx-auto flex p-6 lg:p-0 flex-col md:flex-row justify-between">
    <div className="mb-4 md:mb-0">
    <div className="flex gap-2 items-center">
              <img src={logo} alt="" />
              <Link to="/" className=" normal-case text-lg md:text-xl lg:text-2xl  dark:text-white font-bold"><p className="text-indigo-400" >EatsHub</p></Link>
               
              </div>
      <p className="text-base mt-2 md:text-lg">Restaurent Website Management</p>
    </div>
    <div className="mb-4 md:mb-0">
      <h3 className="text-lg lg:text-2xl font-semibold mb-2">Pages</h3>
      <ul className="lg:text-center">
      <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </div>
    <div className="mb-4 md:mb-0">
      <h3 className="text-lg lg:text-2xl font-semibold mb-2">Contact Information</h3>
      <p>Email: antubhatta09@gmail.com</p>
      <p>Phone: 01830833895</p>
      <p>Address: 1137 Nurerchala, Vatara, Ghulsan 1212</p> 
    </div>
  </div>
  <div className="flex justify-center mb-3 mt-5">
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/hd.antu.1" className="text-4xl"><FaFacebook></FaFacebook></a>
      <a href="#" className="text-4xl "><FaInstagram></FaInstagram></a>
      <a href="https://github.com/topics/login" className="text-4xl "><FaGithub></FaGithub></a>
     
    </div>
  </div>
  <div className="mt-8 text-center">
    <p>&copy; 2023 Restaurent website management. All rights reserved.</p>
  </div>
 
</footer>

    );
};

export default Footer;