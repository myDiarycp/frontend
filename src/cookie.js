import axios from "axios";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cookie() {
  const domain = process.env.REACT_APP_API_DOMAIN; //"http://localhost:8080"
  const cognitoUrl = "" + process.env.REACT_APP_COGNITO_REDIRECT;
  let user = "";
  let userData = "";
  async function fetchUser(name, subject) {
    try {
      console.log(subject);
      console.log(subject);
      const response = await axios.get(domain + "/users/" + subject);
      console.log("hi");
      console.log(response);
      const userList = response.data.users_list;
      if (userList.length < 1) {
        //user=localStorage.getItem("user")
        const entry = {
          date: "10-11-2022",
          title: "My First Entry",
          text: "I had a great day!",
          rating: 5,
        };
        const account = {
          name: name,
          _id: subject,
          subject: subject,
          userProfile: "Profile",
          diary: { "10-11-2022": entry },
        };
        console.log(account);
        localStorage.setItem("userData", JSON.stringify(account));
        const resp = await axios.post(domain + "/users", account);
        console.log(resp);
      
      } else {
        //user already in DB  a
        userData = userList[0];
        console.log(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
      }
      return response.data.users_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }
  async function loginStatus() {
    const url = window.location.href;
    const token = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
    console.log(url);
    //if(!localStorage.getItem("user"))
    try {
      user = JSON.stringify(jwt_decode(token));
      const sub = jwt_decode(token).sub;
      const name = jwt_decode(token).name;
      console.log(sub);
      localStorage.setItem("user", user);
      fetchUser(name, sub);

      //console.log(user)

      //
      return user;
    } catch (error) {
      console.log("no token");
      window.location.replace(cognitoUrl);
    }
  }
  useEffect(() => {
    loginStatus()
      .then((result) => console.log(result))
      .then((result) => {
        //setTimeout(window.location.replace("/home"),500)
        window.setTimeout(function () {
          window.location.href = "/calendar";
        }, 1000);
        //
      });
  });

  return (
    <>
      <div></div>{" "}
    </>
  );
}
