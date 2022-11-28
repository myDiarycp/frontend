import Calendar from "react-calendar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import 'react-calendar/dist/Calendar.css';
import "./calendar.css";
// import './calendar.css';
// import 'react-calendar/dist/Calendar.css';
// import './App.css';
// import './index.css';
// import './App.css';

const CalendarDisplay = () => {
  // When we refresh we use current date state
  const [date, setDate] = useState(new Date());
  let navigate = useNavigate();
  const routeChange = (curr_date) => {
    let path = "/calendar/day";
    console.log(path + curr_date);
    navigate(path, { state: curr_date });
  };

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
};

export default CalendarDisplay;
