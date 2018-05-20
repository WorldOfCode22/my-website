import { IState } from "../App";

export interface IApplicationLocation {
  location: string
  changeLocation: (path: string) => void
}

export const mockApplicationLocation: IApplicationLocation = {
  // tslint:disable-next-line:no-empty
  changeLocation: () => {},
  location: '/',
}

export function getLocationDefaults(comp: React.Component<{}, IState>): IApplicationLocation {
  return {
    changeLocation: (path: string) => {
      const {location} = comp.state
      location.location = path
      comp.setState({location})
    },
    location: "/"
  }
}
