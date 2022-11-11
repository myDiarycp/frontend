import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './entry.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './/Sidebar'

export default function Journal() {
    //access our current path location
    const location = useLocation();
    // access our state at this location which we passed through navigate in calendar_page.css
    let date_object = location.state;
    let date = (date_object.getMonth() + 1) + "/" + date_object.getDate() + "/" + date_object.getFullYear();

    // console.log(date_object.getMonth()) 
    // alert(date_object);
    return (
        // <h1>{date}</h1>
        <div className = "DayEvent">
            <Row>
                <Col className = "left">
                    <Sidebar />
                </Col>
                <Col className = "right">
                    <Form>
                        <Form.Label id="form-title">{date}</Form.Label>
                        <Form.Control as="textarea" rows={20} />
                        <Button
                            // className="Signup"
                            variant="dark"
                            size="lg"
                            href="https://mydiary.auth.us-east-1.amazoncognito.com/signup?client_id=48f5b7938qm4dnjfleknn07a3&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/cookie">
                            Enter
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>

    );
}