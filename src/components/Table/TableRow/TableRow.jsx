import React, { useRef } from 'react';
import Store from '~u/Store';

import Icon from '~cmp/Icon/Icon';
import InputCheckbox from '~cmp/Input/InputCheckbox/InputCheckbox';

import './TableRow.scss';

const TableRow = (props) => {
  const { headers, rows, mobile, dropdown } = props;

  const filteredHeaders = headers.filter((header) => header.label !== 'compare');

  const refsArray = [];

  rows.forEach(() => {
    refsArray.push(React.createRef());
  });

  const refs = useRef(refsArray);

  const toggleDropdown = (index, e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (e.target.tagName.toLowerCase() === 'label') {
      return null;
    }
    refs.current[index].current.classList.toggle('is-expanded');

    refs.current.forEach((child, i) => {
      if (i !== index) child.current.classList.remove('is-expanded');
    });

    return 1;
  };

  const setCompare = (index, e, item) => {
    e.preventDefault();
    const target = refs.current[index].current.querySelector('input');
    target.checked = !target.checked;
    Store.setCompare(item, target.checked);
  };

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div
          role="presentation"
          key={row.name}
          className="table__row"
          ref={refs.current[rowIndex]}
          onClick={(e) => {
            if (mobile) toggleDropdown(rowIndex, e);
          }}
        >
          {filteredHeaders.map((header) => (
            <div
              key={header.label}
              className={`table__row-data text-regular ${
                header.label === 'brand' ? 'table__row-logo' : ''
              }`}
            >
              {header.label === 'brand' && (
                <a href={row.link}>
                  <img src={row.brand} alt={row.brand} />
                </a>
              )}
              {header.label === 'forNovice' && row[header.label] && (
                <Icon cls="table__row-check" name="table-check-icon" />
              )}
              {header.label === 'forNovice' && row[header.label] === false && <span>-</span>}
              {header.label !== 'brand' && header.label !== 'forNovice' && (
                <span>{row[header.label]}</span>
              )}
            </div>
          ))}
          <InputCheckbox name={row.name} onClick={(e) => setCompare(rowIndex, e, row)} />
          {dropdown && (
            <>
              <div className="table__row-data text-regular">
                <Icon cls="table__sort" name="sort-icon" />
              </div>
              <div className="table__row-dropdown">
                {dropdown.map((item, i) => (
                  <div
                    className="table__row-dropdown-item text-small"
                    key={item.label}
                    style={{
                      animationDelay: `${(i + 1) * 60}ms`,
                    }}
                  >
                    <span>{item.name}</span>
                    {item.label === 'forNovice' && (
                      <Icon cls="table__row-check" name="table-check-icon" />
                    )}
                    {item.label !== 'forNovice' && (
                      <p className="text-regular">{row[item.label]}</p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default TableRow;
