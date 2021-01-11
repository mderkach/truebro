import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// components
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

  const LinkClass = classes({
    'text-regular': true,
    medium: true,
    CardLink: true,
  });

  return (
    <div className={WrapperClass}>
      <div className={styles.CardHead}>{head}</div>
      <h3 className="h3 medium">{title}</h3>
      <p className="text-regular">{excerpt}</p>
      <Link className={LinkClass} to="/">
        <span>Подробнее</span>
        <Icon cls={styles.CardIcon} name="chevron-right-icon" />
      </Link>
    </div>
  );
};

export default Card;
