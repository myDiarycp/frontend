import React from 'react';
//Access Icons on https://mui.com/material-ui/material-icons/?query=grid&selected=GridOn
import GridOnIcon from '@mui/icons-material/GridOn';
import BarChartIcon from '@mui/icons-material/BarChart';
import PushPinIcon from '@mui/icons-material/PushPin';

// We will export an array of Sidebar items to render in our Sidebar.js
export const SidebarData = [
  {
    title: 'Calendar',
    // Material Icons to import icons
    // npm install @material-ui/core
    // npm install @mui/material @emotion/react @emotion/styled
    // add icons with npm install @mui/icons-material
    icon: <GridOnIcon />,
    link: '#home'
  },
  {
    title: 'Statistics',
    icon: <BarChartIcon />,
    link: '#home'
  },
  {
    title: 'Pins',
    icon: <PushPinIcon />,
    link: '#home'
  }
];
