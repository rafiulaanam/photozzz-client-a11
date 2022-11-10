import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'/orders',
            element:<PrivateRoute><Orders></Orders></PrivateRoute>
           },
           {
            path:'/review',
            element:<PrivateRoute><Review></Review></PrivateRoute>
           },
           {
            path:'/services',
            element:<Services></Services>,
            loader:()=>fetch('http://localhost:5000/services')
           },
           {
            path:'/services/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
           }
        ]
    }
])