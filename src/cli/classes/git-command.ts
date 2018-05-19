import { Flag } from '../classes/flag'
import { FlagExpected } from './errors/user-input-errors/flag-expected'
import { spawn } from 'child_process'
import { StringDecoder } from 'string_decoder'
/**
 * class to process git command
 */
export class GitCommand {
  private _flags: Flag[]
  private _flagCommand?: string
  private _remote: boolean = false
  private _local: boolean = true
  private _branch?: string
  constructor (flags: Flag[]) {
    this._flags = flags
    this.getConfig()
  }

  private getConfig (): void {
    for (let i = 0; i < this._flags.length; i++) {
      if (this._flags[i].title === 'b' || this._flags[i].title === 'branch') {
        this._branch = this._flags[i].value
      } else if (this._flags[i].title === 'r' || this._flags[i].title === 'remote') {
        this._remote = true
        this._local = false
      } else if (this._flags[i].title === 'push' || this._flags[i].title === 'p') {
        this._flagCommand = 'push'
      }
    }
    this.runCommand()
  }

  private runCommand () {
    if (this._branch) {
      if (this._flagCommand === 'push') {
        this.runPush()
      } else {
        throw new FlagExpected('No flag was provided to the git command. a command flag such as -p or --push is needed to run git command')
      }
    } else {
      throw new FlagExpected('git must have a branch. Please use the branch flag')
    }
  }

  private runPush () {
    let push = spawn('git', [`push ${this._remote ? 'origin' : ''} ${this._branch}`], { shell: true })
    push.stdout.on('data', (data) => {
      if (Buffer.isBuffer(data)) {
        console.log(data.toString())
      } else {
        console.log(data)
      }
    })
    push.stderr.on('data', (data) => {
      if (Buffer.isBuffer(data)) {
        console.log(data.toString())
      } else {
        console.log(data)
      }
    })
    push.on('close', () => {
      console.log('Projected Pushed')
    })
  }
}
