import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Routes/Homepage'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

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
    path: "/about",
    element: <div>About</div>,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);