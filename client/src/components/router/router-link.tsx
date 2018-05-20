import * as React from 'react';
import { NavLink } from 'reactstrap';
import { ApplicationContext } from '../../App';

interface IProps {
  linkText: string
  to: string
}

const RouterLink: React.SFC<IProps> = (props: IProps) => (
  <ApplicationContext.Consumer>
    {state => (
      // tslint:disable-next-line:jsx-no-lambda
      <NavLink onClick={() => {state.location.changeLocation(props.to)}}>{props.linkText}</NavLink>
    )}
  </ApplicationContext.Consumer>
)

export default RouterLink