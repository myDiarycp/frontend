// import CanvasJS from 'canvasjs';
// import CanvasJSReact from './canvasjs.react';
import { CanvasJSChart } from "canvasjs-react-charts";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './calendar.css';
import Sidebar from './Sidebar';

//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Stats() {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  console.log(currentMonth);
  const Diary = JSON.parse(localStorage.getItem("userData")).diary;
  const DiaryMap = new Map(Object.entries(Diary));
  let y1 = 0;
  let y2 = 0;
  let y3 = 0;
  let y4 = 0;
  let y5 = 0;

  for (const [key, value] of DiaryMap.entries()) {
    console.log(key, value.rating);
    const myArray = key.split("-");
    console.log(myArray[0]);
    if (parseInt(myArray[0]) === currentMonth) {
      console.log("entered");
      if (parseInt(value.rating) === 1) y1 = y1 + 1;
      if (parseInt(value.rating) === 2) y2 = y2 + 1;
      if (parseInt(value.rating) === 3) y3 = y3 + 1;
      if (parseInt(value.rating) === 4) y4 = y4 + 1;
      if (parseInt(value.rating) === 5) y5 = y5 + 1;
    }
  }
  console.log("Y1 IS", y1);
  const options = {
    title: {
      text: "Statistics For Month of  " + currentMonth,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "1 Star", y: y1 },
          { label: "2 Star", y: y2 },
          { label: "3 Star", y: y3 },
          { label: "4 Star", y: y4 },
          { label: "5 Star", y: y5 },
        ],
      },
    ],
  };
  // console.log(date_object.getMonth())
  // alert(date_object);
  return (
    <div className="Stats">
        <Row className="calendarpageRow">
                <Col md={2} className = "left">
                    <h1 className="leftText">MyDiary  
                    <img src={require('../logo.jpeg')} className="entryImage" alt=""/>
                    </h1>
                    <Sidebar />
                </Col>  
                <Col >
                    <CanvasJSChart options={options} />
                </Col>
            </Row>
    </div>

    // <div className = "DayEvent">
    //     <h1>Stats</h1>
    // </div>
  );
}
