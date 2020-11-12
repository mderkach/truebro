import React from 'react';
import './tableRow.scss';

const TableHeader = (props) => {
  const { headers, sortDirection, sortBy } = props;
  return (
    <>
      {headers.map((elem) => (
        <div
          role="presentation"
          key={elem.name}
          data-key={elem.label}
          className="table__cell"
          style={{ textAlign: elem.align }}
          onClick={() => sortBy(elem.label, elem.sortable)}
        >
          {elem.name}
          {elem.sortable && (
            <svg className={`table__sort ${sortDirection}`}>
              <use xlinkHref="./assets/img/svg/sprite.svg#sort-icon" />
            </svg>
          )}
        </div>
      ))}
    </>
  );
};

export default TableHeader;
