import React from 'react';
// eslint-disable-next-line no-unused-vars
import inputCheckbox from '../input/inputCheckbox';

import './filter.scss';

const Filter = (props) => {
  const { items, compare } = props;

  return (
    <>
      <div className="filter-wrapper">
        <div className="filter-comparsion">{compare}</div>
        <div className="filter-item-outer">
          {items.map((item) => (
            <div key={item.header} className="filter-item-wrapper">
              <p className="filter-header text-regular medium">{item.header}</p>
              {item.items.map((input, subindex) => (
                <div key={input.label} className="filter-item">
                  <label className="input-checkbox" htmlFor={input.name + subindex}>
                    <input type="checkbox" name={input.name} id={input.name + subindex} />
                    <div className="input-checkbox-box" />
                    <svg className="input-checkbox-icon">
                      <use xlinkHref="./assets/img/svg/sprite.svg#check-icon-input" />
                    </svg>
                    <p className="text-regular">{input.label}</p>
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
