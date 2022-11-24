import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './entry.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './/Sidebar';
import Entry from './/Entry';
import Home from '../home';
//import Rating from './/Rating';

import React, { useState, useEffect } from 'react'
import Quill from 'quill'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";


//Rating

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


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


    //rating


// values of the stars
const labels = {
    // 0.5: 'Horrible',
    1: 'Horrible',
    // 1.5: 'Poor',
    2: 'Poor',
    // 2.5: 'Ok',
    3: 'Okay',
    // 3.5: 'Good',
    4: 'Good',
    // 4.5: 'Excellent',
    5: 'Excellent',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
//  


    //initVal=JSON.parse(localStorage.getItem(date))||""
    const [value, setValue] = useState(initVal);

    var initRate=entry?entry.rating:0
    const [rateValue, setRateValue] = React.useState(initRate);
    const [hover, setHover] = React.useState(initRate);
    //access our current path location
   
    // access our state at this location which we passed through navigate in calendar_page.css
    

    // console.log(date_object.getMonth()) 
    // alert(date_object);
    
     


       async function submitEntry(){
        var r=rateValue?rateValue:0
        const entryUpdate={date:date,title:"My First Entry", text: value, rating:r}
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
            <Row className="entryRow">
                <Col md={2} className = "left">
                    <h1 className="leftText">MyDiary  
                    <img src={require('../logo.jpeg')} className="entryImage" alt=""/>
                    </h1>
                    <Sidebar />
                </Col>
                <Col md={4} className="middle">
                    <h1 className="mtitle">Welcome to Your Diary userData.name </h1>
                </Col>
                <Col md={6} className = "entrySide">
                    <h1 className="aboveEntry">Entry Date: {date}</h1>
                    <h1 className="ratingTitle"> <u>Day Rating:</u></h1>
                    <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                    <Rating
                        name="hover-feedback"
                        size="large"
                        // save value for day
                        value={rateValue}
                        // precision to find value (1 star), (use .5 for half stars)
                        precision={1.0}
                        getLabelText={getLabelText}
                        // set new star value
                        onChange={(event, newValue) => {
                        setRateValue(newValue?newValue:0);
                        }}
                        // display the hover 
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                        // empty star display
                        emptyIcon={<StarIcon style={{ opacity: 0.66 }} fontSize="inherit" />}
                    />
                    {rateValue !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rateValue]}</Box>
                    )}
                    </Box>
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