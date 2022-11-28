import React from "react";
// Access Icons on https://mui.com/material-ui/material-icons/?query=grid&selected=GridOn
import GridOnIcon from "@mui/icons-material/GridOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import PushPinIcon from "@mui/icons-material/PushPin";

// We will export an array of Sidebar items to render in our Sidebar.js

export const SidebarData = [
  {
    title: "Calendar",
    // Material Icons to import icons
    // npm install @material-ui/core
    // add icons with npm install @material-ui/icons
    icon: <GridOnIcon />,
    link: "/calendar",
  },
  {
    title: "Statistics",
    // Material Icons to import icons
    // npm install @material-ui/core
    // add icons with npm install @material-ui/icons
    icon: <BarChartIcon />,
    link: "/calendar/stats",
  },
  {
    title: "Pins",
    // Material Icons to import icons
    // npm install @material-ui/core
    // add icons with npm install @material-ui/icons
    icon: <PushPinIcon />,
    link: "#home",
  },
];
