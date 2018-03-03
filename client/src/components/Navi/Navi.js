import React, { Component } from "react";
import { withAuth } from '@okta/okta-react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


export default withAuth(class Navi extends Component {
  constructor(props) {
    super(props);

    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    const authNav = this.state.authenticated ?
      <Navbar color="faded" light expand="md" className="auth-nav" id="mainNav">
        <div className="container">
          <NavbarBrand href="/">Orchestrade</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/browse">Browse</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                  </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/add" className="dropdown">Add Instruments</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/manage" className="dropdown">Manage Instruments</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/settings" className="dropdown">Settings</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="dropdown"
                      // href="javascript:void(0)"
                      href="/" //Redirect to home on logout
                      onClick={this.props.auth.logout}
                    >Log Out
                      </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      :
      <Navbar color="faded" light expand="md" className="auth-nav" id="mainNav">
        <div className="container">
          <NavbarBrand href="/">Orchestrade</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" onClick={this.props.auth.login}>Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
            </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/add">Add Instruments</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/manage">Manage Instruments</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/signup">Sign Up</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      href="/login"
                      onClick={this.props.auth.login}
                    >Log In
                </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    return (
      <div>
        {authNav}
      </div>
    );
  }
});
