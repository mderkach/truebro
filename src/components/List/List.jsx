import React from 'react';

import Icon from '~cmp/Icon/Icon';

import styles from './List.local';

const ListRow = (props) => {
  const { description } = props;
  return (
    <>
      <div className={styles.ListRow}>
        <Icon fill="#fdd835" name="list-dot-icon" />
        <span className="text-regular">{description}</span>
      </div>
    </>
  );
};

const List = (props) => {
  const { heading, rows, ...rest } = props;

  return (
    <>
      <div className={styles.ListBody} {...rest}>
        {heading && <h3 className="h3 medium">{heading}</h3>}
        {rows && rows.map((row) => <ListRow key={row.description} description={row.description} />)}
      </div>
    </>
  );
};

export default List;
