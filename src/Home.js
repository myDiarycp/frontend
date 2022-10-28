// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
// import logo from './images/logo.jpg';
import './App';
//  {/* <Row id="home_row">
//         <Col>
//           <Button variant="dark"> This is a button</Button>
//         </Col>
//         <Col>2 of 2</Col>
//       </Row> */}
function Home() {
  return (
    // <div id="home_page">
    //   <h1>This is the home page</h1>
    // </div>
    <React.Fragment>
      <Container fluid id="left_home_page">
        {/* <img src={logo} alt="Logo" id="diary_logo" />; */}
        <p> This is the left side</p>
      </Container>
      <Container fluid id="right_home_page">
        <p> This is the right side</p>
      </Container>
    </React.Fragment>
  );
}

export default Home;
