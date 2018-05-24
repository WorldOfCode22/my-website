import { IState } from "../App";
import locationActionListener from "./location-action-reducer";
import navigationActionListener from "./navigation-action-reducer";

export interface IAction {
  type: string,
  payload: {
    location?: string
  }
}

export function createAction(type: string, payload: {}): IAction {
  return {
    payload,
    type
  }
}

function actionListener(comp: React.Component<{}, IState>,action: IAction) {
  locationActionListener(comp, action)
  navigationActionListener(comp, action)
}

export default actionListener