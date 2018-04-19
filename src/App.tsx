import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header>
          <Logo />
        </Header>
        <main>hello</main>
      </React.Fragment>
    );
  }
}

export default App;
