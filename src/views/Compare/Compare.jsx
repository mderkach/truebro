import React from 'react';
import { observer } from 'mobx-react';
// components
import ScreenBanner from '~cmp/Screen/ScreenBanner/ScreenBanner';
import ScreenBroker from '~cmp/Screen/ScreenBroker/ScreenBroker';
import Breadcrumbs from '~cmp/Breadcrumbs/Breadcrumbs';
import Wrapper from '~cmp/Wrapper/Wrapper';
import TableComparsion from '~cmp/Table/TableComparsion/TableComparsion';

const links = [
  {
    href: '/',
    descr: 'Рейтинг брокеров',
  },
  {
    href: '/compare.html',
    descr: 'Сравнение форекс брокеров',
  },
];

const Compare = observer(() => (
  <>
    <Breadcrumbs links={links} />
    <ScreenBanner
      title="Сравнение форекс брокеров"
      descr="Выбрать подходящую брокерскую компанию среди достаточно большого количества различных предложений весьма сложно. Справиться с данной задачей поможет профессионально выполненное и внимательное сравнение брокеров Форекс на этой странице"
    />
    <Wrapper>
      <TableComparsion />
    </Wrapper>
    <ScreenBroker
      title="Как сравнить и выбрать лучшую компанию"
      descr="Выбор надежного брокера Форекс - это наиболее важный этап в работе любого трейдера. Важно чтобы компания заботилась об интересах своего клиента. Представленный выше рейтинг брокеров Форекс РФ подскажет Вам чьи услуги пользователи ценят больше. Именно качество услуг, предлагаемых выбранной компанией, в конечном счете влияет на то, достигнете ли Вы успеха в валютном трейдинге. Учитывая, что рынок Форекс в 2019 году в России только начинает законодательно регулироваться, этому вопросу стоит уделить особо пристальное внимание. Будьте внимательны в выборе брокера, Вы вкладываете собственные деньги и они должны работать на Вас!"
      svg="brand-compare"
    />
  </>
));

export default Compare;
