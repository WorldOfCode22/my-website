import { IAction } from ".";
import { IState } from "../App";
import GQLCommand from "../components/gql-command/gql-command";

function gqlActionListener(comp: React.Component<{}, IState>, action: IAction) {
  const {gql, location} = comp.state;
 switch(action.type) {
    case "EMAIL REQUESTED":
      if (action.payload.mailer) {
      gql.active = true;
      gql.loading = true;
      GQLCommand({local: location.location, query: `{
        NodeMailer(to:"${action.payload.mailer.to}", type:"${action.payload.mailer.type}"){
          emailSent
        }
      }`, state: comp.state})
      comp.setState({gql});
    } else {
      throw new Error("A Mailer Object Is Required With The EMAIL REQUESTED Event");
    }
    break
    case "GQL DATA FETCHED":
      if (action.payload.gql && action.payload.gql.data) {
        gql.loading = false;
        gql.active = false;
        gql.data = action.payload.gql.data;
        comp.setState({gql});
      } else {
        throw new Error("GQL DATA FETCHED Event Must Have A GQL Object With A data Key");
      }
      break
    case "GQL FETCH ERROR":
      if (action.payload.gql && action.payload.gql.errors) {
        gql.active = false;
        gql.loading = false;
        gql.errors = action.payload.gql.errors
        comp.setState({gql})
      } else {
        throw new Error("GQL FETCH ERROR Event Must Hav A GQL Object With A errors Key")
      }
 }
}

export default gqlActionListener