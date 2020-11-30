import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
// components
import FilterItem from '~cmp/Filter/FilterItem';
import FilterComparsion from '~cmp/Filter/FilterComparsion/FilterComparsion';
import TableComparsionRow from './TableComparsionRow';
import TableLoaderPlaceholder from '~cmp/Table/TableLoaderPlaceHolder';
// utils
import Store from '~u/Store';
// eslint-disable-next-line no-unused-vars
import API from '~u/API';
import './tableComparsion.scss';

const rows = [
  {
    name: 'Бренд',
    label: 'brand',
  },
  {
    name: 'Возраст на рынке г.',
    label: 'age',
  },
  {
    name: 'Для новичков',
    label: 'forNovice',
  },
  {
    name: 'Обработка жалоб %',
    label: 'claim',
  },
  {
    name: 'Позитивных отзывов %',
    label: 'positive',
  },
  {
    name: 'Удобство платежей 0-10',
    label: 'comfort',
  },
  {
    name: 'Мин депозит',
    label: 'deposit',
  },
  {
    name: 'Бонус на депозит',
    label: 'bonus',
  },
  {
    name: 'Узнаваемость Бренда 0-10',
    label: 'recognizability',
  },
  {
    name: 'Программа лояльности',
    label: 'loyality',
  },
  {
    name: 'Партнерская программа',
    label: 'partnership',
  },
  {
    name: 'Макс. кредитное плечо',
    label: 'shoulder',
  },
  {
    name: 'Тип спреда',
    label: 'spread',
  },
  {
    name: 'Валютных пар',
    label: 'pairs',
  },
  {
    name: 'Активы CFD',
    label: 'cfd',
  },
  {
    name: 'Тип брокера',
    label: 'type',
  },
  {
    name: 'Платежные системы',
    label: 'paymentSystems',
  },
  {
    name: 'Мобильная торговля',
    label: 'mobile',
  },
  {
    name: 'Дов. управление',
    label: 'trustManagment',
  },
  {
    name: 'Поддержка 24/7',
    label: 'support',
  },
];

const Tabs = () => (
  <div className="table__comparsion-tabs">
    <a className="table__comparsion-tabs-btn text-small is-active" href="/compare.html">
      <span>Всё</span>
    </a>
    <a className="table__comparsion-tabs-btn text-small" href="/compare.html">
      <span>Главное</span>
    </a>
    <a className="table__comparsion-tabs-btn text-small" href="/compare.html">
      <span>Торговля</span>
    </a>
    <a className="table__comparsion-tabs-btn text-small" href="/compare.html">
      <span>Платежи</span>
    </a>
  </div>
);

const TableComparsion = observer(() => {
  useEffect(() => {
    if (Store.tableLoading && Store.tableRows.length === 0) {
      Store.fetchData();
    }
  }, []);
  return (
    <>
      {!Store.fetchFailed && !Store.tableLoading && Store.tableRows.length === 0 && (
        <TableLoaderPlaceholder
          style={{
            marginTop: '24px',
          }}
          text="Нет данных для отображения"
          action={Store.fetchData()}
          actionText="Загрузить"
          icon="loading-icon"
        />
      )}
      {Store.fetchFailed && !Store.tableLoading && (
        <TableLoaderPlaceholder
          text="Произошла ошибка! Попробуйте снова"
          action={Store.fetchData()}
          actionText="Повторить"
          icon="loading-icon"
        />
      )}
      {!Store.fetchFailed && Store.tableLoading && (
        <TableLoaderPlaceholder text="Загрузка..." icon="loading-icon" />
      )}
      {!Store.tableLoading && Store.tableRows.length > 0 && (
        <main className="table__comparsion-outer">
          <div className="table__comparsion">
            <div className="table__comparsion-body">
              {Store.compared.length === 0 && (
                <TableLoaderPlaceholder
                  style={{
                    marginTop: 24,
                  }}
                  text="Выберите брокера из списка"
                />
              )}
              {Store.compared.length > 0 &&
                rows.map((row) => (
                  <TableComparsionRow
                    key={row.label}
                    data-key={row.label}
                    row={row}
                    cols={Store.compared}
                  />
                ))}
            </div>
          </div>
          <Tabs />
          <aside className="table__comparsion-filter">
            <div className="table__comparsion-filter_inner">
              <FilterItem label="Только отличия" name="diff" index="0" />
              <FilterComparsion items={Store.tableRows} />
            </div>
          </aside>
        </main>
      )}
    </>
  );
});

export default TableComparsion;
