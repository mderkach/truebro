// core
import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
// components
import Picture from '~cmp/Picture/Picture';
import Icon from '~cmp/Icon/Icon';
import Button from '~cmp/Button/Button';
// styles
import styles from './BrokerTopBar.local';

const classes = classNames.bind(styles);

const CellHeader = classes({
  'text-small': true,
  CellHeader: true,
});

const CellDescr = classes({
  h2: true,
  CellDescr: true,
});

const Contacts = classes({
  'text-small': true,
  medium: true,
  Contacts: true,
});

const BrokerTopBar = (props) => {
  const { className, ...rest } = props;

  return (
    <div className={classes(styles.TopBar, className)} {...rest}>
      <Picture cls={styles.Logo} src="/assets/img/alpari.png" />
      <div className={styles.Cell}>
        <p className={CellHeader}>Рейтинг</p>
        <div className={styles.CellBody}>
          <p className={CellDescr}>4.13</p>
          <Icon cls={styles.CellIcon} name="star-icon" />
        </div>
      </div>
      <div className={styles.Cell}>
        <p className={CellHeader}>Отзывы</p>
        <div className={styles.CellBody}>
          <p className={CellDescr}>178</p>
          <Icon cls={styles.CellIcon} name="baloon-icon" />
        </div>
      </div>
      <div className={styles.Cell}>
        <p className={CellHeader}>Обработка претензий</p>
        <div className={styles.CellBody}>
          <p className={CellDescr}>65%</p>
          <Icon cls={styles.CellIcon} name="rating-middle-icon" />
        </div>
      </div>
      <button type="button" className={Contacts}>
        <Icon cls={styles.CellIcon} fill="#3F4756" name="phone-icon" />
        <span>Контакты</span>
      </button>
      <Button cls={styles.TopBarButton} type="button" variant="primary" text="Открыть счет" />
    </div>
  );
};

export default observer(BrokerTopBar);
