export interface IGQLCommandStatus {
  data: {},
  loading: boolean
}

export function getGQLDefaults(): IGQLCommandStatus {
  return {
    data: {},
    loading: false
  }
}