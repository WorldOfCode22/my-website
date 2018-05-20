export interface IPage {
  title: string
  heading: string
  subHeading: string
}

export function getHomePage(): IPage {
  return {
    heading: "Sloan Gwaltney",
    subHeading: "A passionate diversified web developer",
    title: "Home"
  }
}