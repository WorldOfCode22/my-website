export interface INavigation {
  skillsOpen: boolean
}

export function getDefaultNavigation(): INavigation {
  return {
    skillsOpen: false
  }
}