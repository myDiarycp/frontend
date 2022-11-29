import Table from "./Table";
import Form from "./Form";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Signout() {
    async function loginStatus() {

        localStorage.removeItem("User")
        localStorage.removeItem("UserData")
    }



    useEffect(() => {
        loginStatus()
          .then((result) => console.log(result))
          .then((result) => {
            //setTimeout(window.location.replace("/home"),500)
            window.setTimeout(function () {
              window.location.href = "/";
            }, 750);
            //
          });
      }, []);
    
      return (
        <>
          <div></div>{" "}
        </>
      );
    }