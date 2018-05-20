import * as React from 'react';
import {Container} from 'reactstrap';
import './App.css';
import Header from "./components/header/header"
import {getDefaultNavigation, INavigation, mockNavigation} from "./reducers/navigation-reducer"
import { getHomePage, IPage } from './reducers/page-reducer';

export interface IState {
  page: IPage
  navigation: INavigation
}

export const ApplicationContext = React.createContext({
  navigation: mockNavigation(),
  page: getHomePage()
})

class App extends React.Component<{}, IState> {
  public state: IState = {
    navigation: getDefaultNavigation(this),
    page: getHomePage(),
  }
  public render() {
    return (
      <ApplicationContext.Provider value={this.state}>
        <Container fluid={true}>
          <Header />
        </Container>
      </ApplicationContext.Provider>
    );
  }
}

export default App;
