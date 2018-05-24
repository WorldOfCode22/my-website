import * as React from 'react';
import {Col, Container, Row} from 'reactstrap';
import actionListener, { IAction } from './action-reducers';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Router from './components/router/router';
import { getEnvironment, IEnvironment } from './reducers/env';
import {getGQLDefaults, IGQLCommandStatus, mockGQL} from "./reducers/gql-reducer";
import {getLocationDefaults, IApplicationLocation, mockApplicationLocation } from './reducers/location-reducer';
import { getDefaultMailer, IMailer, mockMailerData } from './reducers/mailer-reducer';
import {getDefaultNavigation, INavigation, mockNavigation} from "./reducers/navigation-reducer"
import { getHomePage, IPage } from './reducers/page-reducer';


export interface IState {
  // tslint:disable-next-line:ban-types
  actionListener: (action: IAction) => void,
  env: IEnvironment,
  gql: IGQLCommandStatus,
  mailer: IMailer,
  page: IPage
  navigation: INavigation
  location: IApplicationLocation
}

export const ApplicationContext = React.createContext({
  // tslint:disable-next-line:no-empty
  actionListener: (action: IAction) => {},
  env: getEnvironment(),
  gql: mockGQL,
  location: mockApplicationLocation,
  mailer: mockMailerData,
  navigation: mockNavigation(),
  page: getHomePage(),
})

class App extends React.Component<{}, IState> {
  public state: IState = {
    actionListener: (action: IAction) => {
      actionListener(this, action)
    },
    env: getEnvironment(),
    gql: getGQLDefaults(this),
    location: getLocationDefaults(this),
    mailer: getDefaultMailer(this),
    navigation: getDefaultNavigation(this),
    page: getHomePage(),
  }
  public render() {
    return (
      <ApplicationContext.Provider value={this.state}>
        <Container fluid={true}>
          <Header />
          <Row>
          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <Navbar />
          </Col>
              <Router />
          </Row>
        </Container>
      </ApplicationContext.Provider>
    );
  }
}

export default App;
