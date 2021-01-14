import React from 'react';
import Card from '~cmp/Card/Card';
import Date from '~cmp/Date/Date';
import styles from './PrognosisCard.module';

const CardHeader = ({ category, date }) => (
  <div className={styles.Head}>
    <p className={`text-small ${styles.HeadCategory}`}>{category}</p>
    <Date date={date} />
  </div>
);

const PrognosisCard = ({ title, excerpt, img, alt, category, date }) => {
  return (
    <Card
      head={<CardHeader category={category} date={date} />}
      type="extended"
      title={title}
      excerpt={excerpt}
      img={img}
      alt={alt}
    />
  );
};

export default PrognosisCard;
