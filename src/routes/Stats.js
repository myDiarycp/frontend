// import CanvasJS from 'canvasjs';
// import CanvasJSReact from './canvasjs.react';
import { CanvasJSChart } from "canvasjs-react-charts";

//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Stats() {
  const options = {
    title: {
      text: "Statistics",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "1 Star", y: 5 },
          { label: "2 Star", y: 5 },
          { label: "3 Star", y: 5 },
          { label: "4 Star", y: 5 },
          { label: "5 Star", y: 5 },
        ],
      },
    ],
  };
  // console.log(date_object.getMonth())
  // alert(date_object);
  return (
    <div className="Stats">
      <CanvasJSChart options={options} />
    </div>

    // <div className = "DayEvent">
    //     <h1>Stats</h1>
    // </div>
  );
}
