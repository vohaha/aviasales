import * as React from 'react';
import Aside from '../../containers/Aside';
import Tickets from '../../containers/Tickets';
import Header from '../Header';
import Logo from '../Logo';
import Paper from '../Paper';
import './index.css';

export const TemplateBase: React.SFC = () => {
  return (
    <React.Fragment>
      <Header>
        <Logo />
      </Header>
      <main>
        <div className="template">
          <Paper tag="aside" className="template__aside">
            <Aside />
          </Paper>
          <section className="template__content">
            <Tickets />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TemplateBase;
