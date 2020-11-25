import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
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
];

const TableComparsion = observer(() => {
  const [cols, setCols] = useState();

  useEffect(() => {
    API.get('/table').then((res) => setCols(res.data));
  }, []);

  console.log(cols);

  return (
    <>
      <main className="table__comparsion-outer">
        <div className="table__comparsion">
          <div className="table__comparsion-tabs">tabs</div>
          <div className="table__comparsion-body">
            {cols &&
              rows.map((row) => (
                <>
                  {row.label !== 'brand' && (
                    <div key={row.label} className="table__comparsion-row">
                      <p className="table__comparsion-row_name text-small">{row.name}</p>
                      {cols.map((col) => (
                        <p className="text-regular" key={row.label + col[row.label]}>
                          {typeof col[row.label] === 'boolean' && col[row.label] && (
                            <svg className="table__comparsion-row-check">
                              <use xlinkHref="./assets/img/svg/sprite.svg#table-check-icon" />
                            </svg>
                          )}
                          {typeof col[row.label] === 'boolean' && !col[row.label] && <span>-</span>}
                          {typeof col[row.label] !== 'boolean' && <span>{col[row.label]}</span>}
                        </p>
                      ))}
                    </div>
                  )}
                  {row.label === 'brand' && (
                    <div key={row.label} className="table__comparsion-row">
                      <span />
                      {cols.map((col) => (
                        <a
                          key={row.label + col[row.label]}
                          href={col.link}
                          className="table__comparsion-row-brand"
                        >
                          <img src={col[row.label]} alt={col.name} />
                        </a>
                      ))}
                    </div>
                  )}
                </>
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
