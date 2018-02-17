import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const TopUnAuthNavBar = (props) => {
  return (<Navbar color="faded" className="d-flex pt-0" light="light" expand="md">
    <Nav className="mx-auto d-flex" navbar="navbar">
      <NavItem>
        <NavLink className="categoryLink" href="https://github.com/reactstrap/reactstrap">
          TECHNOLOGY
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="categoryLink" href="https://github.com/reactstrap/reactstrap">
          DESIGN
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="categoryLink" href="https://github.com/reactstrap/reactstrap">
          ENTERPRENEURSHIP
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="categoryLink" href="https://github.com/reactstrap/reactstrap">
          CODING
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="categoryLink" href="https://github.com/reactstrap/reactstrap">
          CULTURE
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="categoryLink" href="https://github.com/reactstrap/reactstrap">
          CREATIVITY
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>);
};

export default TopUnAuthNavBar;
