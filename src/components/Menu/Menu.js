/*import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Menu/Menu.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Menu extends Component {
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
                                    <Link to="../Home/Home.js" className="link">Home</Link>
                                </NavItem>
                                <NavItem className="navitem">
                                    <Link to="../About/About.js" className="link">About</Link>
                                </NavItem>
                                <NavItem className="navitem">
                                    <Link to="../Contact/Contact.js" className="link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>


                    <Route path="./components/Home/Home.js" render={() => Home} exact />
                    <Route path="./components/About/About.js" render={() => About} />
                    <Route path="./components/Contact/Contact.js" render={() => Contact} />
                </div>
            </Router>
        )
    }
}

export default Menu;
*/