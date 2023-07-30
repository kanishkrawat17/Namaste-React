import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app/components/App";
import About from "./app/components/About";
import ErrorPage from "./app/components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: <About/>,
    }
]);

root.render(<RouterProvider router={appRouter}/>);
