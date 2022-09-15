import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { HomePage, PeoplePage, NotFound } from "../pages/index"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, //page 404
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true //отображение по умолчанию
      },
      {
        path: "/people",
        element: <PeoplePage />

      }
    ]
  }
]);