import Mailer from '../../classes/mailer'
import ConfigurationManager from '../../classes/configuration-manager'

async function resolver (args: any) {
  try {
    const NodeMailer = new Mailer(new ConfigurationManager())
    await NodeMailer.sendEmail(args.type, args.to)
    return {
      emailSent: true
    }
  } catch (e) {
    throw e
  }
}

export default resolver
