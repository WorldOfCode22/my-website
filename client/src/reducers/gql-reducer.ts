export interface IGQLCommandStatus {
  active: boolean,
  data: {},
  errors: [{}] | undefined
  loading: boolean
}

export function getGQLDefaults (): IGQLCommandStatus {
  return {
    active: false,
    data: {},
    errors: undefined,
    loading: false
  }
}