import React, { useRef } from 'react';
import './tableRow.scss';

const TableRow = (props) => {
  const { headers, rows, mobile, dropdown } = props;

  const filteredHeaders = headers.filter(
    (header) => header.label !== 'compare',
  );

  const refs = useRef([React.createRef(), React.createRef()]);

  const toggleDropdown = (index) => {
    refs.current[index].current.classList.toggle('is-expanded');

    refs.current.forEach((child, i) => {
      if (i !== index) child.current.classList.remove('is-expanded');
    });
  };

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div
          role="presentation"
          key={row.name}
          className="table__row"
          ref={refs.current[rowIndex]}
          onClick={() => {
            if (mobile) toggleDropdown(rowIndex);
          }}
        >
          {filteredHeaders.map((header) => (
            <div
              key={header.label}
              data-key={header.label}
              className="table__row-data text-regular"
            >
              {header.label === 'brand' && (
                <img
                  className="table__row-logo"
                  src={row.brand}
                  alt={row.brand}
                />
              )}
              {header.label === 'forNovice' && (
                <svg className="table__row-check">
                  <use xlinkHref="./assets/img/svg/sprite.svg#table-check-icon" />
                </svg>
              )}
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
