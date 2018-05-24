import * as React from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav} from "reactstrap";
import { createAction } from "../../action-reducers";
import { ApplicationContext } from "../../App";
import RouterLink from "../router/router-link";

const Navbar = () => (
  <ApplicationContext.Consumer>
    {state => (
          <div>
          <Nav vertical={true}>
            <Dropdown nav={true} isOpen={state.navigation.skillsOpen} 
            // tslint:disable-next-line:jsx-no-lambda
            toggle={() => {state.actionListener(createAction("TOGGLE SKILLS TAB", {}))}}>
              <DropdownToggle nav={true} caret={true} >
                Skills
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <RouterLink to='/chat' linkText='Socket Chat' />
                </DropdownItem>
                <DropdownItem>
                  <RouterLink to="/node-mailer" linkText='NodeMailer' />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
    )}
  </ApplicationContext.Consumer>
)

export default Navbar