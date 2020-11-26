import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import TableComparsionRow from './tableComparsionRow';
import Store from '~/js/Store';
import API from '~/js/API';
import './tableComparsion.scss';

const reactNode = document.querySelector('.table__container');

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

const TableComparsion = observer(() => {
  const [cols, setCols] = useState();

  useEffect(() => {
    API.get('/table').then((res) => setCols(res.data));
  }, []);

  return (
    <>
      <main className="table__comparsion-outer">
        <div className="table__comparsion">
          <div className="table__comparsion-tabs">tabs</div>
          <div className="table__comparsion-body">
            {cols &&
              rows.map((row) => (
                <TableComparsionRow key={row.label} data-key={row.label} row={row} cols={cols} />
              ))}
          </div>
        </div>
      </main>
    </>
  );
});

if (reactNode) {
  ReactDOM.render(<TableComparsion />, reactNode);
}

export default TableComparsion;
