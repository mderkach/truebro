import React from 'react';

const Column = (props) => {
  const { row, col } = props;
  return (
    <>
      <p className="text-regular">
        {row.label !== 'brand' && (
          <>
            {typeof col[row.label] === 'boolean' && row.label === 'forNovice' && col[row.label] && (
              <svg className="table__comparsion-row-check">
                <use xlinkHref="./assets/img/svg/sprite.svg#table-check-icon" />
              </svg>
            )}
            {typeof col[row.label] === 'boolean' &&
              row.label === 'forNovice' &&
              !col[row.label] && <span>-</span>}
            {typeof col[row.label] === 'boolean' && row.label === 'spread' && col[row.label] && (
              <span>Фикс.</span>
            )}
            {typeof col[row.label] === 'boolean' && row.label === 'spread' && !col[row.label] && (
              <span>Плав.</span>
            )}
            {typeof col[row.label] === 'boolean' &&
              (row.label === 'loyality' ||
                row.label === 'partnership' ||
                row.label === 'support') &&
              col[row.label] && <span>Есть</span>}
            {typeof col[row.label] === 'boolean' &&
              (row.label === 'loyality' ||
                row.label === 'partnership' ||
                row.label === 'support' ||
                row.label === 'trustManagment') &&
              !col[row.label] && <span>Нет</span>}
            {typeof col[row.label] !== 'boolean' && <span>{col[row.label]}</span>}
          </>
        )}
        {row.label === 'brand' && (
          <a
            key={row.label + col[row.label]}
            href={col.link}
            className="table__comparsion-row-brand"
          >
            <img src={col[row.label]} alt={col.name} />
          </a>
        )}
      </p>
    </>
  );
};

const TableComparsionRow = (props) => {
  const { cols, row, ...rest } = props;

  return (
    <div className="table__comparsion-row" {...rest}>
      {row.label !== 'brand' && <p className="table__comparsion-row_name text-small">{row.name}</p>}
      {row.label === 'brand' && <p className="table__comparsion-row_name text-small" />}
      {cols.map((col) => (
        <Column key={row.label + col.name} row={row} col={col} />
      ))}
    </div>
  );
};

export default TableComparsionRow;
