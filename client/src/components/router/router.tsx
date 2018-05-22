import * as React from "react"
import { ApplicationContext } from "../../App";
import Home from "../home/home";
import GeneralLoading from "../loading/general-loading";
import Chat from "../skills-components/chat/chat";
import NodeMailer from "../skills-components/node-mailer/node-mailer";

const Router = () => (
  <ApplicationContext.Consumer>
    {state => {
      switch(state.location.location) {
        case '/':
          return <Home />
        case '/chat':
          return <Chat />
        case '/loading':
          return <GeneralLoading />
        case '/node-mailer':
          return <NodeMailer />
        default:
          return <Home />
      }
    }}
  </ApplicationContext.Consumer>
)

export default Router