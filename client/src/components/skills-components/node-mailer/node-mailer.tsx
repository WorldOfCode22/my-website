import * as React from 'react'
import { ApplicationContext } from '../../../App';

const NodeMailer = () => (
  <ApplicationContext.Consumer>
    {state => (
      <div>
        <h1>Node Mailer Test Page</h1>
      </div>
    )}
  </ApplicationContext.Consumer>
)

export default NodeMailer