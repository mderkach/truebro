import React from 'react';
// modules
import Comments from '~m/Comments/Comments';
// components
import BrokerTopBar from '../../Components/BrokerTopBar/BrokerTopBar';
import BrokerPaymentSystems from '../../Components/BrokerPaymentSystems/BrokerPaymentSystems';
import TableSimple from '~cmp/Table/TableSimple/TableSimple';
import Tabs from '~cmp/Tabs/Tabs';
import List from '~cmp/List/List';
import Card from '~cmp/Card/Card';
import Picture from '~cmp/Picture/Picture';
import Date from '~cmp/Date/Date';
import Status from '../../Components/Status/Status';
// styles
import styles from '../../Broker.local';
// utils
import { H2, classes } from '../../Utils/Classes';
import { mainInfo, tabs, specials, banner, payments } from '../../Utils/DevData';

const BrokerViewLaptop = () => {
  return (
    <>
      <BrokerTopBar className={(styles.AreaMain, styles.AreaFluid)} />
      <main className={styles.AreaMain}>
        <div className={styles.PageBlock}>
          <h2 className={classes(H2, styles.mt0)}>Торговые условия</h2>
          <Tabs>
            {tabs.map((tab) => (
              <TableSimple key={tab.alias} alias={tab.alias} rows={tab.content} />
            ))}
          </Tabs>
        </div>
        <div className={styles.PageBlock}>
          <h2 className={H2}>О компании</h2>
          <div className={styles.PageBlockText}>
            <p className="text-regular">
              Компания Alpari - российский Форекс брокер, предоставляющий качественные брокерские
              услуги с 1998 года. За время своего существования компания заслужила всеобщее
              признание и массу положительных отзывов от своих клиентов, которые вы сможете почитать
              в разделе отзывы об Альпари. Кроме всего прочего Альпари вполне обоснованно считается
              одним из главных инициаторов создания НАФД (ЦРФИН), ведущей отечественной ассоциации
              форекс дилеров.
            </p>
            <p className="text-regular">
              Компания предлагает 2 метода котирования: стандартный и ECN. Стандартный метод
              котирования подразумевает вывод на рынок только совокупной позиции по всем счетам, при
              этом клиринг осуществляется внутри компании. Для счетов ECN все ордера клиентов
              автоматически выводятся на внешний рынок. Плюсом счета ECN является отсутствие реквот,
              а минусом – наличие комиссии.
            </p>
            <p className="text-regular">
              Следует отметить, что Альпари имеет три международные лицензии авторитетных финансовых
              регуляторов. Данная брокерская компания признана лучшим брокером по версии агентства
              «Интерфакс». Более детально с основными событиями из жизни рассматриваемого брокера Вы
              можете ознакомиться на этой странице. Alpari постоянно находится в процессе развития и
              стремится предложить своим клиентам максимально выгодные условия для действительно
              успешной торговли с большой прибылью.
            </p>
          </div>
        </div>
        <div className={styles.PageBlock}>
          <h2 className={H2}>Новости Альпари</h2>
          <div className={styles.PageBlockGrid}>
            <Card
              head={<Date />}
              title="«Валентин Катасонов: что такое криптовалюты?»"
              excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
            />
            <Card
              head={<Date />}
              title="«Валентин Катасонов: что такое криптовалюты?»"
              excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
            />
          </div>
        </div>
        <div className={styles.PageBlock}>
          <h2 className={H2}>Семинары и вебинары Альпари </h2>
          <div className={styles.PageBlockGrid}>
            <Card
              head={<Date />}
              title={`Вебинар "Базовый курс"`}
              excerpt=" В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы)."
            />
            <Card
              head={<Date />}
              title={`Вебинар "Базовый курс"`}
              excerpt=" В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы)."
            />
          </div>
        </div>
        <div className={styles.PageBlock}>
          <h2 className={H2}>Бонусы, акции, конкурсы Альпари </h2>
          <div className={styles.PageBlockGrid}>
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
        <div className={styles.PageBlock}>
          <h2 className={H2}>Отзывы о компании Альпари</h2>
          <Comments />
        </div>
        <div>
          <h2 className={H2}>Претензии</h2>
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
          </div>
        </div>
      </main>
      <aside className={styles.AreaAside}>
        <div className={styles.PageBlock}>
          <TableSimple heading="Основная информация" rows={mainInfo} />
        </div>
        <div className={styles.PageBlock}>
          <List heading="Особые характеристики" rows={specials} />
        </div>
        <div className={styles.PageBlock}>
          <BrokerPaymentSystems items={payments} />
        </div>
        <div className={styles.PageBlock}>
          <Picture cls={styles.AreaAbsolute} src={banner[0].src} media={banner} />
        </div>
      </aside>
    </>
  );
};

export default BrokerViewLaptop;
