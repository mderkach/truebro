import React from 'react';
import { observer } from 'mobx-react';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Breadcrumbs from '~cmp/Breadcrumbs/Breadcrumbs';
import BrokerTopBar from './BrokerTopBar/BrokerTopBar';
import TableSimple from '~cmp/Table/TableSimple/TableSimple';
import Tabs from '~cmp/Tabs/Tabs';
import List from '~cmp/List/List';
import Card from '~cmp/Card/Card';
import Icon from '~cmp/Icon/Icon';
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
    description: 'http://www.alpari.com',
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

const Date = (props) => {
  const { date = '27 июня 18:02', time } = props;
  return (
    <time className="text-regular" dateTime={time}>
      {date}
    </time>
  );
};

const Status = (props) => {
  const { text, color, date } = props;

  return (
    <div className={styles.StatusWrapper}>
      <div className={styles.StatusIndicator}>
        <Icon fill={color} name="list-dot-icon" />
        <p className="text-regular">{text}</p>
      </div>
      <Date date={date} />
    </div>
  );
};

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
        <Wrapper extClass={styles.PageContainer}>
          <div className={styles.AreaMain}>
            <h2 className={`h2 medium ${styles.HeadingH2}`}>О компании</h2>
            <div className={`${styles.PageBlockText} ${styles.PageBlock}`}>
              <p className="text-regular">
                Компания Alpari - российский Форекс брокер, предоставляющий качественные брокерские
                услуги с 1998 года. За время своего существования компания заслужила всеобщее
                признание и массу положительных отзывов от своих клиентов, которые вы сможете
                почитать в разделе отзывы об Альпари. Кроме всего прочего Альпари вполне обоснованно
                считается одним из главных инициаторов создания НАФД (ЦРФИН), ведущей отечественной
                ассоциации форекс дилеров.
              </p>
              <p className="text-regular">
                Компания предлагает 2 метода котирования: стандартный и ECN. Стандартный метод
                котирования подразумевает вывод на рынок только совокупной позиции по всем счетам,
                при этом клиринг осуществляется внутри компании. Для счетов ECN все ордера клиентов
                автоматически выводятся на внешний рынок. Плюсом счета ECN является отсутствие
                реквот, а минусом – наличие комиссии.
              </p>
              <p className="text-regular">
                Следует отметить, что Альпари имеет три международные лицензии авторитетных
                финансовых регуляторов. Данная брокерская компания признана лучшим брокером по
                версии агентства «Интерфакс». Более детально с основными событиями из жизни
                рассматриваемого брокера Вы можете ознакомиться на этой странице. Alpari постоянно
                находится в процессе развития и стремится предложить своим клиентам максимально
                выгодные условия для действительно успешной торговли с большой прибылью.
              </p>
            </div>
          </div>
        </Wrapper>
        <Wrapper extClass={styles.PageContainer}>
          <div className={styles.AreaMain}>
            <h2 className={`h2 medium ${styles.HeadingH2}`}>Новости Альпари</h2>
            <div className={`${styles.PageBlockGrid} ${styles.PageBlock}`}>
              <Card
                head={<Date />}
                title="«Валентин Катасонов: что такое криптовалюты?»"
                excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на
        зимнее время будет осуществлен в США. В связи с этим"
              />
              <Card
                head={<Date />}
                title="«Валентин Катасонов: что такое криптовалюты?»"
                excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на
        зимнее время будет осуществлен в США. В связи с этим"
              />
              <Card
                head={<Date />}
                title="«Валентин Катасонов: что такое криптовалюты?»"
                excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на
        зимнее время будет осуществлен в США. В связи с этим"
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper extClass={styles.PageContainer}>
          <div className={styles.AreaMain}>
            <h2 className={`h2 medium ${styles.HeadingH2}`}>Семинары и вебинары Альпари </h2>
            <div className={`${styles.PageBlockGrid} ${styles.PageBlock}`}>
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
              <Card
                head={<Date />}
                title={`Вебинар "Базовый курс"`}
                excerpt=" В базовом курсе излагается история и причины появления биржевых инструментов (валюты, ценные бумаги, товары, фьючерсы)."
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper extClass={styles.PageContainer}>
          <div className={styles.AreaMain}>
            <h2 className={`h2 medium ${styles.HeadingH2}`}>Бонусы, акции, конкурсы Альпари </h2>
            <div className={`${styles.PageBlockGrid} ${styles.PageBlock}`}>
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
        </Wrapper>
        <Wrapper extClass={styles.PageContainer}>
          <div className={styles.AreaMain}>
            <h2 className={`h2 medium ${styles.HeadingH2}`}>Петензии</h2>
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
              <Card
                head={<Status color="#FF724B" text="Отклонена" />}
                title="Конкурс «Formula FX»"
                excerpt="27 октября 2019 года страны Европы перейдут на зимнее время, а 3 ноября 2019 года переход на зимнее время будет осуществлен в США. В связи с этим"
                variant="outlined"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default observer(Broker);
