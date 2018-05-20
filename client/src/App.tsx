import * as React from 'react';
import {Container} from 'reactstrap';
import './App.css';
import Header from "./components/header/header"

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}

export default App;
