import * as React from 'react';
import {Container} from 'reactstrap';
import './App.css';
import Header from "./components/header/header"
import Router from './components/router/router';
import {getLocationDefaults, IApplicationLocation, mockApplicationLocation } from './reducers/location-reducer';
import {getDefaultNavigation, INavigation, mockNavigation} from "./reducers/navigation-reducer"
import { getHomePage, IPage } from './reducers/page-reducer';

export interface IState {
  page: IPage
  navigation: INavigation
  location: IApplicationLocation
}

export const ApplicationContext = React.createContext({
  location: mockApplicationLocation,
  navigation: mockNavigation(),
  page: getHomePage(),
})

class App extends React.Component<{}, IState> {
  public state: IState = {
    location: getLocationDefaults(this),
    navigation: getDefaultNavigation(this),
    page: getHomePage(),
  }
  public render() {
    return (
      <ApplicationContext.Provider value={this.state}>
        <Container fluid={true}>
          <Header />
          <Router />
        </Container>
      </ApplicationContext.Provider>
    );
  }
}

export default App;
