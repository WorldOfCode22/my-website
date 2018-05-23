import { IState } from "../App";

export interface IGQLCommandStatus {
  active: boolean,
  data: {},
  loading: boolean,
  seatData: (data: any, local: string) => void
}

export const mockGQL: IGQLCommandStatus = {
  active: false,
  data: {},
  loading: false,
  // tslint:disable-next-line:no-empty
  seatData: (data: any, local: string) => {}
}

export function getGQLDefaults (comp: React.Component<{}, IState>): IGQLCommandStatus {
  return {
    active: false,
    data: {},
    loading: false,
    seatData: (data: any, local: string) => {
      const {gql, location} = comp.state
      gql.loading = false;
      gql.active = false;
      gql.data = data
      location.location = local
      comp.setState({gql, location})
      // tslint:disable-next-line:no-console
      console.log(local, comp.state)
    }
  }
}