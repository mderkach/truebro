import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { useMediaQuery } from 'react-responsive';
import './table.scss';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import Filter from '../filter/filter';
// eslint-disable-next-line no-unused-vars
import inputCheckbox from '../input/inputCheckbox';
import Store from '~/js/Store';

const reactNode = document.querySelector('.table__container');

const headers = [
  {
    name: 'Бренд',
    label: 'brand',
    align: 'left',
    sortable: false,
  },
  {
    name: 'Возраст на рынке г.',
    label: 'age',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Для новичков',
    label: 'forNovice',
    align: 'center',
    sortable: false,
  },
  {
    name: 'Обработка жалоб %',
    label: 'claim',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Позитивных отзывов %',
    label: 'positive',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Удобство платежей 0-10',
    label: 'comfort',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Мин депозит',
    label: 'deposit',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Бонус на депозит',
    label: 'bonus',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Узнаваемость Бренда 0-10',
    label: 'recognizability',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Добавить к сравнению',
    label: 'compare',
    align: 'center',
    sortable: false,
  },
];

const excludeTablet = ['forNovice', 'claim', 'positive', 'recognizability'];
const excludeMobile = ['forNovice', 'claim', 'positive', 'recognizability', 'bonus', 'comfort'];

const mobileDeviceHeaders = (headersList, excludeList, include) =>
  !include
    ? headersList.filter((item) => !excludeList.includes(item.label))
    : headersList.filter((item) => excludeList.includes(item.label));

const Table = observer(() => {
  const [sortDirection, setSortDirection] = useState('down');

  useEffect(() => {
    if (Store.tableLoading) {
      Store.fetchData(Store.tableLoading);
    }
  }, []);

  const compareBy = (key) => {
    return function (a, b) {
      if (parseInt(a[key], 10) < parseInt(b[key], 10)) {
        setSortDirection('up');
      } else {
        setSortDirection('down');
      }

      return -1;
    };
  };

  const sortBy = (key, sortable) => {
    const sortArray = [...Store.tableRows];

    if (sortable) {
      sortArray.sort(compareBy(key));
      Store.updateRows(sortArray);
    }
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 1366px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1365px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      {!Store.tableLoading && (
        <main className="table__outer">
          <div className="table__header table__row">
            {isDesktop && (
              <TableHeader headers={headers} sortDirection={sortDirection} sortBy={sortBy} />
            )}
            {isTablet && (
              <TableHeader
                headers={mobileDeviceHeaders(headers, excludeTablet, false)}
                sortDirection={sortDirection}
                sortBy={sortBy}
              />
            )}
            {isMobile && (
              <TableHeader
                headers={mobileDeviceHeaders(headers, excludeMobile, false)}
                sortDirection={sortDirection}
                sortBy={sortBy}
              />
            )}
          </div>
          <aside className="table__filter">
            {Store.filter && <Filter items={Store.filter} compare={Store.compared} />}
          </aside>
          <div className="table__rows">
            {isDesktop && Store.tableRows && (
              <TableRow headers={headers} rows={Store.tableRows} mobile="false" />
            )}
            {isTablet && Store.tableRows && (
              <TableRow
                headers={mobileDeviceHeaders(headers, excludeTablet, false)}
                rows={Store.tableRows}
                dropdown={mobileDeviceHeaders(headers, excludeTablet, true)}
                mobile
              />
            )}
            {isMobile && Store.tableRows && (
              <TableRow
                headers={mobileDeviceHeaders(headers, excludeMobile, false)}
                rows={Store.tableRows}
                dropdown={mobileDeviceHeaders(headers, excludeMobile, true)}
                mobile
              />
            )}
          </div>
        </main>
      )}
    </>
  );
});

if (reactNode) {
  ReactDOM.render(<Table />, reactNode);
}

export default Table;
