import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import useToggleHidden from '/src/utils/useToggleHidden';
// components
import FilterItem from '/src/components/Filter/FilterItem';
import Picture from '/src/components/Picture/Picture';
import Icon from '/src/components/Icon/Icon';
import styles from './FilterComparsion.local';
// utils
import Store from '/src/utils/Store';
import { checkedAlreadyChecked, setCompare } from '/src/utils/functions';

const FilterComparsion = observer((props) => {
  const { items } = props;

  const { event: toggleHiddenEvent, spanRef, hiddenTriggerRef } = useToggleHidden();

  const toggleHidden = (e) => {
    e.preventDefault();
    toggleHiddenEvent();
  };

  return (
    <>
      <p className={`text-regular medium ${styles.FilterComparsionHeader}`}>Выберете брокеров:</p>
      {items.map((item, index) => (
        <Fragment key={item.name}>
          {index < 6 && (
            <FilterItem
              label={item.name}
              name={item.name}
              index={index}
              checked={checkedAlreadyChecked(item, Store.compared)}
              onChange={() => setCompare(item)}
            >
              <Picture src={item.brand} cls={styles.FilterComparsionBrand} />
            </FilterItem>
          )}
        </Fragment>
      ))}
      <div className={styles.FilterComparsionWrapperHidden}>
        {items.map((item, index) => (
          <Fragment key={item.name}>
            {index > 6 && (
              <FilterItem
                label={item.name}
                name={item.name}
                index={index}
                checked={checkedAlreadyChecked(item, Store.compared)}
                onChange={() => setCompare(item)}
              >
                <Picture src={item.brand} cls={styles.FilterComparsionBrand} />
              </FilterItem>
            )}
          </Fragment>
        ))}
      </div>
      <button
        type="button"
        className={`text-small medium ${styles.FilterComparsionHiddenTrigger}`}
        onClick={toggleHidden}
        ref={hiddenTriggerRef}
      >
        <span ref={spanRef}>показать еще</span>
        <Icon cls={styles.FilterComparsionHiddenTriggerIcon} name="chevron-down-icon" />
      </button>
    </>
  );
});

export default FilterComparsion;
