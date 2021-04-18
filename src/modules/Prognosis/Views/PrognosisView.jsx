import React, { memo, useState } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
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

const TextBlock = ({ text, header, type }) => {
  return (
    <>
      {type === 0 ? <h2 className="h2 bold">{header}</h2> : <h3 className="h3 medium">{header}</h3>}
      <p className="text-regular">{text}</p>
    </>
  );
};

const RenderTabsBtn = ({tabs, active, setter}) =>
  tabs.map((item) => (
    <Button
      type="button"
      variant="tertiary"
      cls={classNames(s.TabButton, active === item ? 'is-active' : null)}
      text={item}
      key={item}
      onClick={() => setter(item)}
    />
  ));

const PrognosisView = observer(() => {
  const [cardsCategory, setCardsCategory] = useState(Store.categories[0]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={s.Wrapper}>
      <main className={s.AreaMain}>
        <div className={s.TabButtonWrapper}>
          <RenderTabsBtn tabs={tabs} active={activeTab} setter={setActiveTab} />
        </div>
        <div className={classNames(s.Tab, activeTab === tabs[0] ? 'is-active' : null)}>
          <ScrollContainer className={s.CardsControls}>
            <RenderButtons
              arr={Store.categories}
              category={cardsCategory}
              setter={setCardsCategory}
            />
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
          {Store.text &&
            Store.text.map((item) => (
              <TextBlock key={item.header} text={item.text} header={item.header} type={item.type} />
            ))}
        </div>
      </Wrapper>
    </div>
  );
});

export default PrognosisView;
