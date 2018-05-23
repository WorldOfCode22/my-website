import * as React from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { ApplicationContext } from '../../../App';

const NodeMailer = () => (
  <ApplicationContext.Consumer>
    {state => {
      if (state.gql.data.empty) {
        return <MailerTestForm formData={state.mailer}/>
      } else {
        return <MailerDone />
      }
    }}
  </ApplicationContext.Consumer>
)

interface IFormProps {
  formData: {}
}
const MailerTestForm = (props: IFormProps) => (
  <Col className="text-center">
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label>Type of Email</Label>
        <Input type="select">
          <option>Show of ability to use NodeMailer</option>
          <option>Contact Me Verification</option>
        </Input>
      </FormGroup>
      <Button color="primary">Send Email</Button>
    </Form>
  </Col>
)

const MailerDone = () => (
  <h1>Mail Sent</h1>
)
export default NodeMailer