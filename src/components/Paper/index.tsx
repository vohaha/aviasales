import { ReactNode } from 'react';
import * as React from 'react';
import './index.css';

interface IPaperProps extends React.HTMLProps<HTMLElementTagNameMap> {
  children?: ReactNode;
  tag?: string;
}

export const Paper: React.SFC<IPaperProps> = ({ tag = 'div', children, ...props }) => {
  return React.createElement(
    tag,
    { ...props, className: 'paper ' + props.className },
    React.Children.toArray(children),
  );
};

export default Paper;
