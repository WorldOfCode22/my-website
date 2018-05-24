import { IAction } from ".";
import { IState } from "../App";

function mailerActionListener(comp: React.Component<{}, IState>, action: IAction) {
  const {mailer} = comp.state 
  switch(action.type) {
    case "EMAIL REQUESTED":
      if (action.payload.mailer && action.payload.mailer.to && action.payload.mailer.type) {
        mailer.type = action.payload.mailer.type
        mailer.to = action.payload.mailer.to
        comp.setState({mailer})
      } else {
        throw new Error("A Mailer Object With The to And Type Keys Are Required With The EMAIL REQUESTED Event")
      }
      break
    case "TO INPUT CHANGE":
      if(action.payload.mailer && action.payload.mailer.toInputChange) {
        mailer.to = action.payload.mailer.toInputChange;
        comp.setState({mailer});
      } else {
        throw new Error("TO INPUT CHANGE Event Requires A Mailer Object With A toInputChange Key");
      }
      break
    case "TYPE INPUT CHANGE":
      if(action.payload.mailer && action.payload.mailer.typeInputChange) {
        mailer.type = action.payload.mailer.typeInputChange;
        comp.setState({mailer});
      } else {
        throw new Error("TYPE INPUT CHANGE Event Requires A Mailer Object With A typeInputChange Key");
      }
  }
}

export default mailerActionListener