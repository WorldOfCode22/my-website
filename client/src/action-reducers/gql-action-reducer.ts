import { IAction } from ".";
import { IState } from "../App";

function gqlActionListener(comp: React.Component<{}, IState>, action: IAction) {
  const {gql} = comp.state
 switch(action.type) {
    case "GQL DATA FETCHED":
      if (action.payload.data) {
        gql.loading = false;
        gql.active = false;
        gql.data = action.payload.data
        comp.setState({gql})
      } else {
        throw new Error("GQL DATA FETCHED Event Must Have GQL Data And None Was Provided")
      }
 }
}

export default gqlActionListener