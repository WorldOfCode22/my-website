export interface IMailer {
  to: string
}

export function getDefaultMailer () {
  return {
    to: ""
  }
}