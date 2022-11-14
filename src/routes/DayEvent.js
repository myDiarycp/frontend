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
import axios from "axios";

export default function Journal() {
    const domain=process.env.REACT_APP_API_DOMAIN //"http://localhost:8080"
    const location = useLocation();
    let date_object = location.state;
    let date = (date_object.getMonth() + 1) + "-" + date_object.getDate() + "-" + date_object.getFullYear();
    const Diary=JSON.parse(localStorage.getItem("userData")).diary
    const DiaryMap = new Map(Object.entries(Diary));
    
    var entry=DiaryMap.get(date)
    
    var initVal=""
    if(entry){
        initVal=entry.text
    }
    else
    initVal=""
    //initVal=JSON.parse(localStorage.getItem(date))||""
    const [value, setValue] = useState(initVal);
    //access our current path location
   
    // access our state at this location which we passed through navigate in calendar_page.css
    

    // console.log(date_object.getMonth()) 
    // alert(date_object);
    
     


       async function submitEntry(){
        const entryUpdate={date:date,title:"My First Entry", text: value, rating:10}
        console.log("submitted")
        DiaryMap.set(date,entryUpdate)
        var userData=JSON.parse(localStorage.getItem("userData"))
        userData.diary=Object.fromEntries(DiaryMap)
        //localStorage.setItem(date,JSON.stringify(value))
        localStorage.setItem("userData",JSON.stringify(userData))
        console.log(domain+"/users/"+userData.subject)
        const resp=await axios.put(domain+"/users/"+userData.subject,userData)
        console.log(resp)
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