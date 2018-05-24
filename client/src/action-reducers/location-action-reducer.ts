import { IAction } from ".";
import { IState } from "../App";

function locationActionListener (comp: React.Component<{}, IState>, action: IAction) {
  const {location} = comp.state;
  switch (action.type) {
    case "CHANGE LOCATION":
      if (action.payload.location) {
        location.location = action.payload.location
        comp.setState({location})
      } else {
        throw new Error("No Location Provided To Action Listener For Action Type CHANGE LOCATION")
      }
  }
}

export default locationActionListener