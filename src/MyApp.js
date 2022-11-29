import Table from "./Table";
import Form from "./Form";
import axios from "axios";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import Oldhome from "./oldhome";
import Root from "./root";
import Home from "./home";
import Calendar from "./routes/calender_page";
import Day from "./routes/DayEvent";
import Stats from "./routes/Stats";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Cookie from "./cookie";
import { render } from "react-dom";
import Signout from "./signout";

function MyApp() {
  //const domain = "mydiary.yoelnozar.com";
  //const domain="http://localhost:5000"
  //HOME SCREEN

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "stats",
      element: <Home />, //switch to actual page
    },
    {
      path: "oldhome",
      element: <Oldhome />,
    },
    {
      path: "cookie",
      element: <Cookie />,
    },
    {
      path: "calendar",
      element: <Calendar />,
    },
    {
      path: "calendar/day",
      element: <Day />,
    },
    {
      path: "statistics",
      element: <Stats />,
    },    {
      path: "logout",
      element: <Signout />,
    },
  ]);

  // ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );

  render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
export default MyApp;
