import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Input,
  Container
} from 'reactstrap';
import {Link} from 'react-router-dom'
import LoginRegisterButton from './LoginRegisterButton'
import SmallProfilePicture from './SmallProfilePicture'

const TopUnAuthNavBar = (props) => {
  return (
    <Container>
    <Navbar color="faded" className="d-flex" light="light" expand="md">
    <div className="leftNavbar"></div>
    <NavbarBrand href="/" className="mx-auto logo">ModusIn</NavbarBrand>
    <div className="rightNavbar">
      <Nav navbar="navbar">
        <div className="ml-auto d-flex">
          <NavItem>
            <NavLink>
              <Input type="text" name="search-key" id="search-key" placeholder="&#x1F50D; Search modus ... "/>
            </NavLink>
          </NavItem>
          {/*<LoginRegisterButton/>*/}
          <SmallProfilePicture/>
        </div>
      </Nav>
    </div>
    </Navbar>
    </Container>
    );
};

export default TopUnAuthNavBar;
