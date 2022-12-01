# Frontend

This is the frontend for the diary app. This app allows users to create a login and enter diary entries that will be preserved across days and logins. The application allows for one entry every day and contains a rating system that can be visualized on a statistics page. It allows for anyone looking to keep track of their days to do so easily and reflect on days and months as a whole.  


# Project Status

Frontend CI: ![Badge](https://github.com/myDiarycp/frontend/actions/workflows/ci.yml/badge.svg)

Frontend Website: [frontend-4py.pages.dev](https://frontend-4py.pages.dev)


# UI Prototype 
https://www.figma.com/file/g0mjqMVF5KSStrsPTFlGUc/Prototype?node-id=0%3A1&t=OrI8enNNnr5VR09P-1

# Environment Set Up:

Before we can successfully npm start, we need to npm install the following packages:
-    "@emotion/react": "^11.10.5",
-    "@emotion/styled": "^11.10.5",
-    "@material-ui/core": "^4.12.4",
-    "@material-ui/icons": "^4.11.3",
-    "@mui/icons-material": "^5.10.9",
-    "@mui/material": "^5.10.13",
-    "@testing-library/jest-dom": "^5.16.5",
-    "@testing-library/react": "^13.4.0",
-    "@testing-library/user-event": "^13.5.0",
-    "axios": "^1.1.3",
-    "bootstrap": "^5.2.2",
-    "canvasjs": "^1.8.3",
-    "canvasjs-react-charts": "^1.0.5",
-    "convert": "^4.7.0",
-    "dompurify": "^2.4.1",
-    "draft": "^0.2.3",
-    "draft-convert": "^2.1.13",
-    "draft-js": "^0.11.7",
-    "draft-js-export-html": "^1.4.1",
-    "draft-js-import-html": "^1.4.1",
-    "draft-js-utils": "^1.4.1",
-    "gh-pages": "^4.0.0",
-    "jwt-decode": "^3.1.2",
-    "prettier": "^2.8.0",
-    "quill": "^1.3.7",
-    "react": "^18.2.0",
-    "react-bootstrap": "^2.5.0",
-    "react-calendar": "^4.0.0",
-    "react-dom": "^18.2.0",
-    "react-draft-wysiwyg": "^1.15.0",
-    "react-quill": "^2.0.0",
-   "react-router-dom": "^6.4.2",
-   "react-scripts": "5.0.1",
-    "slate": "^0.85.0",
-    "slate-react": "^0.83.2",
-    "web-vitals": "^2.1.4"

# STYLE GUIDELINES:

- 1.) Install Prettier and ESlint in VSCode
- 2.) In frontend repository, install npm install eslint --save-dev
- 3.) npx eslint --init to create our .eslintrc.json file which tells us how we will use lint
- follow the instructions on https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b
- 4.) add rule to .eslintrc.json file as it make importing compatible with recent react version: "rules": {
- "react/react-in-jsx-scope": "off"
- }
- 5.) Modify .eslintrc.json and add rule:
- "env": {
- "browser": true,
- "es2021": true,
- "jest": true
- }
- 6.) run command: npm install eslint-config-prettier eslint-plugin-prettier prettier --save-dev
- so ESlint doesn't conflict with Prettier
- 7.) Create .prettierrc and paste the below code:
- {
- "semi": true,
- "tabWidth": 2,
- "printWidth": 100,
- "singleQuote": true,
- "trailingComma": "none",
- "jsxBracketSameLine": true
  -}

To run app:

Clone directory
In frontend folder:
run "npm init"
run "npm install react"
run "npm install gh-pages"
run "npm install axios"
Finally, run "npm start"

# Getting Started with Create React App.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
