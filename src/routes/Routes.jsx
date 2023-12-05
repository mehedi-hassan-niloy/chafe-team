import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/home/Home";
import ChefDetails from "../ChefDetails/ChefDetails";
import DetailsChef from "../ChefDetails/DetailsChef";
import LoginLayout from "../LoginLayout/LoginLayout";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Error from "../page/ErrorPage/Error";
import Blog from "../page/Blog/Blog";
import About from "../page/About";



const router = createBrowserRouter([




    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
        ]

    },
    {
        path: 'blog',
        element: <Blog />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'details',
        element: <ChefDetails />,

        children: [
            {
                path: ':id',
                element: <DetailsChef />,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-neloy1435-gmailcom.vercel.app/allData/${params.id}`)
            }
        ]
    },

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <Error />,
        children: [

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register />
            }

        ]
    }

])
export default router;