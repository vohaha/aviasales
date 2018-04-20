import * as classNames from 'classnames';
import * as React from 'react';
import './index.css';

interface IRadioProps extends React.HTMLProps<HTMLDivElement> {
  radios: Array<React.HTMLProps<HTMLInputElement> & { labeltext: string }>;
  name: string;
}

export const Radio: React.SFC<IRadioProps> = ({ radios, name, ...props }) => {
  return (
    <div {...props} className={classNames('radio', props.className || '')}>
      {radios.map((item, index) => (
        <React.Fragment key={item.value + ''}>
          <input
            id={name + index}
            type="radio"
            name={name}
            {...item}
            className={classNames('radio__input', item.className || '')}
          />
          <label htmlFor={name + index} className="radio__label">
            {item.labeltext}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Radio;
