import React, { Component } from 'react';
import './css/App.css';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Menu/Menu.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
        collapsed: true
    }
}

toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    })
}

  render() {
    return (
      <Router>
      <div>
          <Navbar color="dark" dark expand="md">
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav navbar className="navbar">
                      <NavItem className="navitem navitemHome">
                          <Link to="/" className="link">Home</Link>
                      </NavItem>
                      <NavItem className="navitem">
                          <Link to='/about' className="link">About</Link>
                      </NavItem>
                      <NavItem className="navitem">
                          <Link to="/contact" className="link">Contact</Link>
                      </NavItem>
                  </Nav>
              </Collapse>
          </Navbar>

          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
      </div>
  </Router>
    )
  }
}

export default App;
