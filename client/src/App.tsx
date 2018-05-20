import * as React from 'react';
import {Container} from 'reactstrap';
import './App.css';
import Header from "./components/header/header"
import { getHomePage, IPage } from './reducers/page-reducer';

interface IState {
  page: IPage
}

export const ApplicationContext = React.createContext({
  page: getHomePage()
})

class App extends React.Component<{}, IState> {
  public state: IState = {
    page: getHomePage()
  }
  public render() {
    return (
      <ApplicationContext.Provider value={this.state}>
        <Container>
          <Header />
        </Container>
      </ApplicationContext.Provider>
    );
  }
}

export default App;
