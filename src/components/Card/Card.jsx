import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '~cmp/Icon/Icon';

import styles from './Card.local';

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardHead}>
        <time className="text-regular" dateTime="">
          27 июня 18:02
        </time>
      </div>
      <h3 className="h3 medium">«Валентин Катасонов: что такое криптовалюты?»</h3>
      <p className="text-regular">
        27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на
        зимнее время будет осуществлен в США. В связи с этим
      </p>
      <Link className={`${styles.CardLink} text-regular medium`} to="/">
        <span>Подробнее</span>
        <Icon cls={styles.CardIcon} name="chevron-right-icon" />
      </Link>
    </div>
  );
};

export default Card;
