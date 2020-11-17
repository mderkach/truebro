import React from 'react';
import { observer } from 'mobx-react';
import Store from '~/js/Store';
// eslint-disable-next-line no-unused-vars
import inputCheckbox from '../input/inputCheckbox';
// eslint-disable-next-line no-unused-vars
import button from '../button/button';
import './filter.scss';

const Filter = observer((props) => {
  const { items, compare } = props;

  return (
    <>
      <div className="filter-wrapper">
        {compare.length > 0 && (
          <>
            <a
              className="button-primary text-small medium filter-button"
              href="javascript(void:0);"
            >
              <span>к сравнению</span>
              <span className="filter-counter">{compare.length}</span>
            </a>
            <div className="filter-comparsion">
              {compare.map((item) => (
                <picture key={item.name} className="filter-logo">
                  <source src={item.brand} />
                  <img src={item.brand} alt="" />
                </picture>
              ))}
            </div>
          </>
        )}
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
});

export default Filter;
