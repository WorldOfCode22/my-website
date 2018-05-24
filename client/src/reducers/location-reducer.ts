export interface IApplicationLocation {
  location: string
}

export function getLocationDefaults(): IApplicationLocation {
  return {
    location: "/"
  }
}
