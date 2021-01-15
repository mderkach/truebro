import React from 'react';
import classNames from 'classnames/bind';
// components
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
import Picture from '~cmp/Picture/Picture';
// styles
import styles from './Card.local';

const classes = classNames.bind(styles);

const Card = (props) => {
  const { head, title, excerpt, variant, type = 'simple', img, alt, children } = props;

  const WrapperClass = classes({
    Card: true,
    [`is-${variant}`]: variant,
  });

  return (
    <article className={WrapperClass}>
      {head && <header className={styles.CardHead}>{head}</header>}
      {img && <Picture src={img} cls={styles.Picture} alt={alt} />}
      <h3 className="h3 medium">{title}</h3>
      <p className="text-regular">{excerpt}</p>
      {type === 'simple' && (
        <Button type="router" cls={styles.CardLink} text="Подробнее" to="/">
          <Icon cls={styles.CardIcon} name="chevron-right-icon" />
        </Button>
      )}
      {children && children}
    </article>
  );
};

export default Card;
