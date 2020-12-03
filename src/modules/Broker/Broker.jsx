import React from 'react';
import { observer } from 'mobx-react';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Breadcrumbs from '~cmp/Breadcrumbs/Breadcrumbs';

import BrokerTopBar from './BrokerTopBar/BrokerTopBar';
import TableSimple from '~cmp/Table/TableSimple/TableSimple';
import Tabs from '~cmp/Tabs/Tabs';
import List from '~cmp/List/List';
// styles
import styles from './Broker.local';

const links = [
  {
    href: '/',
    descr: 'Рейтинг брокеров',
  },
  {
    href: '/broker/:name?',
    descr: 'Альпари',
  },
];

const mainInfo = [
  {
    header: 'Год основания',
    description: '1998 год',
  },
  {
    header: 'Минимальный депозит',
    description: '0 $',
  },
  {
    header: 'Адрес сайта',
    description: 'www.alpari.com',
    isLink: true,
  },
  {
    header: 'Ценообразование',
    description: 'ECN ',
  },
  {
    header: 'Валюта депозита',
    description: 'USD, EUR, RUB ',
  },
  {
    header: 'Регулирование ',
    description: 'IFSC (Белиз) ',
  },
  {
    header: 'Мобильная Торговля',
    description: 'iOS, Android',
  },
  {
    header: 'Дов. управление',
    description: 'PAMM',
  },
  {
    header: 'Партнерские программы',
    description: 'Есть',
  },
  {
    header: 'Программа лояльности',
    description: 'Есть',
  },
  {
    header: 'Бонус на депозит',
    description: '100%',
  },
];

const tabs = [
  {
    alias: 'Standard.mt4',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Ecn.mt4',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Pro-ecn.mt4',
    content: [
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Nano.mt4',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
    ],
  },
  {
    alias: 'Standard.mt5',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Ecn.mt5',
    content: [
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
];

const specials = [
  {
    description: 'Торговые сигналы',
  },
  {
    description: 'Поддержка системы Autochartist',
  },
  {
    description: 'Наличие браузерной платформы',
  },
  {
    description: 'Возврат части спреда',
  },
];

const Broker = () => {
  return (
    <>
      <Breadcrumbs links={links} />
      <div className={styles.PageWrapper}>
        <Wrapper extClass={styles.PageContainer}>
          <h1 className={`h1 bold ${styles.PageHeader}`}>Форекс брокер Альпари (Alpari)</h1>
          <div className={styles.AreaMain}>
            <BrokerTopBar />
            <div className={styles.PageBlock}>
              <h2 className={`h2 medium ${styles.HeadingH2}`}>Торговые условия</h2>
              <Tabs>
                {tabs.map((tab) => (
                  <TableSimple key={tab.alias} alias={tab.alias} rows={tab.content} />
                ))}
              </Tabs>
            </div>
          </div>
          <div className={styles.AreaAside}>
            <div className={styles.PageBlock}>
              <TableSimple heading="Основная информация" rows={mainInfo} />
            </div>
            <div className={styles.PageBlock}>
              <List heading="Особые характеристики" rows={specials} />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default observer(Broker);
