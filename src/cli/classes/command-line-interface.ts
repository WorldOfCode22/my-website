import { CommandNotGiven } from './errors/user-input-errors/command-not-given'
import { Flag } from './flag'
import { FlagExpected } from './errors/user-input-errors/flag-expected'
import { GitCommand } from './git-command'
import ApiCommand from './api-command'
/**
 * Class that is the top level of cli functions
 */
export class CommandLineInterface {
  private _command: string
  private _flags: Flag[] | null
  constructor () {
    this._command = this.getCommand()
    this._flags = this.getFlags()
    this.parseFlagValues()
    this.runCommand()
  }

  /**
   * Gets command from command line
   */
  getCommand (): string {
    if (process.argv[2]) {
      return process.argv[2]
    }
    throw new CommandNotGiven()
  }

  /**
   * gets flags from command line
   */
  getFlags (): Flag[] | null {
    const flags: Flag[] = []
    if (process.argv[3]) {
      for (let i = 2; i < process.argv.length; i++) {
        if (process.argv[i][0] === '-') {
          if (process.argv[i][1] === '-') {
            flags.push(new Flag('long', process.argv[i]))
          } else {
            flags.push(new Flag('short', process.argv[i]))
          }
        }
      }
      return flags
    } else {
      return null
    }
  }

  /**
   * sets the value for flags that have value
   */
  parseFlagValues (): void {
    if (this._flags) {
      this._flags.forEach(element => {
        if (element.content.indexOf('=') > -1) {
          let flagValuePair: string[] = element.content.split('=')
          element.value = flagValuePair[1]
          element.title = element.short ? flagValuePair[0].slice(1) : flagValuePair[0].slice(2)
        } else {
          element.title = element.short ? element.content.slice(1) : element.content.slice(2)
        }
      })
    }
  }

  runCommand (): void {
    switch (this._command) {
      case 'git':
        if (this._flags) {
          // tslint:disable-next-line:no-unused-expression
          new GitCommand(this._flags)
        } else {
          throw new FlagExpected()
        }
        break
      case 'api':
        if (this._flags) {
          // tslint:disable-next-line:no-unused-expression
          new ApiCommand(this._flags)
        } else {
          // tslint:disable-next-line:no-unused-expression
          new ApiCommand()
        }
    }
  }

}
