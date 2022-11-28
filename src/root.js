import Table from "./Table";
import Form from "./Form";
import axios from "axios";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import LeftSide from "./left";
import RightSide from "./right";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const cognitoUrl = "";

export default function Root() {
  return (
    <>
      <div className="App">
        <Row className="bothPages">
          <Col className="left-homepage">
            <LeftSide></LeftSide>
          </Col>
          <Col className="right-homepage">
            <RightSide></RightSide>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
}
