import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
import useScrollLock from '/src/utils/useScrollLock';
import useToggleHidden from '/src/utils/useToggleHidden';
// components
import Picture from '/src/components/Picture/Picture';
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
import FilterItem from '/src/components/Filter/FilterItem';
// styles
import styles from './Filter.local';

const classes = classNames.bind(styles);

const CompareBtn = observer(({ action, length }) => {
  const BtnClass = classes({
    'text-small': true,
    medium: true,
    FilterButton: true,
  });

  return (
    <Button
      onClick={(e) => {
        action(e);
      }}
      type="button"
      cls={BtnClass}
    >
      <span>к сравнению</span>
      <span className={styles.FilterCounter}>{length}</span>
    </Button>
  );
});

const BtnClass = classes({
  'text-small': true,
  medium: true,
  FilterButton: true,
});

const BtnHiddenClass = classes({
  'text-small': true,
  medium: true,
  FilterHiddenTrigger: true,
});

const FilterHeader = classes({
  'text-regular': true,
  medium: true,
  FilterHeader: true,
});

const Filter = observer((props) => {
  const { items, compare } = props;

  const { expanded, event, ref } = useScrollLock();

  const { event: toggleHiddenEvent, spanRef, hiddenTriggerRef } = useToggleHidden();

  const history = useHistory();

  const toggleFilter = (e) => {
    e.preventDefault();
    event();
  };

  const toggleHidden = (e) => {
    e.preventDefault();
    toggleHiddenEvent();
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

  const FilterOuterClass = classes({
    FilterItemOuter: true,
    'is-expanded': isMobile && expanded,
  });

  const FilterCloseClass = classes({
    FilterClose: true,
    'is-expanded': isMobile && expanded,
  });

  const FilterBackdropClass = classes({
    FilterItemOuterBackdrop: true,
    'is-expanded': isMobile && expanded,
  });

  return (
    <div className={styles.FilterWrapper}>
      {compare && compare.length > 0 && (
        <>
          {isDesktop && (
            <>
              <div className={styles.FilterComparsion}>
                <CompareBtn action={toCompare} length={compare.length} />
                {compare.map((item) => (
                  <Picture
                    key={item.name}
                    cls={styles.FilterLogo}
                    src={item.brand}
                    alt={item.name}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
      {isMobile && (
        <>
          {compare && compare.length > 0 && (
            <CompareBtn action={toCompare} length={compare.length} />
          )}
          <Button variant="secondary" onClick={toggleFilter} type="button" cls={BtnClass}>
            <Icon cls={styles.FilterButtonIcon} name="chevron-right-icon" />
            <span>Фильтр</span>
          </Button>
        </>
      )}
      <div ref={ref} className={FilterOuterClass}>
        {items.map((item) => (
          <div data-key={item.header} key={item.header} className={styles.FilterItemWrapper}>
            <p className={FilterHeader}>{item.header}</p>
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
                  className={BtnHiddenClass}
                  onClick={toggleHidden}
                  ref={hiddenTriggerRef}
                >
                  <span ref={spanRef}>{`показать еще ${items.length}`}</span>
                  <Icon cls={styles.FilterHiddenTriggerIcon} name="chevron-down-icon" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      {isMobile && <Icon onClick={toggleFilter} cls={FilterCloseClass} name="cross-icon" />}
      {isMobile && <div className={FilterBackdropClass} />}
    </div>
  );
});

export default Filter;
