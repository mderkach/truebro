import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '~cmp/Icon/Icon';

import styles from './Card.local';

const Card = (props) => {
  const { head, title, excerpt, variant } = props;

  return (
    <div className={`${styles.Card} ${variant ? `is-${variant}` : null}`}>
      <div className={styles.CardHead}>{head}</div>
      <h3 className="h3 medium">{title}</h3>
      <p className="text-regular">{excerpt}</p>
      <Link className={`${styles.CardLink} text-regular medium`} to="/">
        <span>Подробнее</span>
        <Icon cls={styles.CardIcon} name="chevron-right-icon" />
      </Link>
    </div>
  );
};

export default Card;
