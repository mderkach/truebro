import React from 'react';
import classNames from 'classnames/bind';
// components
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
import Picture from '/src/components/Picture/Picture';
// styles
import styles from './Card.local';

const classes = classNames.bind(styles);

const Card = (props) => {
  const { head, title, excerpt, variant, type = 'simple', img, alt, link, children } = props;

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
        <Button type="router" cls={styles.CardLink} text="Подробнее" to={link}>
          <Icon cls={styles.CardIcon} name="chevron-right-icon" />
        </Button>
      )}
      {children && children}
    </article>
  );
};

export default Card;
