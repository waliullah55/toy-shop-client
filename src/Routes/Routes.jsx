import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Test from "../Pages/Home/Test";
import AllToy from "../Pages/AllToy";
import ProductDetails from "../Pages/Home/Products/ProductDetails";
import Blog from "../Pages/Blog";
import AddToy from "../Pages/AddToy";
import MyToys from "../Pages/MyToys";
import PrivateRouter from "./PirvateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <Login/>
        }, 
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: 'details/:id',
          element: <PrivateRouter><ProductDetails/></PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path: '/allToy',
          element: <AllToy/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path:'/addToy',
          element: <AddToy/>
        },
        {
          path: '/myToys',
          element: <MyToys/>
        },
        {
          path: '/test',
          element: <Test/>
        }
      ]
    },
  ]);


  export default router;