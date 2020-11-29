import React, { createRef, useState, Fragment } from 'react';
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
import styles from './Filter.local';

const CompareBtn = observer(({ action, length }) => (
  <Button
    onClick={(e) => {
      action(e);
    }}
    type="button"
    cls={`text-small medium ${styles.FilterButton}`}
  >
    <span>к сравнению</span>
    <span className={styles.FilterCounter}>{length}</span>
  </Button>
));

const FilterItem = observer(({ label, name, index }) => (
  <div key={label} className={styles.FilterItem}>
    <InputCheckbox name={name} description={label} mapIndex={index} />
  </div>
));

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

    history.push('/compare');
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 1680px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1679px)',
  });

  return (
    <>
      <div className={styles.FilterWrapper}>
        {compare.length > 0 && (
          <>
            {isDesktop && (
              <>
                <div className={styles.FilterComparsion}>
                  <CompareBtn action={toCompare} length={compare.length} />
                  {compare.map((item) => (
                    <Picture key={item.name} cls={styles.FilterLogo} src={item.brand} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
        {isMobile && (
          <>
            {compare.length > 0 && <CompareBtn action={toCompare} length={compare.length} />}
            <Button
              variant="secondary"
              onClick={(e) => {
                toggleFilter(e);
              }}
              type="button"
              cls={`text-small medium ${styles.FilterButton}`}
            >
              <Icon cls={styles.FilterButtonIcon} name="chevron-right-icon" />
              <span>Фильтр</span>
            </Button>
          </>
        )}
        <div
          ref={ref}
          className={`${styles.FilterItemOuter} ${isMobile && expanded ? 'is-expanded' : ''}`}
        >
          {items.map((item) => (
            <div data-key={item.header} key={item.header} className={styles.FilterItemWrapper}>
              <p className={`text-regular medium ${styles.FilterHeader}`}>{item.header}</p>
              {item.items.map((input, subindex) => (
                <Fragment key={input.label}>
                  {subindex < 8 && (
                    <FilterItem label={input.label} name={input.name} index={subindex} />
                  )}
                </Fragment>
              ))}
              {item.items.length > 8 && (
                <>
                  <div className={styles.FilterItemWrapperHidden}>
                    {item.items.map((input, subindex) => (
                      <Fragment key={input.label}>
                        {subindex > 8 && (
                          <FilterItem label={input.label} name={input.name} index={subindex} />
                        )}
                      </Fragment>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`text-small medium ${styles.FilterHiddenTrigger}`}
                    onClick={(e) => toggleHidden(e)}
                  >
                    <span>{`показать еще ${items.length}`}</span>
                    <Icon cls={styles.FilterHiddenTriggerIcon} name="chevron-down-icon" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
        {isMobile && (
          <Icon
            onClick={(e) => {
              toggleFilter(e);
            }}
            cls={`${styles.FilterClose} ${isMobile && expanded ? 'is-expanded' : ''}`}
            name="cross-icon"
          />
        )}
        {isMobile && (
          <div
            className={`${styles.FilterItemOuterBackdrop} ${
              isMobile && expanded ? 'is-expanded' : ''
            }`}
          />
        )}
      </div>
    </>
  );
});

export default Filter;
