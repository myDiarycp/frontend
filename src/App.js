import './App.css';
import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Home from './Home';
// import Home from './Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Home></Home>
    // <React.Fragment>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route component={NoMatch} /> */}
    //   </Routes>
    // </React.Fragment>
  );
}

export default App;
