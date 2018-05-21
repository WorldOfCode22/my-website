import { createTransport, Transporter } from 'nodemailer'
import ConfigurationManager from './configuration-manager'
import { MailOptions } from 'nodemailer/lib/sendmail-transport'
class Mailer {
  private _transporter: Transporter
  constructor (configuration: ConfigurationManager) {
    this._transporter = createTransport(configuration.emailAuth)
  }

  public sendEmail (type: string, to: string) {
    let emailInfo = this.getEmailInfo(type, to)
    this._transporter.sendMail(emailInfo, (error, info) => {
      if (error) {
        process.stderr.write(error.toString())
      } else {
        process.stdout.write('Email Sent')
      }
    })
  }
  private getEmailInfo (type: string, to: string): MailOptions {
    switch (type) {
      case 'test':
        return {
          from: 'Sloan Gwaltney',
          text: 'This was sent from my web server',
          to,
          html: '<b>This was sent from my web server</b>',
          subject: 'Test of my skills'
        }
      default:
        return {
          from: 'Sloan Gwaltney',
          to
        }
    }
  }
}

export default Mailer
