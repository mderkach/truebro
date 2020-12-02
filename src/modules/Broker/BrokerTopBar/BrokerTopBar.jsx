// core
import React from 'react';
import { observer } from 'mobx-react';
// components
import Picture from '~cmp/Picture/Picture';
import Icon from '~cmp/Icon/Icon';
import Button from '~cmp/Button/Button';
// styles
import styles from './BrokerTopBar.local';

const BrokerTopBar = () => {
  return (
    <div className={styles.TopBar}>
      <Picture cls={styles.Logo} src="/assets/img/alpari.png" />
      <div className={styles.Cell}>
        <p className={`text-small ${styles.CellHeader}`}>Рейтинг</p>
        <div className={styles.CellBody}>
          <p className={`h2 ${styles.CellDescr}`}>4.13</p>
          <Icon cls={styles.CellIcon} name="star-icon" />
        </div>
      </div>
      <div className={styles.Cell}>
        <p className={`text-small ${styles.CellHeader}`}>Отзывы</p>
        <div className={styles.CellBody}>
          <p className={`h2 ${styles.CellDescr}`}>178</p>
          <Icon cls={styles.CellIcon} name="baloon-icon" />
        </div>
      </div>
      <div className={styles.Cell}>
        <p className={`text-small ${styles.CellHeader}`}>Обработка претензий</p>
        <div className={styles.CellBody}>
          <p className={`h2 ${styles.CellDescr}`}>65%</p>
          <Icon cls={styles.CellIcon} name="rating-middle-icon" />
        </div>
      </div>
      <button type="button" className={`medium text-small ${styles.Contacts}`}>
        <Icon cls={styles.CellIcon} style={{ fill: '#3F4756' }} name="phone-icon" />
        Контакты
      </button>
      <Button cls={styles.TopBarButton} type="button" variant="primary" text="Открыть счет" />
    </div>
  );
};

export default observer(BrokerTopBar);
