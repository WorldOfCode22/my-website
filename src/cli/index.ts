// cli entry point
import { CommandLineInterface } from './classes/command-line-interface'
import { CommandNotGiven } from './classes/errors/user-input-errors/command-not-given'
try {
  let cli = new CommandLineInterface()
} catch (e) {
  if (e instanceof CommandNotGiven) {
    console.log('A command must be provided to use this application. Please try again with a command provided')
  } else {
    console.log(e)
  }
}
