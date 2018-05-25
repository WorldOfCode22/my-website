import express from 'express'
import expressGraphQL from 'express-graphql'
import ConfigurationManager from '../classes/configuration-manager'
import Schema from '../gql/schema'
import cors from 'cors'
import { createServer, Server } from 'http'
import io from 'socket.io'
import IOManager from './io-manager'

export default class ExpressApplication {
  private _application: express.Express = express()
  private _server: Server = new Server(this._application)
  private _io = new IOManager(io(this._server))
  constructor () {
    this.setup()
  }

  private setup () {
    this._application.use(cors({ origin: 'http://localhost:3000' }))
    this._application.use('/graphql', expressGraphQL({
      graphiql: true,
      schema: Schema
    }))
  }
  get application (): express.Express {
    return this._application
  }

  get server (): Server {
    return this._server
  }
}
