import { CommandLineError } from '../command-line-error'
/**
 * Super class of all user input errors
 */
export class UserInputError extends CommandLineError {
  constructor (message: string, name: string, errorCode: number) {
    super(message ,'User Input Error', name, 'User', errorCode)
  }
}
