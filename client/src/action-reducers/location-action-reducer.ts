import { IAction } from ".";
import { IState } from "../App";

function locationActionListener (comp: React.Component<{}, IState>, action: IAction) {
  const {location} = comp.state;
  switch (action.type) {
    case "CHANGE LOCATION":
      if (action.payload.location) {
        location.lastLocation = location.location;
        location.location = action.payload.location;
        comp.setState({location});
      } else {
        throw new Error("No Location Provided To Action Listener For Action Type CHANGE LOCATION")
      }
      break
    case "GQL DATA FETCHED":
      if (action.payload.location) {
          location.lastLocation = location.location;
          location.location = action.payload.location;
          comp.setState({location});
      }
      break
    case "GQL FETCH ERROR":
      if (action.payload.location) {
        location.location = location.lastLocation
        comp.setState({location})
      } else {
        throw new Error("GQL FETCH ERROR Event Must Have A Location Key In Payload")
      }
      break
    case "EMAIL REQUESTED":
      location.location = "/loading"
      comp.setState({location})
  }
}

export default locationActionListener