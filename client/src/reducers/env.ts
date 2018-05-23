export interface IEnvironment {
  mode: "DEVELOPMENT" | "PRODUCTION",
  gqlFetch: "http://localhost:4000/graphql" | "/grpaphql"
}

const mode = "DEVELOPMENT"

export function getEnvironment (): IEnvironment {
  switch (mode) {
    case "DEVELOPMENT": 
      return {
        gqlFetch: "http://localhost:4000/graphql",
        mode
      }
    default:
      return {
        gqlFetch: "http://localhost:4000/graphql",
        mode
      }
  }
}