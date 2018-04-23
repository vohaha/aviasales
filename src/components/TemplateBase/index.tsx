import * as React from 'react';
import Header from '../Header';
import Logo from '../Logo';
import Paper from '../Paper';
import './index.css';

export const TemplateBase: React.SFC<{
  aside: () => any;
  content: () => any;
}> = props => {
  return (
    <React.Fragment>
      <Header>
        <Logo />
      </Header>
      <main>
        <div className="template">
          <Paper tag="aside" className="template__aside">
            {props.aside && props.aside()}
          </Paper>
          <section className="template__content">
            {props.content && props.content()}
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TemplateBase;
