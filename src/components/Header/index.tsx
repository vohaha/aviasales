import * as React from 'react';
import './index.css';

export const Header: React.SFC<React.HTMLProps<HTMLElement>> = ({ children }) => {
  return <header className="header">{React.Children.toArray(children)}</header>;
};

export default Header;
