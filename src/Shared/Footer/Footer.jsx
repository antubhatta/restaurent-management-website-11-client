import logo from "../../assets/logoipsum-249.svg"
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
      <a><svg xmlns="http://www.w3.org/2000/svg" width="175" height="47" viewBox="0 0 175 47" fill="none">
<ellipse cx="23.5" cy="23.2998" rx="23.5" ry="23" fill="white"/>
<path d="M24.9796 35.1714V23.3602H28.5295L29 19.2032H24.9796L24.9856 17.1224C24.9856 16.0382 25.0954 15.4575 26.7557 15.4575H28.9751V11.2998H25.4245C21.1595 11.2998 19.6586 13.3163 19.6586 16.7079V19.2035H17V23.3609H19.6586V35.004C20.6944 35.1975 21.7651 35.2998 22.8615 35.2998C23.5697 35.2998 24.2773 35.257 24.9796 35.1714Z" fill="#006AFF"/>
<ellipse cx="87.5" cy="23.2998" rx="23.5" ry="23" fill="white"/>
<path d="M83.2333 32.2998C91.9129 32.2998 96.6595 24.9907 96.6595 18.6525C96.6595 18.4449 96.6554 18.2383 96.6461 18.0325C97.5697 17.3532 98.3668 16.5122 99 15.5487C98.1545 15.9308 97.2446 16.188 96.2901 16.3039C97.2644 15.7101 98.0123 14.7707 98.3652 13.651C97.4389 14.2095 96.4255 14.6033 95.3688 14.8152C94.5077 13.8829 93.2817 13.2998 91.9243 13.2998C89.3184 13.2998 87.2052 15.4478 87.2052 18.0956C87.2052 18.4721 87.2466 18.8381 87.3276 19.1893C83.4057 18.9887 79.928 17.0801 77.6006 14.1779C77.1814 14.9099 76.9609 15.7418 76.9616 16.5887C76.9616 18.2528 77.7947 19.7219 79.0615 20.5813C78.3122 20.5581 77.5792 20.3523 76.9244 19.9814C76.9237 20.0015 76.9237 20.0211 76.9237 20.0427C76.9237 22.3656 78.5502 24.305 80.7094 24.7445C80.3039 24.8568 79.8855 24.9135 79.4651 24.9133C79.1616 24.9133 78.8658 24.8829 78.5783 24.8268C79.179 26.7326 80.9211 28.1195 82.9864 28.1582C81.3713 29.445 79.3368 30.2114 77.1256 30.2114C76.7494 30.2117 76.3736 30.1895 76 30.1449C78.0884 31.5056 80.5682 32.2995 83.2335 32.2995" fill="#1DA1F2"/>
<circle cx="152" cy="23.2998" r="23" fill="white"/>
<path d="M153.142 33.2736L147.193 33.1651C145.266 33.1273 143.335 33.2028 141.447 32.8111C138.574 32.226 138.37 29.3568 138.157 26.9502C137.864 23.5667 137.977 20.1218 138.531 16.7666C138.844 14.884 140.074 13.7606 141.977 13.6384C148.4 13.1947 154.865 13.2473 161.274 13.4543C161.951 13.4733 162.633 13.577 163.3 13.695C166.594 14.2707 166.675 17.5221 166.888 20.2592C167.101 23.0244 167.011 25.8039 166.604 28.5504C166.278 30.8244 165.653 32.7313 163.016 32.9154C159.712 33.1561 156.484 33.3499 153.171 33.2882C153.171 33.2736 153.152 33.2736 153.142 33.2736ZM149.645 27.5165C152.134 26.0913 154.577 24.6898 157.052 23.2741C154.558 21.8489 152.12 20.4474 149.645 19.0318V27.5165Z" fill="#FF0000"/>
</svg></a> 
     
    </div>
  </div>
  <div className="mt-8 text-center">
    <p>&copy; 2023 Restaurent website management. All rights reserved.</p>
  </div>
 
</footer>

    );
};

export default Footer;