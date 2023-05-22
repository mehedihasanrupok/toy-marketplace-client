import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import SignIn from "../pages/SignIn/SignIn";
import Login from "../pages/LogIn/Login";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import UpdatedToy from "../pages/UpdatedToy/UpdatedToy";
import AllToy from "../pages/AllToy/AllToy";
import ViewDetails from "../pages/AllToy/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/signup',
                element: <SignIn></SignIn>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allToy',
                element: <AllToy></AllToy>
            },
            {
                path: 'mytoy',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/allToy/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addToy/${params.id}`)
            },
            {
                path: "mytoy/updateToy/:id",
                element: <UpdatedToy></UpdatedToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/addToy/${params.id}`)
            }
        ]
    },
]);

export default router;