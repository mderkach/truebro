import React from 'react';
import { observer } from 'mobx-react';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Breadcrumbs from '~cmp/Breadcrumbs/Breadcrumbs';

import BrokerTopBar from './BrokerTopBar/BrokerTopBar';
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

const Broker = () => {
  return (
    <>
      <Breadcrumbs links={links} />
      <div className={styles.PageWrapper}>
        <Wrapper extClass={styles.PageContainer}>
          <h1 className={`h1 bold ${styles.PageHeader}`}>Форекс брокер Альпари (Alpari)</h1>
          <div className={styles.PageBlock}>
            <BrokerTopBar />
          </div>
          <div className={styles.PageBlock}>aside</div>
        </Wrapper>
      </div>
    </>
  );
};

export default observer(Broker);
