import React from 'react';
import classNames from 'classnames/bind';
// components
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
// styles
import styles from './Card.local';

const classes = classNames.bind(styles);

const Card = (props) => {
  const { head, title, excerpt, variant } = props;

  const WrapperClass = classes({
    Card: true,
    [`is-${variant}`]: variant,
  });

  return (
    <div className={WrapperClass}>
      <div className={styles.CardHead}>{head}</div>
      <h3 className="h3 medium">{title}</h3>
      <p className="text-regular">{excerpt}</p>
      <Button type="router" cls={styles.CardLink} text="Подробнее" to="/">
        <Icon cls={styles.CardIcon} name="chevron-right-icon" />
      </Button>
    </div>
  );
};

export default Card;
