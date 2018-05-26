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
      this._socket = socket
      this._socket.on('MESSAGE TO SERVER', this.onMessageToServer.bind(this))
    })
  }

  private onMessageToServer () {
    if (this._socket) {
      this._socket.emit('SERVER RECEIVED USER MESSAGE')
      this.respondToUser()
    } else {
      console.log('No Socket..... How?')
    }
  }

  private respondToUser () {
    if (this._socket) {
      this._socket.emit('SERVER RESPONDED TO USER MESSAGE', 'test')
    } else {
      console.log('No Socket..... How?')
    }
  }
}
