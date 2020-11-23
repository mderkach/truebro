import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { useMediaQuery } from 'react-responsive';
import { toJS } from 'mobx';
import './table.scss';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import Filter from '../filter/filter';
// eslint-disable-next-line no-unused-vars
import inputCheckbox from '../input/inputCheckbox';
import Store from '~/js/Store';
import API from '../../../js/API';

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

  const retryFetch = (e) => {
    e.preventDefault();

    Store.toggleTableLoading(true);
    Store.toggleFetchError(false);
    Store.fetchData(Store.tableLoading);
  };

  const fetchAdditionRows = (e) => {
    e.preventDefault();

    // API запрос
    // пример:
    // API.get(query-string).then((res) => Store.tableRows = res.data )
    // Лучше создать @action в Store по типу fetchData и сохранить результат запроса в tableRows
  };

  const compareItems = (key, direction) => {
    return function (a, b) {
      let aI = parseInt(a[key], 10);
      let bI = parseInt(b[key], 10);

      if (Number.isNaN(aI)) aI = 0;
      if (Number.isNaN(bI)) bI = 0;

      if (direction === 'up') {
        return aI - bI;
      }

      return bI - aI;
    };
  };

  const sortItems = (key, sortable) => {
    const sortArray = [...Store.tableRows];

    const reverseArray = (arr) => arr.reverse();

    if (sortable) {
      if (key !== Store.sortKey) {
        setSortDirection('up');
        sortArray.sort(compareItems(key, sortDirection));
        Store.updateRows(sortArray);
        Store.sortKey = key;
      } else {
        Store.updateRows(reverseArray(sortArray));
      }

      setSortDirection((dir) => (dir === 'down' ? 'up' : 'down'));
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
      {Store.tableLoading && (
        <div className="table__placeholder">
          <svg className="table__placeholder-icon">
            <use xlinkHref="./assets/img/svg/sprite.svg#loading-icon" />
          </svg>
          <span>Загрузка...</span>
        </div>
      )}
      {!Store.tableLoading && Store.fetchFailed && (
        <div className="table__placeholder">
          <span>Произошла ошибка! Попробуйте снова</span>
          <a
            className="button-secondary text-small medium table__button"
            href="javascript(void:0);"
            onClick={(e) => retryFetch(e)}
          >
            Повторить
          </a>
        </div>
      )}
      {!Store.tableLoading && !Store.fetchFailed && (
        <main className="table__outer">
          <div className="table__header table__row">
            {isDesktop && (
              <TableHeader headers={headers} sortDirection={sortDirection} sortBy={sortItems} />
            )}
            {isTablet && (
              <TableHeader
                headers={mobileDeviceHeaders(headers, excludeTablet, false)}
                sortDirection={sortDirection}
                sortBy={sortItems}
              />
            )}
            {isMobile && (
              <TableHeader
                headers={mobileDeviceHeaders(headers, excludeMobile, false)}
                sortDirection={sortDirection}
                sortBy={sortItems}
              />
            )}
          </div>
          <aside className="table__filter">
            <div className="table__filter-outer">
              {Store.filter && <Filter items={Store.filter} compare={Store.compared} />}
            </div>
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
          <a
            className="button-secondary text-small medium table__button"
            href="javascript(void:0);"
            onClick={(e) => fetchAdditionRows(e)}
          >
            Показать еще
          </a>
        </main>
      )}
    </>
  );
});

if (reactNode) {
  ReactDOM.render(<Table />, reactNode);
}

export default Table;
