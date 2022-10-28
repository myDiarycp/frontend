import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
//import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const RightSide = () => {
  //const navigate = useNavigate();

  return (
    <div>
      <img src={require('./images/logo.jpg')} className="bookimage" alt="" />
      {/* <Routes>
        <Route path="/login" element={}/>
        <Route paht="/signup" element={}/>
      </Routes> */}
      <Button
        className="Signup"
        variant="dark"
        size="lg"
        href="https://mydiary.auth.us-east-1.amazoncognito.com/signup?client_id=48f5b7938qm4dnjfleknn07a3&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/cookie">
        Sign Up
      </Button>
      {/* <button
        className="Signup"
        href="https://mydiary.auth.us-east-1.amazoncognito.com/login?client_id=48f5b7938qm4dnjfleknn07a3&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/home">
        Sign Up
      </button> */}
      <Button
        className="Login"
        variant="dark"
        size="lg"
        href="https://mydiary.auth.us-east-1.amazoncognito.com/login?client_id=48f5b7938qm4dnjfleknn07a3&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/cookie">
        Log In
      </Button>
    </div>
  );
};

/* <button
        className="Signup"
        onClick={() => {
          navigate('/signup');
        }}>
        {' '}
        Sign Up
      </button>
      <button
        className="Login"
        onClick={() => {
          navigate('login');
        }}>
        {' '}
        Log In
      </button> */

export default RightSide;
