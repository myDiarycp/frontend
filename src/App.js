import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// let unused = "Fred"

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="home_page">
          <Col>
            <Button variant="dark"> This is a button</Button>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Hello
    //     </a>
    //     <Button variant="dark"> This is a button</Button>
    //   </header>
    // </div>
  );
}

export default App;
