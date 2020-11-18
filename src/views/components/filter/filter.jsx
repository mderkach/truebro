import React, { createRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { observer } from 'mobx-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// eslint-disable-next-line no-unused-vars
import inputCheckbox from '../input/inputCheckbox';
// eslint-disable-next-line no-unused-vars
import button from '../button/button';
// styles
import './filter.scss';

const Filter = observer((props) => {
  const { items, compare } = props;

  const ref = createRef();

  const [expanded, setExpanded] = useState(false);

  const toggleFilter = (e) => {
    e.preventDefault();
    setExpanded(!expanded);

    if (!expanded) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 1680px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1679px)',
  });

  return (
    <>
      <div className="filter-wrapper">
        {compare.length > 0 && (
          <>
            {isDesktop && (
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
          </>
        )}
        {isMobile && (
          <>
            {compare.length > 0 && (
              <a className="button-primary text-small medium filter-button" href="#a">
                <span>к сравнению</span>
                <span className="filter-counter">{compare.length}</span>
              </a>
            )}
            <a
              className="button-secondary text-small medium filter-button"
              href="#toggle"
              onClick={(e) => {
                toggleFilter(e);
              }}
            >
              <svg className="filter-button-icon">
                <use xlinkHref="./assets/img/svg/sprite.svg#chevron-right-icon" />
              </svg>
              <span>Фильтр</span>
            </a>
          </>
        )}
        <div ref={ref} className={`filter-item-outer ${isMobile && expanded ? 'is-expanded' : ''}`}>
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
        {isMobile && (
          <svg
            onClick={(e) => {
              toggleFilter(e);
            }}
            className={`filter-close ${isMobile && expanded ? 'is-expanded' : ''}`}
          >
            <use xlinkHref="./assets/img/svg/sprite.svg#cross-icon" />
          </svg>
        )}
        {isMobile && (
          <div
            className={`filter-item-outer-backdrop ${isMobile && expanded ? 'is-expanded' : ''}`}
          />
        )}
      </div>
    </>
  );
});

export default Filter;
