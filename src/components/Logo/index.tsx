import * as React from 'react';
import './index.css';
import LogoImg from './LogoImg';

export const Logo: React.SFC<React.HTMLProps<HTMLHeadingElement>> = () => {
  return (
    <h1 className="logo">
      Aviasales<LogoImg className="logo__img" />
    </h1>
  );
};

export default Logo;
