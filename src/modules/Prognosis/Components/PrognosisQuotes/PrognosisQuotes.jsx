import React, { memo, useState } from 'react';
import classNames from 'classnames/bind';
// components
import ScrollContainer from 'react-indiana-drag-scroll';
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
// styles
import styles from './PrognosisQuotes.local';
// store
import Store from '/src/modules/Prognosis/Utils/Store';

const classes = classNames.bind(styles);

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

const RenderRow = memo(({ items, category, upClass, downClass }) => {
  const targets = items.filter((item) => item.broker === category);

  if (targets.length > 0)
    return targets.map((item) => (
      <div key={item.ticker} className={styles.QuotesRow}>
        <p className="text-regular">{item.ticker}</p>
        {item.trend === 1 ? (
          <>
            <p className={upClass}>{item.price}</p>
            <p className={upClass}>
              <Icon cls={styles.Icon} name="arrow-solid-icon" />
              <span className="inherit">Покупать</span>
            </p>
          </>
        ) : (
          <>
            <p className={downClass}>{item.price}</p>
            <p className={downClass}>
              <Icon cls={styles.Icon} name="arrow-solid-icon" />
              <span className="inherit">Продавать</span>
            </p>
          </>
        )}
      </div>
    ));

  return (
    <div className={styles.QuotesRow}>
      <p className="text-regular" style={{ gridColumn: '1/-1' }}>
        Нет данных
      </p>
    </div>
  );
});

const PrognosisQuotes = () => {
  const [quotesCategory, setQuotesCategory] = useState(Store.quotesCategories[0]);

  const QuotesHeaders = classes({
    'text-small': true,
    QuotesHeader: true,
  });

  const QuotesTrendUp = classes({
    'text-regular': true,
    QuotesCell: true,
    TrendUp: true,
  });

  const QuotesTrendDown = classes({
    'text-regular': true,
    QuotesCell: true,
    TrendDown: true,
  });

  return (
    <section className={styles.QuotesWrapper}>
      <h3 className="h3 medium">Котировки</h3>
      <ScrollContainer className={styles.Controls}>
        <RenderButtons
          arr={Store.quotesCategories}
          category={quotesCategory}
          setter={setQuotesCategory}
        />
      </ScrollContainer>
      <div className={styles.Quotes}>
        <div className={styles.QuotesRow}>
          <p className={QuotesHeaders}>Тикер</p>
          <p className={QuotesHeaders}>Посл. Цена</p>
          <p className={QuotesHeaders}>Тренд 1Д </p>
        </div>
        <RenderRow
          items={Store.quotes}
          category={quotesCategory}
          upClass={QuotesTrendUp}
          downClass={QuotesTrendDown}
        />
      </div>
    </section>
  );
};

export default PrognosisQuotes;
