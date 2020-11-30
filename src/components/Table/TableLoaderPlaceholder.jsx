import React from 'react';
import Icon from '~cmp/Icon/Icon';
import Button from '~cmp/Button/Button';
import styles from './TableLoaderPlaceholder.local';

const TableLoaderPlaceholder = (props) => {
  const { text, icon, action, actionText, ...rest } = props;
  return (
    <div className={styles.Placeholder} {...rest}>
      {!action && icon && <Icon cls={styles.PlaceholderIcon} name={icon} />}
      <span>{text}</span>
      {action && (
        <Button
          onClick={(e) => action(e)}
          variant="secondary"
          type="button"
          cls="text-small medium table__button"
        >
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default TableLoaderPlaceholder;
