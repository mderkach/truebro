import React from 'react';
import classNames from 'classnames/bind';
// components
import ScrollContainer from 'react-indiana-drag-scroll';
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
// styles
import styles from './PrognosisQuotes.local';

const classes = classNames.bind(styles);

const PrognosisQuotes = () => {
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
        <Button type="button" variant="chip" cls="is-active" text="Forex" />
        <Button type="button" variant="chip" text="Товары" />
        <Button type="button" variant="chip" text="Индексы" />
        <Button type="button" variant="chip" text="Крипто" />
      </ScrollContainer>
      <div className={styles.Quotes}>
        <div className={styles.QuotesRow}>
          <p className={QuotesHeaders}>Тикер</p>
          <p className={QuotesHeaders}>Посл. Цена</p>
          <p className={QuotesHeaders}>Тренд 1Д </p>
        </div>
        <div className={styles.QuotesRow}>
          <p className="text-regular">EUR/USD</p>
          <p className={QuotesTrendUp}>1.1023</p>
          <p className={QuotesTrendUp}>
            <Icon cls={styles.Icon} name="arrow-solid-icon" />
            <span className="inherit">Покупать</span>
          </p>
        </div>
        <div className={styles.QuotesRow}>
          <p className="text-regular">USD/JPI</p>
          <p className={QuotesTrendDown}>70.4062</p>
          <p className={QuotesTrendDown}>
            <Icon cls={styles.Icon} name="arrow-solid-icon" />
            <span className="inherit">Продавать</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrognosisQuotes;
