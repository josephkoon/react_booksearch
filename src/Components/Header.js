import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Navbar>
      	<Navbar.Header>
      		<Navbar.Brand>
      			Book Finder
      		</Navbar.Brand>
      	</Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;