import { IState } from "../App";
import locationActionListener from "./location-action-reducer";

export interface IAction {
  type: string,
  payload: {
    location?: string
  }
}
function actionListener(comp: React.Component<{}, IState>,action: IAction) {
  locationActionListener(comp, action)
}

export default actionListener