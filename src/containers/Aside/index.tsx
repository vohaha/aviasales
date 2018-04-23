import * as React from 'react';
import Button from '../../components/Button';
import ChoiceBox from '../../components/ChoiceBox';

const Aside = () => (
  <React.Fragment>
    <section className="template__block">
      <h2 className="template__title">Валюта</h2>
      <ChoiceBox
        type="radio"
        radios={[
          {
            value: 'rub',
            labeltext: 'rub',
            defaultChecked: true,
          },
          {
            value: 'usd',
            labeltext: 'usd',
          },
          {
            value: 'eur',
            labeltext: 'eur',
          },
        ]}
        name="currency"
      />
    </section>
    <section className="template__block template__block--full-width">
      <h2 className="template__title">Количество пересадок</h2>
      <ChoiceBox
        type="checkbox"
        radios={[
          {
            value: 'all',
            labeltext: 'Все',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
          {
            value: '0',
            labeltext: 'Без пересадок',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
          {
            value: '2',
            labeltext: '2 пересадки',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
          {
            value: '3',
            labeltext: '3 пересадки',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
        ]}
        name="transfer"
      />
    </section>
  </React.Fragment>
);

export default Aside;
