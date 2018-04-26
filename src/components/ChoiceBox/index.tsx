import * as classNames from 'classnames';
import * as React from 'react';
import './index.css';

export interface IChoiceBoxVariant extends React.HTMLProps<HTMLInputElement> {
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

export class ChoiceBox extends React.Component<IChoiceBoxProps> {
  public render() {
    const { type, variants, name, commonOnchange, ...props } = this.props;
    return (
      <ul
        {...props}
        className={classNames(type, props.className || '')}
        onChange={commonOnchange}
      >
        {variants.map(({ additionalrender, labeltext, ...item }, index) => (
          <li className={`${type}__item`} key={item.value + ''}>
            <input
              id={name + index}
              type={type}
              name={name}
              {...item}
              className={classNames(`${type}__input`, item.className || '')}
            />
            <label htmlFor={name + index} className={`${type}__label`}>
              {labeltext}
            </label>
            {typeof additionalrender === 'function' && additionalrender()}
          </li>
        ))}
      </ul>
    );
  }
}

export default ChoiceBox;
