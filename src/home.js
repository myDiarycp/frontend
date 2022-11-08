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
export default function Home() {
    const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"
    const cognitoUrl=""+process.env.REACT_APP_COGNITO_REDIRECT
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let user=JSON.parse(localStorage.getItem("user"))
    async function fetchUser(id){
        try {
           const response = await axios.get(domain+'/user:'+id);
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
       if(!localStorage.getItem("user"))
       try {
        user= JSON.stringify(jwt_decode(token))
        localStorage.setItem("user", user);
        //window.location.replace("/home") //sanity check
        return user
       }
       catch(error){
       window.location.replace(cognitoUrl);}
  
       }
       useEffect(() => {
        
        loginStatus().then(result=>console.log(result)).then(fetchUser().then( result => {
             if (result){}
           }))
       }, [] );


    return (
      <>
        <div>Hello {user.name} welcome to your diary
            </div> </>
    );
  }
  