import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import API from '~/js/API';
import './table.scss';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

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
const excludeMobile = [
  'forNovice',
  'claim',
  'positive',
  'recognizability',
  'bonus',
  'comfort',
];

const mobileDeviceHeaders = (headersList, excludeList, include) =>
  !include
    ? headersList.filter((item) => !excludeList.includes(item.label))
    : headersList.filter((item) => excludeList.includes(item.label));
const Table = () => {
  const [tableRows, setTableRows] = useState();
  const [loading, setLoading] = useState();
  const [sortDirection, setSortDirection] = useState('down');

  useEffect(() => {
    setLoading(true);
    API.get('/table').then((res) => {
      setTableRows(res.data);
      setLoading(false);
    });
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
        <div className="table__outer">
          <div className="table__header table__row">
            {isDesktop && (
              <TableHeader
                headers={headers}
                sortDirection={sortDirection}
                sortBy={sortBy}
              />
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
          <div className="table__filter">filter</div>
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
        </div>
      )}
    </>
  );
};

if (reactNode) {
  ReactDOM.render(<Table />, reactNode);
}

export default Table;
