import React from 'react';
import {NavItem, NavLink, Button} from 'reactstrap';
import {Link} from 'react-router-dom'

const LoginRegister = (props) => {
  return (<div className="d-flex">
    <NavItem className="m-auto">
      <NavLink>
      <img src="/image/dragon.jpg" className="small-profile-picture mb-2 mr-3" alt=""/>
      </NavLink>
    </NavItem>
  </div>);
};

export default LoginRegister;
