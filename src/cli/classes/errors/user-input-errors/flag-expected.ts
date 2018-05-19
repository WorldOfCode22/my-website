import { UserInputError } from './user-input-error'

/**
 * error that is thrown when a flag is expected but not given
 */
export class FlagExpected extends UserInputError {
  constructor (message?: string) {
    const theMessage = message ? message : 'A flag was expected for the given command'
    super(theMessage, 'Flag Expected Error', 4000)
  }
}
