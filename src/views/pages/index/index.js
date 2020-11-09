/* eslint-disable no-unused-vars */
// page core
import React from 'react';
import ReactDOM from 'react-dom';
// page components
import button from '../../components/button/button';
import inputSearch from '~/views/components/input/inputSearch';
// page styles
import './index.scss';

// page custom scripts
const reactNode = document.querySelector('.index-table__container');

const headers = [
  {
    name: 'Бренд',
    align: 'left',
    sortable: false,
  },
  {
    name: 'Возраст на рынке г.',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Для новичков',
    align: 'center',
    sortable: false,
  },
  {
    name: 'Обработка претензий %',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Позитивных отзывов %',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Удобство платежей 0-10',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Мин депозит',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Бонус на депозит',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Узнаваемость Бренда 0-10',
    align: 'right',
    sortable: true,
  },
  {
    name: 'Добавить к сравнению',
    align: 'center',
    sortable: false,
  },
];

const Table = () => {
  return (
    <>
      <div className="index-table__outer">
        <div className="index-table__header index-table__row">
          {headers.map((elem) => (
            <div
              key={elem.name}
              className="index-table__cell text-small"
              style={{ textAlign: elem.align }}
            >
              {elem.name}
              {elem.sortable && (
                <svg className="index-table__sort">
                  <use xlinkHref="./assets/img/svg/sprite.svg#sort-icon" />
                </svg>
              )}
            </div>
          ))}
        </div>
        <div className="index-table__filter">filter</div>
        <div className="index-table__rows index-table__row">rows</div>
      </div>
    </>
  );
};

if (reactNode) {
  ReactDOM.render(<Table />, reactNode);
}

// init
inputSearch.init();
