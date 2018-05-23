import * as React from "react";
import { Jumbotron} from "reactstrap";
import { ApplicationContext } from "../../App";
import './header.css';

const Header: React.SFC = () => (
  <ApplicationContext.Consumer>
    {state => (
      <div>
        <Jumbotron className="header">
          <h1 className="text-center">{state.page.heading}</h1>
          <h5 className="text-center">{state.page.subHeading}</h5>
        </Jumbotron>
      </div>
    )}
  </ApplicationContext.Consumer>
)

export default Header