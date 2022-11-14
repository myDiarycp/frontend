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
import Rating from './/Rating';


export default function Journal() {
    //access our current path location
    const location = useLocation();
    // access our state at this location which we passed through navigate in calendar_page.css
    let date_object = location.state;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // console.log(days[now.getDay()] + ' ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear()); //Tuesday February 12 2013
    // let date = (date_object.getMonth() + 1) + "/" + date_object.getDate() + "/" + date_object.getFullYear();
    let date1 = days[date_object.getDay()] + ' ' + months[date_object.getMonth()] + ' ' + date_object.getDate() + ', ' + date_object.getFullYear();

    // access user object
    let user=JSON.parse(localStorage.getItem("user"))
   
    return (
        // <h1>{date}</h1>
        <div className = "DayEvent">
            <Row className="entryRow">
                <Col md={2} className = "left">
                    <h1 className="leftText">MyDiary  
                    <img src={require('../logo.jpeg')} className="entryImage" alt="" />
                    </h1>
                    <Sidebar />
                </Col>
                <Col md={4} className="middle">
                    <h1 className="mtitle">Welcome to Your Diary {user.name} </h1>
                </Col>
                <Col md={6} className = "entrySide">
                    <h1 className="aboveEntry">Entry Date: {date1}</h1>
                    <h1 className="ratingTitle"> <u>Day Rating:</u></h1>
                    <Rating className="rating"/>
                    <Entry className="textEditor" />
                </Col>
            </Row>
        </div>

    );
}