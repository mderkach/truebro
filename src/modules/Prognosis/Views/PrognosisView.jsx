import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { toJS } from 'mobx';
// components
import ScrollContainer from 'react-indiana-drag-scroll';
import PrognosisCard from '../Components/PrognosisCard/PrognosisCard';
import PrognosisQuotes from '../Components/PrognosisQuotes/PrognosisQuotes';
import PrognosisBrokersTable from '../Components/PrognosisBrokersTable/PrognosisBrokersTable';
import Button from '/src/components/Button/Button';
import Picture from '/src/components/Picture/Picture';
import ScreenSubscribe from '/src/components/Screen/ScreenSubscribe/ScreenSubscribe';
import Wrapper from '/src/components/Wrapper/Wrapper';
// styles
import s from './PrognosisViews.local';
// store
import Store from '../Utils/Store';
import MainStore from '/src/utils/Store';

const tabs = ['Прогнозы форекс', 'Крипто прогнозы'];

const RenderButtons = memo(
  ({ arr, category, setter }) =>
    arr.length > 0 &&
    arr.map((item) => (
      <Button
        key={item}
        type="button"
        variant="chip"
        cls={category === item ? 'is-active' : null}
        text={item}
        onClick={() => setter(item)}
      />
    )),
);

const Cards = ({ array, category }) => {
  const cardsArray = Object.entries(array);
  const targetCardsProto = cardsArray.filter(([key, cards]) => key === category);
  const target = Object.values(targetCardsProto[0][1]);

  return target.map((card) => (
    <PrognosisCard
      key={card.id}
      category={category}
      date={card.date}
      title={card.title}
      img={card.image}
      alt={card.title}
      excerpt={card.text}
      like={card.like}
      dislike={card.dislike}
    />
  ));
};

const PrognosisView = () => {
  const [cardsCategory, setCardsCategory] = useState(Store.categories[0]);
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

  return (
    <div className={s.Wrapper}>
      <main className={s.AreaMain}>
        <div className={s.TabButtonWrapper}>
          <RenderTabsBtn />
        </div>
        <div className={classNames(s.Tab, activeTab === tabs[0] ? 'is-active' : null)}>
          <ScrollContainer className={s.CardsControls}>
            <RenderButtons arr={Store.categories} category={cardsCategory} setter={setCardsCategory} />
          </ScrollContainer>
          <div className={s.Cards}>
            <Cards array={Store.cards} category={cardsCategory} />
          </div>
        </div>
        <div className={classNames(s.Tab, activeTab === tabs[1] ? 'is-active' : null)}>
          content here
        </div>
      </main>
      <aside className={s.AreaAside}>
        <PrognosisQuotes />
        {MainStore.banner && <Picture src={MainStore.banner[0].src} media={MainStore.banner} />}
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
