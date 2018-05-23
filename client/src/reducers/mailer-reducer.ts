import { IState } from "../App";

export interface IMailer {
  to: string,
  type: string,
  sendMail: (to: string, type: string) => void
}

export const mockMailerData: IMailer = {
  // tslint:disable-next-line:no-empty
  sendMail: (to: string, type: string) => {},
  to: "",
  type: ""
}

export function getDefaultMailer (comp: React.Component<{}, IState>) {
  return {
    sendMail: (to: string, type: string) => {
      const { gql, location, mailer} = comp.state;
      mailer.to = to;
      mailer.type = type;
      gql.loading = true;
      location.location = '/loading';
      comp.setState({gql, mailer});
    },
    to: "",
    type: ""
  }
}