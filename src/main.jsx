import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Pages/Homepage'
import Articles from './Pages/Articles'
import Article from './Pages/Article'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/:title",
    element: <Article />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);