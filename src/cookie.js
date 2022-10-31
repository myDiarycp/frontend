import Table from './Table'
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Cookie() {
    const domain="http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
    const cognitoUrl=""+process.env.REACT_APP_COGNITO_REDIRECT
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let user=""
    let userData=""
    async function fetchUser(subject){
      try {
         console.log(subject)
         const response = await axios.get(domain+'/users/'+subject);
         console.log("hi")
         console.log(response)
         const userList=response.data.users_list;
         if (userList.length<1){
          const account={name:user.name,subject:user.sub,userProfile:"Profile",entries:"Diary Entries"}
          console.log(account)
          const resp=await axios.post(domain+'/users',account)
          console.log(resp)
          localStorage.setItem("userData", JSON.stringify(account));
         }
         else{
          //user already in DB  a
          userData=userList[0]
          console.log(userData)
          localStorage.setItem("userData", JSON.stringify(userData));

         }
         return response.data.users_list;
      }
      catch (error){
         //We're not handling errors. Just logging into the console.
         console.log(error); 
         return false;         
      }
   }
    async function loginStatus(){
        const url=window.location.href
        const token=url.substring(
           url.indexOf("=") + 1, 
           url.indexOf("&")
       );
       console.log(url)
       //if(!localStorage.getItem("user"))
       try {
        
        user= JSON.stringify(jwt_decode(token))
        const sub=jwt_decode(token).sub
        localStorage.setItem("user", user);
        fetchUser(sub)
        //console.log(user)
        window.location.replace("/home")
        return user
       }
       catch(error){
        console.log("no token")
       window.location.replace(cognitoUrl);}
  
       }
       useEffect(() => {
        
        loginStatus().then(result=>console.log(result)).then( result => {
             if (result){}
           })
       }, [] );


    return (
      <>
        <div>
            </div> </>
    );
  }
  