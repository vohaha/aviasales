import * as classNames from 'classnames';
import * as React from 'react';
import './index.css';

export interface IChoiceBoxVariant extends React.HTMLProps<HTMLInputElement> {
  value: string;
  additionalrender?: () => any;
  labeltext: string;
  defaultChecked?: boolean;
}

export interface IChoiceBoxProps extends React.HTMLProps<HTMLUListElement> {
  variants: IChoiceBoxVariant[];
  name: string;
  type: 'radio' | 'checkbox';
  commonOnchange?: (e: React.FormEvent<HTMLUListElement>) => void;
}

export const ChoiceBox: React.SFC<IChoiceBoxProps> = ({
  type,
  variants,
  name,
  commonOnchange,
  ...props
}) => {
  return (
    <ul
      {...props}
      className={classNames(type, props.className || '')}
      onChange={commonOnchange}
    >
      {variants.map(({ additionalrender, ...item }, index) => (
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

export default ChoiceBox;
