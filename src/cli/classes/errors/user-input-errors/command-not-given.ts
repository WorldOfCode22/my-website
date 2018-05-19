import { UserInputError } from './user-input-error'
/**
 * Error thrown when a command is not given to the command line
 */
export class CommandNotGiven extends UserInputError {
  constructor (message?: string) {
    let theMessage = message ? message : 'A command was not supplied to the command line.'
    super(theMessage, 'Command Not Given Error', 4000)
  }
}
