import React from 'react';
import Icon from '~cmp/Icon/Icon';
import DateTime from '~cmp/DateTime/DateTime';

import styles from './Status.local';

const Status = (props) => {
  const { text, color, date } = props;

  return (
    <div className={styles.StatusWrapper}>
      <div className={styles.StatusIndicator}>
        <Icon fill={color} name="list-dot-icon" />
        <p className="text-regular">{text}</p>
      </div>
      <DateTime date={date} />
    </div>
  );
};

export default Status;
