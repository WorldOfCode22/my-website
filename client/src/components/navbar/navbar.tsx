import * as React from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav} from "reactstrap";
import { ApplicationContext } from "../../App";
import RouterLink from "../router/router-link";

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
                  <RouterLink to='/chat' linkText='Socket Chat' />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
    )}
  </ApplicationContext.Consumer>
)

export default Navbar