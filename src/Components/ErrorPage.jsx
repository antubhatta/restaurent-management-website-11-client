import error1 from '../assets/istockphoto-537812190-1024x1024.jpg'
import { useRouteError } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
const ErrorPage = () => {
    const error =useRouteError()
    return (
      
      
         <div className="flex flex-col bg-gradient-to-br from-red-500 to-blue-500 items-center justify-center gap-4 min-h-screen ">
            {/* <h2 className="text-3xl lg:text-9xl  text-white font-extrabold">404</h2> */}
      {/* <p className="text-3xl text-white font-medium">Page {error.statusText || error.message}</p> */}
      {
        error.status === 404 && <div>
            {/* <p className="text-base lg:text-xl font-medium text-white">We encountered an error while processing your request.</p>
    <p className="text-base lg:text-xl font-medium text-white">Please try again later or contact support..</p> */}
   <img className='h-full rounded-xl w-full' src={error1} alt="" />
          <div className="flex justify-center">
          <Link to="/"><button className="text-lg lg:text-xl mt-4 bg-gradient-to-r from-blue-500 to-pink-500 transform hover:scale-105 font-medium rounded-2xl text-white px-5 py-3 ">Home Page</button></Link>
          </div>
        </div>
      }
      <Helmet>
        <title>Error Page - EatsHub</title>
      </Helmet>
        </div>
       
    );
};

export default ErrorPage;