import * as classNames from 'classnames';
import * as React from 'react';
import './index.css';

export const Button: React.SFC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button type="button" {...props} className={classNames('btn', props.className)}>
      {React.Children.toArray(children)}
    </button>
  );
};

export default Button;
