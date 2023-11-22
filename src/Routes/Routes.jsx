import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage";
import SinglePage from "../Pages/SinglePage/SinglePage";
import Foods from "../Pages/foods/Foods";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Order from "../Pages/order/Order";
import { PrivateRoute } from "../Components/PrivateRoute";
import NewFood from "../Pages/newFood/NewFood";
import UserFood from "../Pages/userFood/UserFood";
import FoodUpdate from "../Pages/foodUpdate/FoodUpdate";
import Orders from "../Pages/orders/Orders";
import Blogs from "../Pages/blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singlePage/:id",
        element: <SinglePage />,
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/foods/order/:id",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/foods/new",
        element: (
          <PrivateRoute>
            <NewFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/foods/users",
        element: (
          <PrivateRoute>
            <UserFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/food/update/:id",
        element: (
          <PrivateRoute>
            <FoodUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
