import React from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <Navbar className="navbar navbar-lg navbar-expand-lg  navbar-dark fixed-top">
        <NavbarToggler  onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-lg-0">
              <NavItem className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>

              <NavItem className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to="/testimonials">Testimonials</Link>
              </NavItem>
              <UncontrolledDropdown className="nav-item" nav inNavbar>
                <DropdownToggle className="nav-link" nav caret>
                  Work with Me
                </DropdownToggle>
                <DropdownMenu right className="navbar-dropdown">
                  <DropdownItem>
                    <Link className="nav-link" to="/reiki">Reiki</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/quantumtouch">Quantum Touch</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/allergy">Allergy Treatment</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/intuitive">Intuitive Sessions</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/biofeedback">Biofeedback</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                   Events
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/events">Corporate Events</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="nav-link" to="/classes">Classes</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ul>
          </Collapse>
      </Navbar>
    )
  }
}
