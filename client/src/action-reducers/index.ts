import { IState } from "../App";
import gqlActionListener from "./gql-action-reducer";
import locationActionListener from "./location-action-reducer";
import mailerActionListener from "./mailer-action-reducer";
import navigationActionListener from "./navigation-action-reducer";
import pageActionListener from "./page-action-reducer";

export interface IAction {
  type: string,
  payload: {
    gql?: {
      data?: {},
      errors?: [{}] | undefined
    },
    location?: string,
    mailer?: {
      toInputChange?: string
      typeInputChange?: string,
      to?: string
      type?: string
    }
  }
}

export function createAction(type: string, payload: {}): IAction {
  return {
    payload,
    type
  }
}

function actionListener(comp: React.Component<{}, IState>,action: IAction) {
  if (comp.state.env.mode === "DEVELOPMENT"){
    // tslint:disable-next-line:no-console
    console.log({actionCalled: action, currentState: comp.state})
    locationActionListener(comp, action);
    navigationActionListener(comp, action);
    gqlActionListener(comp, action);
    mailerActionListener(comp, action);
    pageActionListener(comp, action)
    // tslint:disable-next-line:no-console
    console.log({actionCalled: action, newState: comp.state})
  } else {
    locationActionListener(comp, action);
    navigationActionListener(comp, action);
    gqlActionListener(comp, action);
    mailerActionListener(comp, action);
    pageActionListener(comp, action)
  }
}

export default actionListener