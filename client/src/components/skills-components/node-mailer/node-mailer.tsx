import * as React from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { IMailer } from 'src/reducers/mailer-reducer';
import {createAction, IAction } from '../../../action-reducers';
import { ApplicationContext } from '../../../App';

const NodeMailer = () => (
  <ApplicationContext.Consumer>
    {state => {
      if (!state.gql.active) {
        return <MailerTestForm formData={state.mailer} actionListener={state.actionListener}/>
      } else {
        return <MailerDone />
      }
    }}
  </ApplicationContext.Consumer>
)

interface IFormProps {
  formData: IMailer,
  actionListener: (action: IAction) => void
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
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button color="primary" onClick={(event: React.SyntheticEvent<MouseEvent>) => {
        event.preventDefault();
        props.actionListener(createAction("EMAIL REQUESTED", {mailer: {type: "", to: ""}}));
      }}>Send Email</Button>
    </Form>
  </Col>
)

const MailerDone = () => (
  <h1>Mail Sent</h1>
)
export default NodeMailer