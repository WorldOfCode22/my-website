/**
 * Top level cli error that all over command line errors extend
 */
export class CommandLineError extends Error {
  interface: string
  partyAtFault: string
  errorCode: number
  type: string
  constructor (message: string, type: string, name: string, partyAtFault: string, errorCode: number) {
    super(message)
    this.interface = 'Command Line Interface'
    this.partyAtFault = partyAtFault
    this.errorCode = errorCode
    this.type = type
    super.name = name
  }
}
