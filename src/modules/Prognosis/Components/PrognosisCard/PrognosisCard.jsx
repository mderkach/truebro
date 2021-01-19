import React from 'react';
// components
import Card from '~cmp/Card/Card';
import DateTime from '~cmp/DateTime/DateTime';
import Likes from '~cmp/Likes/Likes';
// styles
import styles from './PrognosisCard.local';

const CardHeader = ({ category, date }) => (
  <div className={styles.Head}>
    <p className={`text-small ${styles.Category}`}>
      <span className="inherit">прогноз </span>
      {category}
    </p>
    <DateTime date={date} />
  </div>
);

const CardLikes = ({ like, dislike }) => <Likes like={like} dislike={dislike} />;

const PrognosisCard = ({ title, excerpt, img, alt, category, date, like, dislike }) => {
  return (
    <Card
      head={<CardHeader category={category} date={date} />}
      type="extended"
      title={title}
      excerpt={excerpt}
      img={img}
      alt={alt}
    >
      <CardLikes like={like} dislike={dislike} />
    </Card>
  );
};

export default PrognosisCard;
