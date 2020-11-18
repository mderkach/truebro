import React, { useRef } from 'react';
import Store from '~/js/Store';
import './tableRow.scss';

const TableRow = (props) => {
  const { headers, rows, mobile, dropdown } = props;

  const filteredHeaders = headers.filter((header) => header.label !== 'compare');

  const refsArray = [];

  rows.forEach(() => {
    refsArray.push(React.createRef());
  });

  const refs = useRef(refsArray);

  const toggleDropdown = (index, e, item) => {
    if (!e.target.classList.contains('input-checkbox-box')) {
      refs.current[index].current.classList.toggle('is-expanded');

      refs.current.forEach((child, i) => {
        if (i !== index) child.current.classList.remove('is-expanded');
      });
    } else {
      e.preventDefault();
      const target = refs.current[index].current.querySelector('input');
      target.checked = !target.checked;
      Store.setCompare(item, target.checked);
    }
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
            if (mobile) toggleDropdown(rowIndex, e, row);
          }}
        >
          {filteredHeaders.map((header) => (
            <div
              key={header.label}
              data-key={header.label}
              className={`table__row-data text-regular ${
                header.label === 'brand' ? 'table__row-logo' : ''
              }`}
            >
              {header.label === 'brand' && <img src={row.brand} alt={row.brand} />}
              {header.label === 'forNovice' && row[header.label] && (
                <svg className="table__row-check">
                  <use xlinkHref="./assets/img/svg/sprite.svg#table-check-icon" />
                </svg>
              )}
              {header.label === 'forNovice' && row[header.label] === false && <span>-</span>}
              {header.label !== 'brand' && header.label !== 'forNovice' && (
                <span>{row[header.label]}</span>
              )}
            </div>
          ))}
          <label className="input-checkbox" htmlFor={row.name}>
            <input type="checkbox" name={row.name} id={row.name} />
            <div className="input-checkbox-box" />
            <svg className="input-checkbox-icon">
              <use xlinkHref="./assets/img/svg/sprite.svg#check-icon-input" />
            </svg>
          </label>
          {dropdown && (
            <>
              <div className="table__row-data text-regular">
                <svg className="table__sort">
                  <use xlinkHref="./assets/img/svg/sprite.svg#sort-icon" />
                </svg>
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
                      <svg className="table__row-check">
                        <use xlinkHref="./assets/img/svg/sprite.svg#table-check-icon" />
                      </svg>
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
