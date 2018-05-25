import ConfigurationManager from './classes/configuration-manager'
import ExpressApplication from './classes/express-application'
import Mailer from './classes/mailer'

const config = new ConfigurationManager()

const app = new ExpressApplication()

app.server.listen(config.port, () => {
  process.stdout.write('Application waiting for request on port: ' + config.port)
})
