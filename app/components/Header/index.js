import React from 'react';
import { Nav, Logo, A } from './components';

const imgLogo = require('./logo.png');


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Nav>
        <A>Home</A>
        <A>Blog</A>
        <Logo><img src={imgLogo} alt="logo" /></Logo>
        <A>Team</A>
        <A>Contact</A>
      </Nav>
    );
  }
}

export default Header;
