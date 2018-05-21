interface IEmailAuth {
  service: string,
  auth: {
    user: string,
    pass: string
  }
}

export default IEmailAuth
