import React from 'react';
// components
import Icon from '~cmp/Icon/Icon';
import Button from '~cmp/Button/Button';
// styles
import styles from './TableLoaderPlaceholder.local';

const TableLoaderPlaceholder = (props) => {
  const { text, icon, action, actionText, ...rest } = props;
  return (
    <div className={styles.Placeholder} {...rest}>
      {!action && icon && <Icon cls={styles.PlaceholderIcon} name={icon} />}
      <span>{text}</span>
      {action && (
        <Button onClick={(e) => action(e)} variant="secondary" type="button" cls="table__button">
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default TableLoaderPlaceholder;
