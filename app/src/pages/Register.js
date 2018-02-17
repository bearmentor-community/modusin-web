import React from 'react';
import {Container, Input, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom'


export default class Register extends React.Component {

  render() {
    return (<div>
      <Row>
        <Col sm="4"></Col>
        <Col som="4">
          <Container className="justify-content-md-center">
            <div className="text-center my-auto mt-10p">
              <h1>Join Modusin</h1>
              <h5 className="mb-5">Create an account to track your readings, follow awsome authors and collections, favorite posts you love and more</h5>
              <Input className="mb-3" type="full-name" name="full-name" id="full-name" placeholder="Enter your full name"/>
              <Input className="mb-3" type="email" name="email" id="email" placeholder="mail@yourwebsite.com"/>
              <Input className="mb-3" type="password" name="password" id="password" placeholder="Password"/>
              <Button className="mb-4" color="primary" size="lg" block="block">Create My Account</Button>
              <h5 className="mb-5">Allready Have an Account? &nbsp;
                <Link to="/register"><a href="">Sign In</a></Link>
              </h5>
            </div>
          </Container>
        </Col>
        <Col sm="4"></Col>
      </Row>

    </div>);
  }
}
