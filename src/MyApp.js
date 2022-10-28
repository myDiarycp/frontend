import Table from './Table'
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import Oldhome from './oldhome';
import Root from './root';
import Home from './home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function MyApp() {
    const domain="http://mydiarybackend-env.eba-zngppmhw.us-east-1.elasticbeanstalk.com"
    //const domain="http://localhost:5000"
   //HOME SCREEN
           
         const router = createBrowserRouter([
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
             }
          ]);
          
          ReactDOM.createRoot(document.getElementById("root")).render(
            <React.StrictMode>
              <RouterProvider router={router} />
            </React.StrictMode>
          );
            
  }

export default MyApp;