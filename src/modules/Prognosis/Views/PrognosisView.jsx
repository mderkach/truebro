import React, { useState } from 'react';
import classNames from 'classnames/bind';
// components
import ScrollContainer from 'react-indiana-drag-scroll';
import PrognosisCard from '../Components/PrognosisCard/PrognosisCard';
import PrognosisQuotes from '../Components/PrognosisQuotes/PrognosisQuotes';
import PrognosisBrokersTable from '../Components/PrognosisBrokersTable/PrognosisBrokersTable';
import Button from '~cmp/Button/Button';
import Picture from '~cmp/Picture/Picture';
import ScreenSubscribe from '~cmp/Screen/ScreenSubscribe/ScreenSubscribe';
import Wrapper from '~cmp/Wrapper/Wrapper';
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
    like: 345,
    dislike: 0,
  },
  {
    date: '27 июня',
    title: 'EUR/USD прогноз Евро Доллар на 14 ноября 2019',
    excerpt:
      'В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы).',
    img: './assets/img/prognosis-card.jpg',
    category: 'EUR/RUB',
    like: 1,
    dislike: 0,
  },
  {
    date: '27 июня',
    title: 'EUR/USD прогноз Евро Доллар на 14 ноября 2019',
    excerpt:
      'В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы).',
    img: './assets/img/prognosis-card.jpg',
    category: 'EUR/JPY',
    like: 0,
    dislike: 1,
  },
  {
    date: '27 июня',
    title: 'EUR/USD прогноз Евро Доллар на 14 ноября 2019',
    excerpt:
      'В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы).',
    img: './assets/img/prognosis-card.jpg',
    category: 'USD/CHF',
    like: 0,
    dislike: 1,
  },
  {
    date: '27 июня',
    title: 'EUR/USD прогноз Евро Доллар на 14 ноября 2019',
    excerpt:
      'В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы).',
    img: './assets/img/prognosis-card.jpg',
    category: 'USD/CAD',
    like: 0,
    dislike: 1,
  },
];
const imgPath = './assets/img/';
const banner = [
  {
    src: `${imgPath}banner-big.jpg`,
    media: '(min-width: 1680px)',
  },
  {
    src: `${imgPath}banner-medium.jpg`,
    media: '(min-width: 1366px) and (max-width: 1679px)',
  },
  {
    src: `${imgPath}banner-small.jpg`,
    media: '(min-width: 767px) and (max-width: 1365px)',
  },
  {
    src: `${imgPath}banner-medium.jpg`,
    media: '(max-width: 767px)',
  },
];

const categories = [
  'Все',
  'EUR/USD',
  'EUR/RUB',
  'USD/JPY',
  'USD/CHF',
  'USD/CAD',
  'Серебро',
  'Золото',
  'Нефть',
];

const tabs = ['Прогнозы форекс', 'Крипто прогнозы'];

const PrognosisView = () => {
  const [cardsCategory, setCardsCategory] = useState(categories[0]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const RenderTabsBtn = () =>
    tabs.map((item) => (
      <Button
        type="button"
        variant="tertiary"
        cls={classNames(s.TabButton, activeTab === item ? 'is-active' : null)}
        text={item}
        key={item}
        onClick={() => setActiveTab(item)}
      />
    ));

  const RenderButtons = () =>
    categories.map((item) => (
      <Button
        key={item}
        type="button"
        variant="chip"
        cls={cardsCategory === item ? 'is-active' : null}
        text={item}
        onClick={() => setCardsCategory(item)}
      />
    ));

  return (
    <div className={s.Wrapper}>
      <main className={s.AreaMain}>
        <div className={s.TabButtonWrapper}>
          <RenderTabsBtn />
        </div>
        <div className={classNames(s.Tab, activeTab === tabs[0] ? 'is-active' : null)}>
          <ScrollContainer className={s.CardsControls}>
            <RenderButtons />
          </ScrollContainer>
          <div className={s.Cards}>
            {cardsArray.map((card) => {
              if (cardsCategory === categories[0]) {
                return (
                  <PrognosisCard
                    key={card.category}
                    category={card.category}
                    date={card.date}
                    title={card.title}
                    img={card.img}
                    alt={card.title}
                    excerpt={card.excerpt}
                    like={card.like}
                    dislike={card.dislike}
                  />
                );
              }
              if (cardsCategory === card.category) {
                return (
                  <PrognosisCard
                    key={card.category}
                    category={card.category}
                    date={card.date}
                    title={card.title}
                    img={card.img}
                    alt={card.title}
                    excerpt={card.excerpt}
                    like={card.like}
                    dislike={card.dislike}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className={classNames(s.Tab, activeTab === tabs[1] ? 'is-active' : null)}>
          content here
        </div>
      </main>
      <aside className={s.AreaAside}>
        <PrognosisQuotes />
        <Picture src={banner[0].src} media={banner} />
        <PrognosisBrokersTable />
      </aside>
      <Wrapper extClass={s.AreaSecondary}>
        <div className={s.Subscribe}>
          <ScreenSubscribe action="" />
        </div>
        <div className={s.Info}>
          <h2 className="h2 bold">FOREX прогноз EUR/USD</h2>
          <p className="text-regular">
            Выбор надежного брокера Форекс - это наиболее важный этап в работе любого трейдера.
            Важно чтобы компания заботилась об интересах своего клиента. Представленный выше рейтинг
            брокеров Форекс РФ подскажет Вам чьи услуги пользователи ценят больше. Именно качество
            услуг, предлагаемых выбранной компанией, в конечном счете влияет на то, достигнете ли Вы
            успеха в валютном трейдинге. Учитывая, что рынок Форекс в 2019 году в России только
            начинает законодательно регулироваться, этому вопросу стоит уделить особо пристальное
          </p>
          <h3 className="h3 medium">Форекс прогноз Евро Доллар (EUR/USD) на завтра</h3>
          <p className="text-regular">
            Выбор надежного брокера Форекс - это наиболее важный этап в работе любого трейдера.
            Важно чтобы компания заботилась об интересах своего клиента. Представленный выше рейтинг
            брокеров Форекс РФ подскажет Вам чьи услуги пользователи ценят больше. Именно качество
            услуг, предлагаемых выбранной компанией, в конечном счете влияет на то, достигнете ли Вы
            успеха в валютном трейдинге. Учитывая, что рынок Форекс в 2019 году в России только
            начинает законодательно регулироваться, этому вопросу стоит уделить особо пристальное
          </p>
          <h3 className="h3 medium">EUR USD прогноз онлайн</h3>
          <p className="text-regular">
            Выбор надежного брокера Форекс - это наиболее важный этап в работе любого трейдера.
            Важно чтобы компания заботилась об интересах своего клиента. Представленный выше рейтинг
            брокеров Форекс РФ подскажет Вам чьи услуги пользователи ценят больше. Именно качество
            услуг, предлагаемых выбранной компанией, в конечном счете влияет на то, достигнете ли Вы
            успеха в валютном трейдинге. Учитывая, что рынок Форекс в 2019 году в России только
            начинает законодательно регулироваться, этому вопросу стоит уделить особо пристальное
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default PrognosisView;
