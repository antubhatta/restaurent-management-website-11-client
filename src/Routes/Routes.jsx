import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage";
import SinglePage from "../Pages/SinglePage/SinglePage";
 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/singlePage/:id",
          element: <SinglePage></SinglePage>,
         
        },
      ],
    },
  ]);
  
  export default router;