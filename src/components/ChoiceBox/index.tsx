import * as classNames from 'classnames';
import * as React from 'react';
import './index.css';

interface IChoiceBoxProps extends React.HTMLProps<HTMLUListElement> {
  radios: Array<
    React.HTMLProps<HTMLInputElement> & {
      additionalrender?: () => any;
      labeltext: string;
    }
  >;
  name: string;
  type: 'radio' | 'checkbox';
}

export const Radio: React.SFC<IChoiceBoxProps> = ({ type, radios, name, ...props }) => {
  return (
    <ul {...props} className={classNames(type, props.className || '')}>
      {radios.map(({ additionalrender, ...item }, index) => (
        <li className={`${type}__item`} key={item.value + ''}>
          <input
            id={name + index}
            type={type}
            name={name}
            {...item}
            className={classNames(`${type}__input`, item.className || '')}
          />
          <label htmlFor={name + index} className={`${type}__label`}>
            {item.labeltext}
          </label>
          {additionalrender && additionalrender()}
        </li>
      ))}
    </ul>
  );
};

export default Radio;
