import Calendar from 'react-calendar';
import React, { useState,useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import Sidebar from './Sidebar';
// import './calendar.css';
// import 'react-calendar/dist/Calendar.css';
// import './App.css';
// import './index.css';
// import './App.css';

export default function CalendarDisplay() {
    // When we refresh we use current date state
    const Diary=JSON.parse(localStorage.getItem("userData")).diary
    const DiaryMap = new Map(Object.entries(Diary));
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(Math.random());
    let navigate = useNavigate();
    const routeChange = (curr_date) => {
        let path = '/calendar/day';
        console.log(path + curr_date);
        navigate(path, { state: curr_date });
    };
    var grad=['0','#ff222c',"#ff7b80",'#96ed89','#45BF55','#168039']

    function loadColors(){
        console.log("e")
        const dateButtons = document.querySelectorAll(".react-calendar__tile");
        dateButtons.forEach((element)=>{
            //console.log(element.children[0].getAttribute("aria-label"))
            var dt=new Date(element.children[0].getAttribute("aria-label")).toLocaleDateString("en-US").replace(/\//g, '-');
            //console.log(dt)
            var entry=DiaryMap.get(dt)
            console.log(entry)
            
            if(entry&&dt!=new Date().toLocaleDateString("en-US").replace(/\//g, '-')){
                console.log(grad[(entry.rating)])
                element.style.background=grad[entry.rating]}

            }
            
            
            
            )

    }


    useEffect(()=>
    {
        console.log(date)
        const dateButtons = document.querySelectorAll(".react-calendar__tile");
        dateButtons.forEach((element)=>{
            //console.log(element.children[0].getAttribute("aria-label"))
            var dt=new Date(element.children[0].getAttribute("aria-label")).toLocaleDateString("en-US").replace(/\//g, '-');
            //console.log(dt)
            var entry=DiaryMap.get(dt)
            console.log(entry)
            
            if(entry&&dt!=new Date().toLocaleDateString("en-US").replace(/\//g, '-')){
                console.log(grad[(entry.rating)])
                element.style.background=grad[entry.rating]}

            }
            
            
            
            )
        //[0].style.background='#FFFFFF';
    })   

    return (
        <div>
            <Row className="calendarpageRow">
                <Col md={2} className = "left">
                    <h1 className="leftText">MyDiary  
                    <img src={require('../logo.jpeg')} className="entryImage" alt=""/>
                    </h1>
                    <Sidebar />
                </Col>  
                <Col >
                    <Calendar
                    onChange={setDate}
                    value={date}
                    onClickDay={(value) => {routeChange(value);}}
                    />
                </Col>
            </Row>
        </div>
    );
}
