import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const cognitoUrl = "" + process.env.REACT_APP_COGNITO_REDIRECT;

  let user = JSON.parse(localStorage.getItem("user"));
  let userData = JSON.parse(localStorage.getItem("userData"));

  async function loginStatus() {
    const url = window.location.href;
    const token = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
    console.log(url);
    if (!localStorage.getItem("user"))
      try {
        user = JSON.stringify(jwt_decode(token));
        localStorage.setItem("user", user);
        //window.location.replace("/home")
        return user;
      } catch (error) {
        window.location.replace(cognitoUrl);
      }
  }
  useEffect(() => {
    loginStatus()
      .then((result) => console.log(result))
      .then((result) => {
        if (result) {
        }
      });
  });

  return (
    <>
      <div>
        Hello {user.name} welcome to your diary <br />{" "}
        {JSON.stringify(userData)}
      </div>{" "}
    </>
  );
}
