import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useMediaQuery } from 'react-responsive';
// components
import Wrapper from '/src/components/Wrapper/Wrapper';
import Breadcrumbs from '/src/components/Breadcrumbs/Breadcrumbs';
import Loader from '/src/components/Loader/Loader';
// views
import { BrokerViewDesktop, BrokerViewLaptop, BrokerViewTablet } from '~m/Broker/Views';
// styles
import styles from '~m/Broker/Broker.local';
// utils
import { H1 } from '~m/Broker/Utils/Classes';
import Store from '~m/Broker/Utils/BrokerStore';

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

const Broker = observer(({ name }) => {
  const { fetchBroker, fetchBrokerAdditional, setCurrentBroker } = Store;

  const isDesktop = useMediaQuery({
    query: '(min-width: 1680px)',
  });

  const isLaptop = useMediaQuery({
    query: '(min-width: 1366px) and (max-width: 1679px)',
  });

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1365px)',
  });

  const retryHandler = () => {
    fetchBroker();
    fetchBrokerAdditional();
  };

  useEffect(() => {
    if (!Store.brokerLoaded) {
      setCurrentBroker(name);
      fetchBroker();
      fetchBrokerAdditional();
    }
    if (Store.Broker && !Store.brokerLoaded) {
      fetchBroker();
      fetchBrokerAdditional();
    }
    if (Store.Broker !== name) {
      setCurrentBroker(name);
      fetchBroker();
      fetchBrokerAdditional();
    }
  }, [name]);

  return (
    <>
      <Breadcrumbs links={links} />
      {!Store.Broker && !Store.isError && <Loader text="Загрузка..." icon="loading-icon" />}
      {!Store.Broker && Store.isError && (
        <Loader
          text="Произошла ошибка! Попробуйте снова"
          action={retryHandler}
          actionText="Повторить"
          icon="loading-icon"
        />
      )}
      <div className={styles.PageWrapper}>
        {Store.Broker && (
          <Wrapper extClass={styles.PageContainer}>
            <h1 className={H1}>{`Форекс брокер ${Store.Broker}`}</h1>
            {isDesktop && <BrokerViewDesktop />}
            {isLaptop && <BrokerViewLaptop />}
            {isTabletOrMobile && <BrokerViewTablet />}
          </Wrapper>
        )}
      </div>
    </>
  );
});

export default Broker;
