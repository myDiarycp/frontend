import React from 'react';
import './App.css';
//import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const RightSide = () => {
  //const navigate = useNavigate();

  return (
    <div>
      <img
        src={require('./images/logo.jpg')}
        height={400}
        width={400}
        className="bookimage"
        alt=""
      />
      {/* <Routes>
        <Route path="/login" element={}/>
        <Route paht="/signup" element={}/>
      </Routes> */}
      <button className="Signup"> Sign Up</button>
      <button className="Login"> Log In</button>
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
