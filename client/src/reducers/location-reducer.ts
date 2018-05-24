export interface IApplicationLocation {
  lastLocation: string,
  location: string
}

export function getLocationDefaults(): IApplicationLocation {
  return {
    lastLocation: "/",
    location: "/"
  }
}
