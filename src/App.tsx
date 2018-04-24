import * as React from 'react';
import { Provider } from 'react-redux';
import TemplateBase from './components/TemplateBase';
import store from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <TemplateBase />
      </Provider>
    );
  }
}

export default App;
