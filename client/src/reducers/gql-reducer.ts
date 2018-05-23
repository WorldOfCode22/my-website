import { IState } from "../App";

export interface IGQLCommandStatus {
  active: boolean,
  data: {},
  loading: boolean,
  seatData: (data: any) => void
}

export const mockGQL: IGQLCommandStatus = {
  active: false,
  data: {},
  loading: false,
  // tslint:disable-next-line:no-empty
  seatData: (data: any) => {}
}

export function getGQLDefaults (comp: React.Component<{}, IState>): IGQLCommandStatus {
  return {
    active: false,
    data: {},
    loading: false,
    seatData: (data: any) => {
      const {gql} = comp.state
      gql.loading = false;
      gql.active = false;
      gql.data = data
      comp.setState({gql})
    }
  }
}