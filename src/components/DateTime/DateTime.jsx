import React from 'react';
import classNames from 'classnames/bind';
// styles
import styles from './DateTime.local';

const classes = classNames.bind(styles);

const DateTime = ({ date, time }) => {
  const dt = new Date(date);
  return (
    <time className={classes('text-small', styles.DateText)} dateTime={dt}>
      {date}
    </time>
  );
};

export default DateTime;
