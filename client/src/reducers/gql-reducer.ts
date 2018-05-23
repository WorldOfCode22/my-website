export interface IGQLCommandStatus {
  data: {
    empty: boolean
  },
  loading: boolean
}

export function getGQLDefaults(): IGQLCommandStatus {
  return {
    data: {
      empty: true
    },
    loading: false
  }
}