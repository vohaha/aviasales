import { ReactNode } from 'react';
import * as React from 'react';
import './index.css';

interface Iprops {
  children?: ReactNode;
}

export const Header: React.StatelessComponent<Iprops> = ({ children }) => {
  return <header className="header">{React.Children.toArray(children)}</header>;
};

export default Header;
