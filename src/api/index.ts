import ConfigurationManager from './classes/configuration-manager'
import ExpressApplication from './classes/express-application'

const config = new ConfigurationManager('DEVELOPMENT')

const app = new ExpressApplication()

app.application.listen(config.port, () => {
  process.stdout.write('Application waiting for request on port: ' + config.port)
})
