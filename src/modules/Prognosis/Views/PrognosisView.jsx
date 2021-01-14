import React from 'react';

// components
import ScrollContainer from 'react-indiana-drag-scroll';
import PrognosisCard from '../Components/PrognosisCard/PrognosisCard';
import PrognosisQuotes from '../Components/PrognosisQuotes/PrognosisQuotes';
import Button from '~cmp/Button/Button';
// styles
import s from './PrognosisViews.local';

const cardsArray = [
  {
    date: '27 июня',
    title: 'EUR/USD прогноз Евро Доллар на 14 ноября 2019',
    excerpt:
      'В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы).',
    img: './assets/img/prognosis-card.jpg',
    category: 'EUR/USD',
  },
];

const PrognosisView = () => {
  return (
    <div className={s.Wrapper}>
      <main>
        <ScrollContainer className={s.CardsControls}>
          <Button type="button" variant="chip" cls="is-active" text="Все" />
          <Button type="button" variant="chip" text="EUR/USD" />
          <Button type="button" variant="chip" text="EUR/RUB" />
          <Button type="button" variant="chip" text="usd/jpy" />
          <Button type="button" variant="chip" text="USD/CHF" />
          <Button type="button" variant="chip" text="USD/CAD" />
          <Button type="button" variant="chip" text="Серебро" />
          <Button type="button" variant="chip" text="Золото" />
          <Button type="button" variant="chip" text="Нефть" />
        </ScrollContainer>
        <div className={s.Cards}>
          {cardsArray.map((card) => (
            <PrognosisCard
              key={card.category}
              category={card.category}
              date={card.date}
              title={card.title}
              img={card.img}
              alt={card.title}
              excerpt={card.excerpt}
            />
          ))}
        </div>
      </main>
      <aside>
        <PrognosisQuotes />
      </aside>
    </div>
  );
};

export default PrognosisView;
