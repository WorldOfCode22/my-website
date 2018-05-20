import * as React from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavLink } from "reactstrap";
import { ApplicationContext } from "../../App";

const Navbar = () => (
  <ApplicationContext.Consumer>
    {state => (
          <div>
          <Nav vertical={true}>
            <Dropdown nav={true} isOpen={state.navigation.skillsOpen} toggle={state.navigation.skillsToggle}>
              <DropdownToggle nav={true} caret={true} >
                Skills
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink>Socket Chat</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
    )}
  </ApplicationContext.Consumer>
)

export default Navbar