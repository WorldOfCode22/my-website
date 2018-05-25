import io from 'socket.io'

export default class IOManager {
  private _ioServer: io.Server
  private _socket: io.Socket | undefined
  constructor (io: io.Server) {
    this._ioServer = io
    this.setupSocket()
  }

  private setupSocket () {
    this._ioServer.on('connection', (socket) => {
      console.log('New Socket Connection')
    })
  }
}
