import { IAction } from ".";
import { IState } from "../App";

function mailerActionListener(comp: React.Component<{}, IState>, action: IAction) {
  const {mailer} = comp.state 
  switch(action.type) {
    case "EMAIL REQUESTED":
      if (action.payload.mailer) {
        mailer.type = action.payload.mailer.type
        mailer.to = action.payload.mailer.to
        comp.setState({mailer})
      } else {
        throw new Error("A Mailer Object Is Required With The EMAIL REQUESTED Event")
      }
  }
}

export default mailerActionListener