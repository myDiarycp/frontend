import axios from 'axios';
import React, {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import Oldhome from './oldhome';
import Root from './root';
import Home from './home';
import {
  createHashRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Cookie from './cookie';
function MyApp() {
    const domain="https://mydiary.yoelnozar.com"
    //const domain="http://localhost:5000"
   //HOME SCREEN
           
         const router = createHashRouter([
            {
              path: "/",
              element: <Root/>,
            },{
               path: "/home",
               element: <Home/>,
             },
             {
               path: "/status",
               element: <Home/>, //switch to actual page
             },{
               path: "/oldhome",
               element: <Oldhome/>,
             },{
              path: "/cookie",
              element: <Cookie/>,
            },{
              path: "/frontend", //SUSS IF STUFF DOESNT WORK DELETE THIS 
              element: <Root/>,
            }
          ]);

          ReactDOM.createRoot(document.getElementById("root")).render(
            <RouterProvider router={router} />
          );

  }
  export default MyApp;
