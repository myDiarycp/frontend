import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './entry.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './/Sidebar'
import React, { useState, useEffect } from 'react'
import Quill from 'quill'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Alert from 'react-bootstrap/Alert';

export default function Journal() {
    const location = useLocation();
    let date_object = location.state;
    let date = (date_object.getMonth() + 1) + "/" + date_object.getDate() + "/" + date_object.getFullYear();
    const initVal=JSON.parse(localStorage.getItem(date))||""
    const [value, setValue] = useState(initVal);
    //access our current path location
   
    // access our state at this location which we passed through navigate in calendar_page.css
    

    // console.log(date_object.getMonth()) 
    // alert(date_object);
    
     


       function submitEntry(){
        console.log("submitted")
        localStorage.setItem(date,JSON.stringify(value))
        console.log(value)
        alert("Entry Saved!");
        window.location.href = '/calendar';

    }
    return (
        // <h1>{date}</h1>
        <div className = "DayEvent">
            <Row>
                <Col className = "left">
                    <Sidebar />
                </Col>
                <Col className = "right">{date}
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                


      <Button onClick={submitEntry}
      variant="dark"
      size="lg"
      
      >Submit</Button>
      
                </Col>
            </Row>
        </div>

    );
    
}