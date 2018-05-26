import * as React from 'react';
import {Col, Container, Row} from 'reactstrap';
import actionListener, { IAction } from './action-reducers';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Router from './components/router/router';
import getChatDefaults, { IChat } from './reducers/chat-reducer';
import { getEnvironment, IEnvironment } from './reducers/env';
import {getGQLDefaults, IGQLCommandStatus} from "./reducers/gql-reducer";
import {getLocationDefaults, IApplicationLocation} from './reducers/location-reducer';
import { getDefaultMailer, IMailer } from './reducers/mailer-reducer';
import {getDefaultNavigation, INavigation} from "./reducers/navigation-reducer"
import { getHomePage, IPage } from './reducers/page-reducer';
import { getSocketDefaults, ISocket} from './reducers/socket-reducer';


export interface IState {
  // tslint:disable-next-line:ban-types
  actionListener: (action: IAction) => void,
  chat: IChat,
  env: IEnvironment,
  gql: IGQLCommandStatus,
  mailer: IMailer,
  page: IPage,
  navigation: INavigation,
  location: IApplicationLocation,
  socket: ISocket
}

export const ApplicationContext = React.createContext({
  // tslint:disable-next-line:no-empty
  actionListener: (action: IAction) => {},
  chat: getChatDefaults(),
  env: getEnvironment(),
  gql: getGQLDefaults(),
  location: getLocationDefaults(),
  mailer: getDefaultMailer(),
  navigation: getDefaultNavigation(),
  page: getHomePage(),
})

class App extends React.Component<{}, IState> {
  public state: IState = {
    actionListener: (action: IAction) => {
      actionListener(this, action)
    },
    chat: getChatDefaults(),
    env: getEnvironment(),
    gql: getGQLDefaults(),
    location: getLocationDefaults(),
    mailer: getDefaultMailer(),
    navigation: getDefaultNavigation(),
    page: getHomePage(),
    socket: getSocketDefaults(this)
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
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Router />
          </Col>
          <Col />
          </Row>
        </Container>
      </ApplicationContext.Provider>
    );
  }
}

export default App;
