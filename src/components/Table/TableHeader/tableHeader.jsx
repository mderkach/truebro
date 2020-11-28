import React from 'react';
import Icon from '~cmp/Icon/Icon';
import '../TableRow/TableRow.scss';

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
          {elem.sortable && <Icon cls={`table__sort ${sortDirection}`} name="sort-icon" />}
        </div>
      ))}
    </>
  );
};

export default TableHeader;
