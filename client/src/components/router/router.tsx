import * as React from "react"
import { ApplicationContext } from "../../App";
import Home from "../home/home"

const Router = () => (
  <ApplicationContext.Consumer>
    {state => (
      <div>
        {state.location.location === '/' ? <Home /> : <Home />}
      </div>
    )}
  </ApplicationContext.Consumer>
)

export default Router