import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
// modules
import Comments from '~m/Comments/Comments';
// components
import BrokerTopBar from '../../Components/BrokerTopBar/BrokerTopBar';
import BrokerPaymentSystems from '../../Components/BrokerPaymentSystems/BrokerPaymentSystems';
import CommentsControls from '../../Components/CommentsControls/CommentsControls';
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
import { specials } from '../../Utils/DevData';
// store
import Store from '/src/utils/Store';
import BrokerStore from '/src/modules/Broker/Utils/BrokerStore';

const BrokerViewDesktop = () => {
  return (
    <>
      <BrokerTopBar className={(styles.AreaMain, styles.AreaFluid)} />
      <div className={classes(styles.PageBlock, styles.AreaAside, styles.AreaDoubleRow)}>
        <TableSimple heading="Основная информация" rows={BrokerStore.mainInfo} />
      </div>
      <div className={classes(styles.PageBlock, styles.AreaMain, styles.AreaDoubleRow)}>
        <h2 className={classes(H2, styles.mt0)}>Торговые условия</h2>
        {BrokerStore.tabsInfo && (
          <Tabs>
            {BrokerStore.tabsInfo.map((tab) => (
              <TableSimple key={tab.alias} alias={tab.alias} rows={tab.content} />
            ))}
          </Tabs>
        )}
      </div>
      <div className={classes(styles.PageBlock, styles.AreaAside)}>
        {BrokerStore.specials && (
          <List heading="Особые характеристики" rows={BrokerStore.specials} />
        )}
      </div>
      <div className={classes(styles.AreaMain, styles.AreaDoubleRow)}>
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
      <div className={styles.AreaAside}>
        {BrokerStore.pay && <BrokerPaymentSystems items={BrokerStore.pay} />}
      </div>
      <div className={classes(styles.AreaAside, styles.AreaBanner)}>
        {BrokerStore.banner && (
          <Picture
            cls={styles.AreaAbsolute}
            src={BrokerStore.banner[0].src}
            media={BrokerStore.banner}
          />
        )}
      </div>
      <div className={styles.AreaMain}>
        <h2 className={H2}>Новости {BrokerStore.Broker}</h2>
        <div className={GridBlock}>
          <Card
            head={<DateTime date="27 июня 18:02" />}
            title="«Валентин Катасонов: что такое криптовалюты?»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
          />
          <Card
            head={<DateTime date="27 июня 18:02" />}
            title="«Валентин Катасонов: что такое криптовалюты?»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
          />
          <Card
            head={<DateTime date="27 июня 18:02" />}
            title="«Валентин Катасонов: что такое криптовалюты?»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
          />
        </div>
      </div>
      <div className={styles.AreaMain}>
        <h2 className={H2}>Семинары и вебинары {BrokerStore.Broker}</h2>
        <div className={GridBlock}>
          <Card
            head={<DateTime date="27 июня 18:02" />}
            title={`Вебинар "Базовый курс"`}
            excerpt=" В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы)."
          />
          <Card
            head={<DateTime date="27 июня 18:02" />}
            title={`Вебинар "Базовый курс"`}
            excerpt=" В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы)."
          />
          <Card
            head={<DateTime date="27 июня 18:02" />}
            title={`Вебинар "Базовый курс"`}
            excerpt=" В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы)."
          />
        </div>
      </div>
      <div className={styles.AreaMain}>
        <h2 className={H2}>Бонусы, акции, конкурсы {BrokerStore.Broker}</h2>
        <div className={GridBlock}>
          <Card
            head="Конкурсы"
            title="Конкурс «Formula FX»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
          />
          <Card
            head="Конкурсы"
            title="Конкурс «Formula FX»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
          />
          <Card
            head="Конкурсы"
            title="Конкурс «Formula FX»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
          />
        </div>
      </div>
      <div className={styles.AreaMain}>
        <h2 className={H2}>Отзывы о компании {BrokerStore.Broker}</h2>
        <div className={styles.PageBlock}>
          <CommentsControls action={Store.showModal} />
          <Comments />
        </div>
      </div>
      <div className={styles.AreaMain}>
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
          <Card
            head={<Status color="#2ACC50" text="Решена" />}
            title="Конкурс «Formula FX»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
            variant="outlined"
          />
          <Card
            head={<Status color="#EED346" text="На рассмотрении" />}
            title="Конкурс «Formula FX»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
            variant="outlined"
          />
          <Card
            head={<Status color="#FF724B" text="Отклонена" />}
            title="Конкурс «Formula FX»"
            excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
            variant="outlined"
          />
        </div>
      </div>
    </>
  );
};

export default observer(BrokerViewDesktop);
