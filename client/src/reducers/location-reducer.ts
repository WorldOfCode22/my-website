export interface IApplicationLocation {
  lastLocation: string,
  location: string,
  nextLocation: string
}

export function getLocationDefaults(): IApplicationLocation {
  return {
    lastLocation: "/",
    location: "/",
    nextLocation: "/"
  }
}
