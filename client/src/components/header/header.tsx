import * as React from "react";
import {Jumbotron} from "reactstrap";
import './header.css';

const Header: React.SFC = () => (
  <div>
    <Jumbotron className="header">
      <h1 className="text-center">Sloan Gwaltney</h1>
      <h5 className="text-center">A passionate diversified web developer</h5>
    </Jumbotron>
  </div>
)

export default Header