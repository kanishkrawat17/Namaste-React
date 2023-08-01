import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app/components/App";
import Body from "./app/components/Body";
import About from "./app/components/About";
import About from "./app/components/About";
import Profile from './app/components/Profile';
import Contact from './app/components/Contact';
import ErrorPage from "./app/components/ErrorPage";
import RestaurantMenu from './app/components/RestaurantMenu';

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
              path: "/",
              element: <Body/>,
            },
            {
              path: "/about",
              element: <About />,
              children: [
                {
                    path: 'profile', // if we write "/profile", localhost will consider it https:1234/profile
                    element: <Profile/>
                }
              ]
            },
            {
              path: "/contact",
              element: <Contact/>,
            },
            {
              path: "/restaurant/:resId",
              element: <RestaurantMenu/>,
            },
        ],
    },
]);

root.render(<RouterProvider router={appRouter}/>);
