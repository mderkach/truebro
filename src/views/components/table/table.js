import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import API from '~/js/API';
import './table.scss';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import Filter from '../filter/filter';
// eslint-disable-next-line no-unused-vars
import inputCheckbox from '../input/inputCheckbox';

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

const Table = () => {
  const [tableRows, setTableRows] = useState();
  const [filter, setFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState('down');

  const getTable = useCallback(() => {
    return API.get('/table');
  }, []);
  const getFilter = useCallback(() => {
    return API.get('/filter');
  }, []);

  useEffect(() => {
    if (loading) {
      Promise.all([getTable(), getFilter()]).then((...responses) => {
        setTableRows(responses[0][0].data);
        setFilter(responses[0][1].data);
        setLoading(false);
      });
    }
  }, [getTable, getFilter, loading]);

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
    const sortArray = [...tableRows];

    if (sortable) {
      sortArray.sort(compareBy(key));
      setTableRows(sortArray);
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
      {!loading && (
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
          <aside className="table__filter">{filter && <Filter items={filter} />}</aside>
          <div className="table__rows">
            {isDesktop && tableRows && (
              <TableRow headers={headers} rows={tableRows} mobile="false" />
            )}
            {isTablet && tableRows && (
              <TableRow
                headers={mobileDeviceHeaders(headers, excludeTablet, false)}
                rows={tableRows}
                dropdown={mobileDeviceHeaders(headers, excludeTablet, true)}
                mobile
              />
            )}
            {isMobile && tableRows && (
              <TableRow
                headers={mobileDeviceHeaders(headers, excludeMobile, false)}
                rows={tableRows}
                dropdown={mobileDeviceHeaders(headers, excludeMobile, true)}
                mobile
              />
            )}
          </div>
        </main>
      )}
    </>
  );
};

if (reactNode) {
  ReactDOM.render(<Table />, reactNode);
}

export default Table;
