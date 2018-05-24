export interface IGQLCommandStatus {
  active: boolean,
  data: {},
  loading: boolean
}

export function getGQLDefaults (): IGQLCommandStatus {
  return {
    active: false,
    data: {},
    loading: false
  }
}