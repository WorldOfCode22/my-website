import * as React from "react"
import { ApplicationContext } from "../../App";
import Home from "../home/home";
import Chat from "../skills-components/chat/chat";

const Router = () => (
  <ApplicationContext.Consumer>
    {state => {
      switch(state.location.location) {
        case '/':
          return <Home />
        case '/chat':
          return <Chat />
        default:
          return <Home />
      }
    }}
  </ApplicationContext.Consumer>
)

export default Router