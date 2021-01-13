import React from 'react';
import classNames from 'classnames/bind';
import Icon from '~cmp/Icon/Icon';
// styles
import styles from './Rating.local';

const classes = classNames.bind(styles);

const RatingItem = ({ filled, extensionClass }) => {
  if (filled)
    return (
      <Icon name="star-icon" cls={classes('icon', 'is-filled', styles.Star, extensionClass)} />
    );
  return <Icon name="star-icon" cls={classes('icon', styles.Star, extensionClass)} />;
};

const Emoji = {
  1: <span className={styles.Emoji}>&#128545;</span>,

  2: <span className={styles.Emoji}>&#128544;</span>,

  3: <span className={styles.Emoji}>&#128528;</span>,

  4: <span className={styles.Emoji}>&#128512;</span>,

  5: <span className={styles.Emoji}>&#128513;</span>,
};

const Rating = ({ rating, hiddenClass }) => {
  return (
    <div className={styles.Wrapper}>
      {[...Array(5)].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <RatingItem key={i} filled={i < rating} extensionClass={hiddenClass} />
      ))}
      {Emoji[rating]}
    </div>
  );
};

export default Rating;
