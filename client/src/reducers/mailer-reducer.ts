export interface IMailer {
  to: string,
  type: string,
}

export function getDefaultMailer () {
  return {
    to: "",
    type: "Test"
  }
}