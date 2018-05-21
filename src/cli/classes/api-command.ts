import { Flag } from './flag'
import { spawn } from 'child_process'
import { join } from 'path'
class ApiCommand {
  private _flags: Flag[] | null
  constructor (flags?: Flag[]) {
    flags ? this._flags = flags : this._flags = null
    this.run()
  }

  run () {
    let api = spawn('node', ['index.js'], { cwd: join(__dirname, '../../../build/api') })

    api.stdout.on('data', (data) => {
      if (Buffer.isBuffer(data)) {
        console.log(data.toString())
      } else {
        console.log(data)
      }
    })

    api.stderr.on('data', (data) => {
      if (Buffer.isBuffer(data)) {
        console.log(data.toString())
      } else {
        console.log(data)
      }
    })
  }
}

export default ApiCommand
