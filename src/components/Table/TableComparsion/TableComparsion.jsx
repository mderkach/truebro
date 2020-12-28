import React, { useEffect, useState, createRef } from 'react';
import { observer } from 'mobx-react';
import { useMediaQuery } from 'react-responsive';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// components
import ScrollContainer from 'react-indiana-drag-scroll';
import FilterItem from '~cmp/Filter/FilterItem';
import FilterComparsion from '~cmp/Filter/FilterComparsion/FilterComparsion';
import TableComparsionRow from './TableComparsionRow';
import TableLoaderPlaceholder from '~cmp/Table/TableLoaderPlaceHolder';
import Icon from '~cmp/Icon/Icon';
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
  <ScrollContainer className="table__comparsion-tabs">
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
  </ScrollContainer>
);

const TableComparsion = observer(() => {
  useEffect(() => {
    if (Store.tableLoading && Store.tableRows.length === 0) {
      Store.fetchData();
    }
  }, []);

  const [expanded, setExpanded] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 1679px)',
  });

  const ref = createRef();

  const toggleFilter = (e) => {
    e.preventDefault();
    setExpanded(!expanded);

    if (!expanded) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }
  };

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
            <ScrollContainer className="table__comparsion-body">
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
            </ScrollContainer>
          </div>
          <Tabs />
          <aside className="table__comparsion-filter">
            <FilterItem label="Только отличия" name="diff" index="0" />
            {isMobile && (
              <button
                onClick={(e) => {
                  toggleFilter(e);
                }}
                type="button"
                className="text-extrasmall medium table__comparsion-filter-button"
              >
                <Icon cls="table__comparsion-filter-button-icon" name="chevron-right-icon" />
                <span>выбрать брокеров</span>
              </button>
            )}
            <div
              ref={ref}
              className={`table__comparsion-filter_inner ${
                isMobile && expanded ? 'is-expanded' : ''
              }`}
            >
              <FilterComparsion items={Store.tableRows} />
            </div>
            {isMobile && (
              <Icon
                onClick={(e) => {
                  toggleFilter(e);
                }}
                cls={`table__comparsion-filter-close ${isMobile && expanded ? 'is-expanded' : ''}`}
                name="cross-icon"
              />
            )}
            {isMobile && (
              <div
                className={`table__comparsion-filter_inner-backdrop ${
                  isMobile && expanded ? 'is-expanded' : ''
                }`}
              />
            )}
          </aside>
        </main>
      )}
    </>
  );
});

export default TableComparsion;
