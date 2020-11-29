import React, { createRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { observer } from 'mobx-react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// components
import InputCheckbox from '~cmp/Input/InputCheckbox/InputCheckbox';
import Picture from '~cmp/Picture/Picture';
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
// styles
import './Filter.scss';

const Filter = observer((props) => {
  const { items, compare } = props;

  const ref = createRef();

  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState();

  const history = useHistory();

  const toggleFilter = (e) => {
    e.preventDefault();
    setExpanded(!expanded);

    if (!expanded) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }
  };

  const toggleHidden = (e) => {
    e.preventDefault();
    const { target } = e;
    const textTarget = target.querySelector('span');

    target.previousElementSibling.classList.toggle('is-expanded');
    target.classList.toggle('is-expanded');

    if (target.classList.contains('is-expanded')) {
      setText(textTarget.textContent);
      textTarget.textContent = 'Свернуть';
    } else {
      textTarget.textContent = text;
    }
  };

  const toCompare = (e) => {
    e.preventDefault();

    history.replace('/compare');
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
                <div className="filter-comparsion">
                  <Button
                    onClick={(e) => {
                      toCompare(e);
                    }}
                    type="button"
                    cls="text-small medium filter-button"
                  >
                    <span>к сравнению</span>
                    <span className="filter-counter">{compare.length}</span>
                  </Button>
                  {compare.map((item) => (
                    <Picture key={item.name} cls="filter-logo" src={item.brand} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
        {isMobile && (
          <>
            {compare.length > 0 && (
              <Button
                onClick={(e) => {
                  toCompare(e);
                }}
                type="button"
                cls="text-small medium filter-button"
              >
                <span>к сравнению</span>
                <span className="filter-counter">{compare.length}</span>
              </Button>
            )}
            <Button
              variant="secondary"
              onClick={(e) => {
                toggleFilter(e);
              }}
              type="button"
              cls="text-small medium filter-button"
            >
              <Icon cls="filter-button-icon" name="chevron-right-icon" />
              <span>Фильтр</span>
            </Button>
          </>
        )}
        <div ref={ref} className={`filter-item-outer ${isMobile && expanded ? 'is-expanded' : ''}`}>
          {items.map((item) => (
            <div key={item.header} className="filter-item-wrapper">
              <p className="filter-header text-regular medium">{item.header}</p>
              {item.items.map((input, subindex) => (
                <>
                  {subindex < 8 && (
                    <div key={input.label} className="filter-item">
                      <InputCheckbox
                        name={input.name}
                        description={input.label}
                        mapIndex={subindex}
                      />
                    </div>
                  )}
                </>
              ))}
              {item.items.length > 8 && (
                <>
                  <div className="filter-item-wrapper-hidden">
                    {item.items.map((input, subindex) => (
                      <>
                        {subindex > 8 && (
                          <div key={input.label} className="filter-item">
                            <InputCheckbox
                              name={input.name}
                              description={input.label}
                              mapIndex={subindex}
                            />
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="text-small medium filter-hidden-trigger"
                    onClick={(e) => toggleHidden(e)}
                  >
                    <span>{`показать еще ${items.length}`}</span>
                    <Icon cls="filter-hidden-trigger-icon" name="chevron-down-icon" />
                  </button>
                </>
              )}
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
