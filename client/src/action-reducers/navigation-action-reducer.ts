import { IAction } from ".";
import { IState } from "../App";

function navigationActionListener(comp: React.Component<{}, IState>, action: IAction) {
  switch (action.type) {
    case "TOGGLE SKILLS TAB":
      const {navigation} = comp.state;
      navigation.skillsOpen = !navigation.skillsOpen;
      comp.setState({navigation});
  }
} 

export default navigationActionListener