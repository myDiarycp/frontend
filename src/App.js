import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSide from './leftSide';
import RightSide from './rightSide';

// let unused = "Fred"

function App() {
  return (
    <div className="App">
      <Row className="bothPages">
        <Col className="left">
          <LeftSide></LeftSide>
        </Col>
        <Col className="right">
          <RightSide></RightSide>
        </Col>
      </Row>
    </div>
  );
}

export default App;
