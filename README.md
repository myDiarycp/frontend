# Frontend

This is the frontend for the diary app. This app allows users to create a login and enter diary entries that will be preserved across days and logins. The application allows for one entry every day and contains a rating system that can be visualized on a statistics page. It allows for anyone looking to keep track of their days to do so easily and reflect on days and months as a whole.

# Project Status

Frontend CI: ![Badge](https://github.com/myDiarycp/frontend/actions/workflows/ci.yml/badge.svg)

Frontend Website: [frontend-4py.pages.dev](https://frontend-4py.pages.dev)

# UI Prototype

[Figma](https://www.figma.com/file/g0mjqMVF5KSStrsPTFlGUc/Prototype?node-id=0%3A1&t=OrI8enNNnr5VR09P-1) Last Updated: 10/19/2022

# Diagrams

[Class Diagram Image](https://github.com/myDiarycp/backend/blob/main/ClassDiagram.png)

[Class Diagram File](https://github.com/myDiarycp/backend/blob/main/ClassDiagram.drawio)
Last Updated: 11/30/2022

[Use Case Diagram Image](https://github.com/myDiarycp/backend/blob/main/UseCase.png)

[Use Case Diagram File](https://github.com/myDiarycp/backend/blob/main/UseCase.drawio)
Last Updated: 12/02/2022 

# Environment Set Up:

1.) Clone this repository
2.) npm install
3.) add the .env file with the REACT_APP_API_DOMAIN, REACT_APP_COGNITO_REDIRECT, REACT_APP_HOMEPAGE, REACT_APP_COGNITO (reach out to other software developers for full .env file. It cannot be posted publicly to prevent security breaches)
4.) we need to npm install the following:
- npm install @emotion/react
- npm install @emotion/styled
- npm install @material-ui/core
- npm install @material-ui/icons
- npm install @mui/icons-material
- npm install @mui/material
- npm install @testing-library/jest-dom
- npm install @testing-library/react
- npm install @testing-library/user-event
- npm install axios
- npm install bootstrap
- npm install canvasjs
- npm install canvasjs-react-charts
- npm install dompurify
- npm install jwt-decode
- npm install quill
- npm install react
- npm install react-bootstrap
- npm install react-calendar
- npm install react-dom
- npm install react-quill
- npm install react-router-dom
- npm install react-scripts
- npm install web-vitals

# STYLE GUIDELINES:

- run npm install prettier --save-dev
- run npm install eslint --save-dev
- run npm run lint
- \*the lint command is already set up in the package.json
