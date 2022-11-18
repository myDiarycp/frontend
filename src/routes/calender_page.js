import Calendar from 'react-calendar';
import React, { useState,useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';

// import 'react-calendar/dist/Calendar.css';
import './calendar.css';
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
    let navigate = useNavigate();
    const routeChange = (curr_date) => {
        let path = '/calendar/day';
        console.log(path + curr_date);
        navigate(path, { state: curr_date });
    };
    var grad=['0','#ff222c',"#ff7b80",'#96ed89','#45BF55','#168039']
    useEffect(()=>
    {
        const dateButtons = document.querySelectorAll(".react-calendar__tile");
        dateButtons.forEach((element)=>{
            //console.log(element.children[0].getAttribute("aria-label"))
            var dt=new Date(element.children[0].getAttribute("aria-label")).toLocaleDateString("en-US").replace(/\//g, '-');
            //console.log(dt)
            var entry=DiaryMap.get(dt)
            console.log(entry)
            
            if(entry&&dt!=new Date().toLocaleDateString("en-US").replace(/\//g, '-')){
                console.log(grad[(entry.rating)/2])
                element.style.background=grad[entry.rating/2]}

            }
            
            
            
            )
        //[0].style.background='#FFFFFF';
    }) 

    return (
        <div>
            {/* <p>Hello</p> */}
            <Calendar
                onChange={setDate}
                value={date}
                onClickDay={(value) => routeChange(value)}
            // onClickDay={(value) => alert('Clicked day: ' + value)}
            // onClickDay={() => window.location.href = '/DayEvent'}
            // onClick={"Hello"}
            // onClick={() => window.location.href = '/routes/DayEvent.js'}
            />
        </div>
    );
}
