import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useMediaQuery } from 'react-responsive';
import TableHeader from '~cmp/Table/TableHeader/TableHeader';
import TableRow from '~cmp/Table/TableRow/TableRow';
import Filter from '~cmp/Filter/Filter';
import Icon from '~cmp/Icon/Icon';
import Button from '~cmp/Button/Button';
import Store from '~u/Store';
// eslint-disable-next-line no-unused-vars
import API from '~u/API';

import './table.scss';

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

const LoaderPlaceholder = () => {
  return (
    <div className="table__placeholder">
      <Icon cls="table__placeholder-icon" name="loading-icon" />
      <span>Загрузка...</span>
    </div>
  );
};

const LoaderErrorPlaceholder = () => {
  return (
    <div className="table__placeholder">
      <span>Произошла ошибка! Попробуйте снова</span>
      <Button
        onClick={(e) => retryFetch(e)}
        variant="secondary"
        type="button"
        cls="text-small medium table__button"
      >
        Повторить
      </Button>
    </div>
  );
};

const TableHeaders = observer((props) => {
  const { isDesktop, isMobile, isTablet, sortBy, sortDirection } = props;
  return (
    <div className="table__header table__row">
      {isDesktop && <TableHeader headers={headers} sortDirection={sortDirection} sortBy={sortBy} />}
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
  );
});

const TableFilter = observer(() => {
  return (
    <aside className="table__filter">
      <div className="table__filter-outer">
        {Store.filter && <Filter items={Store.filter} compare={Store.compared} />}
      </div>
    </aside>
  );
});

const TableRows = observer((props) => {
  const { isDesktop, isMobile, isTablet } = props;
  return (
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
  );
});

const Table = observer(() => {
  const [sortDirection, setSortDirection] = useState('down');

  useEffect(() => {
    if (Store.tableLoading) {
      Store.fetchData(Store.tableLoading);
    }
  }, []);

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
      {Store.tableLoading && <LoaderPlaceholder />}
      {!Store.tableLoading && Store.fetchFailed && <LoaderErrorPlaceholder />}
      {!Store.tableLoading && !Store.fetchFailed && (
        <main className="table__outer">
          <TableHeaders
            isDesktop={isDesktop}
            isMobile={isMobile}
            isTablet={isTablet}
            sortBy={sortItems}
            sortDirection={sortDirection}
          />
          <TableFilter />
          <TableRows isDesktop={isDesktop} isMobile={isMobile} isTablet={isTablet} />
          <Button
            onClick={(e) => fetchAdditionRows(e)}
            variant="secondary"
            type="button"
            cls="text-small medium table__button"
          >
            Загрузить еще
          </Button>
        </main>
      )}
    </>
  );
});

export default Table;
