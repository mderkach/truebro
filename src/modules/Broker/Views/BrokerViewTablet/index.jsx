import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
// modules
import Comments from '/src/modules/Comments/Comments';
// components
import BrokerTopBar from '../../Components/BrokerTopBar/BrokerTopBar';
import BrokerPaymentSystems from '../../Components/BrokerPaymentSystems/BrokerPaymentSystems';
import TableSimple from '/src/components/Table/TableSimple/TableSimple';
import Tabs from '/src/components/Tabs/Tabs';
import List from '/src/components/List/List';
import Card from '/src/components/Card/Card';
import Picture from '/src/components/Picture/Picture';
import DateTime from '/src/components/DateTime/DateTime';
import Status from '../../Components/Status/Status';
import Button from '/src/components/Button/Button';
// styles
import styles from '../../Broker.local';
// utils
import { H2, GridBlock, classes } from '../../Utils/Classes';
// store
import Store from '/src/utils/Store';
import BrokerStore from '/src/modules/Broker/Utils/BrokerStore';

const BrokerViewTablet = observer(() => {
  return (
    <>
      <BrokerTopBar className={(styles.AreaMain, styles.AreaFluid)} />
      <section className={GridBlock}>
        <h2 className={classes(H2, styles.mt0, styles.AreaFluid)}>Основная информация</h2>
        <TableSimple rows={BrokerStore.mainInfo} />
        {BrokerStore.specials && (
          <List heading="Особые характеристики" rows={BrokerStore.specials} />
        )}
      </section>
      <div className={styles.PageBlock}>
        {BrokerStore.pay && <BrokerPaymentSystems items={BrokerStore.pay} />}
      </div>
      <div className={styles.PageBlock}>
        <h2 className={classes(H2, styles.mt0)}>Торговые условия</h2>
        {BrokerStore.tabsInfo && (
          <Tabs>
            {BrokerStore.tabsInfo.map((tab) => (
              <TableSimple key={tab.alias} alias={tab.alias} rows={tab.content} />
            ))}
          </Tabs>
        )}
      </div>
      <div>
        {BrokerStore.text &&
          BrokerStore.text.map((item) => (
            <Fragment key={item.header}>
              <h2 className={H2}>{item.header}</h2>
              <div className={classes(styles.PageBlockText, styles.PageBlock)}>
                <p className="text-regular">{item.description}</p>
              </div>
            </Fragment>
          ))}
      </div>
      <div>
        {Store.banner && (
          <Picture
            cls={styles.AreaAbsolute}
            src={Store.banner[0].src}
            media={Store.banner}
          />
        )}
      </div>
      <div className={styles.PageBlock}>
        <h2 className={H2}>Новости {BrokerStore.Broker}</h2>
        <div className={styles.PageBlockGrid}>
          {BrokerStore.news &&
            BrokerStore.news.map((item, index) => {
              if (index <= 1)
                return (
                  <Card
                    head={<DateTime date={item.date} />}
                    title={item.title}
                    excerpt={item.text}
                    link={item.url}
                  />
                );
            })}
        </div>
      </div>
      <div className={styles.PageBlock}>
        <h2 className={H2}>Семинары и вебинары {BrokerStore.Broker}</h2>
        <div className={styles.PageBlockGrid}>
          {BrokerStore.webinar &&
            BrokerStore.webinar.map((item, index) => {
              if (index <= 1)
                return (
                  <Card
                    head={<DateTime date={item.date} />}
                    title={item.title}
                    excerpt={item.text}
                    link={item.url}
                  />
                );
            })}
        </div>
      </div>
      <div className={styles.PageBlock}>
        <h2 className={H2}>Бонусы, акции, конкурсы {BrokerStore.Broker}</h2>
        <div className={styles.PageBlockGrid}>
          {BrokerStore.bonus &&
            BrokerStore.bonus.map((item, index) => {
              if (index <= 1)
                return (
                  <Card head={item.type} title={item.title} excerpt={item.text} link={item.url} />
                );
            })}
        </div>
      </div>
      <div className={styles.PageBlock}>
        <h2 className={H2}>Отзывы о компании {BrokerStore.Broker}</h2>
        <Comments data={BrokerStore.reviews} />
      </div>
      <div>
        <h2 className={H2}>Претензии</h2>
        <div className={styles.Flex}>
          <div className={styles.InfoBar}>
            <div className={styles.InfoBarCell}>
              <p className="text-small">Решенных</p>
              <p className="text-big">6 из 8</p>
            </div>
            <div className={styles.InfoBarCell}>
              <p className="text-small">Процент решенных</p>
              <p className="text-big">75%</p>
            </div>
            <div className={styles.InfoBarCell}>
              <p className="text-small">Среднее время рассмотрения</p>
              <p className="text-big">2 дн.</p>
            </div>
          </div>
          <Button
            type="button"
            variant="tertiary"
            text="Оформить претензию"
            onClick={() => Store.showModal()}
          />
        </div>
        <div className={styles.PageBlockGrid}>
          {BrokerStore.claim &&
            BrokerStore.claim.map((item, index) => {
              if (index <= 1)
                return (
                  <Card
                    head={<Status color={item.color} text={item.status} />}
                    title={item.title}
                    excerpt={item.text}
                    link={item.url}
                    variant="outlined"
                  />
                );
            })}
        </div>
      </div>
    </>
  );
});

export default BrokerViewTablet;
