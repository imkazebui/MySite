import React from 'react';

const imgLogo = require('./logo.png')

export default class extends React.Component {
  render() {
    return (
      <div>
        <a>Home</a>
        <a>Blog</a>
        <a><img src={imgLogo} alt='logo' /></a>
        <a>Team</a>
        <a>Contact</a>
      </div>
    );
  }
}