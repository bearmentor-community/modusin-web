import React from 'react';
import {Container, Input, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom'

export default class SignIn extends React.Component {

  render() {
    return (<div>
      <Row>
        <Col sm="4"></Col>
        <Col som="4">
            <div className="text-center my-auto mt-10p">
              <h1>Welcome Back </h1>
              <h5 className="mb-5">Login in to access your homepage, follow authors and topics you love, and favorite for posts that matter to you</h5>
              <Input className="mb-3" type="email" name="email" id="email" placeholder="yourname@mail.com"/>
              <Input className="mb-3" type="password" name="password" id="password" placeholder="Password"/>
              <Button className="mb-4" color="primary" size="lg" block="block">Login</Button>
              <h5 className="mb-5">No Account? &nbsp;
                <Link to="/register"><a href="">Create an account</a></Link>
              </h5>
            </div>

        </Col>
        <Col sm="4"></Col>
      </Row>

    </div>);
  }
}
