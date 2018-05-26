import * as React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
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
  <div className="text-center">
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" 
          // tslint:disable-next-line:jsx-no-lambda
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            // tslint:disable-next-line:no-console
            props.actionListener(createAction("TO INPUT CHANGE", {mailer: {toInputChange: event.target.value}}))
          }} />
      </FormGroup>
      <FormGroup>
        <Label>Type of Email</Label>
        {/* tslint:disable-next-line:jsx-no-lambda */}
        <Input type="select" value={props.formData.type} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.actionListener(createAction("TYPE INPUT CHANGE", {mailer: {typeInputChange: event.target.value}}))
        }}>
          <option value="Test">Show of ability to use NodeMailer</option>
          <option value="Contact Me">Contact Me Verification</option>
        </Input>
      </FormGroup>
      {/* tslint:disable-next-line:jsx-no-lambda */}
      <Button color="primary" onClick={(event: React.SyntheticEvent<MouseEvent>) => {
        event.preventDefault();
        props.actionListener(createAction("EMAIL REQUESTED", {mailer: {type: props.formData.type, to: props.formData.to}}));
      }}>Send Email</Button>
    </Form>
  </div>
)

const MailerDone = () => (
  <h1>Mail Sent</h1>
)
export default NodeMailer