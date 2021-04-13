import React from 'react';
// components
import Icon from '/src/components/Icon/Icon';
import Button from '/src/components/Button/Button';
// styles
import styles from './Loader.local';

const Loader = (props) => {
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

export default Loader;
