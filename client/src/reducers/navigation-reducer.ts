import { IState } from "../App";

export interface INavigation {
  skillsOpen: boolean
  skillsToggle: () => void
}

// used to trick ts into understanding context
export function mockNavigation(): INavigation {
  return {
    skillsOpen: false,
    // tslint:disable-next-line:no-empty
    skillsToggle: () => {}
  }
}

export function getDefaultNavigation(comp: React.Component<{}, IState>): INavigation {
  return {
    skillsOpen: false,
    skillsToggle: () => {
      const {navigation} = comp.state;
      navigation.skillsOpen = !navigation.skillsOpen;
      comp.setState({navigation});
    }
  }
}