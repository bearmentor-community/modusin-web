import React from 'react';
import {NavItem, NavLink, Button} from 'reactstrap';
import {Link} from 'react-router-dom'

const LoginRegisterButton = (props) => {
  return (<div className="d-flex">
    <NavItem className="m-auto">
      <NavLink>
        <Link to="/signin">
          <Button color="primary" className="btn-sm ">Login</Button>
        </Link>
      </NavLink>
    </NavItem>
    <NavItem className="m-auto">
      <NavLink>
        <Link to="/register">
          <Button color="primary" className="btn-sm">Register</Button>
        </Link>
      </NavLink>
    </NavItem>
  </div>);
};

export default LoginRegisterButton;
