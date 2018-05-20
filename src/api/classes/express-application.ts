import express from 'express'
import expressGraphQL from 'express-graphql'
import ConfigurationManager from '../classes/configuration-manager'
import Schema from '../gql/schema'

export default class ExpressApplication {
  private _application: express.Express = express()
  constructor () {
    this.setup()
  }

  private setup () {
    this._application.use('/graphql', expressGraphQL({
      graphiql: true,
      schema: Schema
    }))
  }
  get application (): express.Express {
    return this._application
  }
}
