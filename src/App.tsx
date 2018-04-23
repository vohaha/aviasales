import * as React from 'react';
import TemplateBase from './components/TemplateBase';
import Aside from './containers/Aside';
import Tickets from './containers/Tickets';

class App extends React.Component {
  public render() {
    return <TemplateBase aside={Aside} content={Tickets} />;
  }
}

export default App;
