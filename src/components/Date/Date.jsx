import React from 'react';
import classNames from 'classnames/bind';
// styles
import styles from './Date.local';

const classes = classNames.bind(styles);

const Date = (props) => {
  const { date = '27 июня 18:02', time } = props;
  return (
    <time className={classes('text-small', styles.DateText)} dateTime={time}>
      {date}
    </time>
  );
};

export default Date;
