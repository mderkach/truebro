import React from 'react';
import { observer } from 'mobx-react';
import { useMediaQuery } from 'react-responsive';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Breadcrumbs from '~cmp/Breadcrumbs/Breadcrumbs';
// views
import { BrokerViewDesktop, BrokerViewLaptop, BrokerViewTablet } from './Views';
// styles
import styles from './Broker.local';
// utils
import { H1 } from './Utils/Classes';

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
  const isDesktop = useMediaQuery({
    query: '(min-width: 1680px)',
  });

  const isLaptop = useMediaQuery({
    query: '(min-width: 1366px) and (max-width: 1679px)',
  });

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1365px)',
  });

  return (
    <>
      <Breadcrumbs links={links} />
      <div className={styles.PageWrapper}>
        <Wrapper extClass={styles.PageContainer}>
          <h1 className={H1}>Форекс брокер Альпари (Alpari)</h1>
          {isDesktop && <BrokerViewDesktop />}
          {isLaptop && <BrokerViewLaptop />}
          {isTabletOrMobile && <BrokerViewTablet />}
        </Wrapper>
      </div>
    </>
  );
};

export default observer(Broker);
