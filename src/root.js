import LeftSide from "./left";
import RightSide from "./right";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Root() {
  return (
    <>
      <div className="App">
        <Row className="bothPages">
          <Col className="left-homepage">
            <LeftSide></LeftSide>
          </Col>
          <Col className="right-homepage">
            <RightSide></RightSide>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
}
