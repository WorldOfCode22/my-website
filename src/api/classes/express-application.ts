import express from 'express'
import ConfigurationManager from '../classes/configuration-manager'

export default class ExpressApplication {
  private _application: express.Express = express()
  // tslint:disable-next-line:no-empty
  constructor () {}

  get application (): express.Express {
    return this._application
  }
}
