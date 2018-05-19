import { UserInputError } from './user-input-error'
/**
 * Thrown when a command uses a flag that was given no value despite a value being expected
 */
export class UndefinedFlag extends UserInputError {
  constructor (message?: string) {
    const theMessage = message ? message : 'A flag value was parsed and expected to be used in a command, however, the flag was not given a value'
    super(theMessage, 'Undefined Flag Error', 4000)
  }
}
