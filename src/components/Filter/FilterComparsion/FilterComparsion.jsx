import React, { Fragment, createRef, useState } from 'react';
import { observer } from 'mobx-react';
// components
import FilterItem from '~cmp/Filter/FilterItem';
import Picture from '~cmp/Picture/Picture';
import Icon from '~cmp/Icon/Icon';
import styles from './FilterComparsion.local';
// utils
import Store from '~u/Store';
import { checkedAlreadyChecked } from '~u/functions';

const FilterComparsion = observer((props) => {
  const { items } = props;

  const spanRef = createRef();
  const hiddenTriggerRef = createRef();
  const [text, setText] = useState();

  const toggleHidden = (e) => {
    e.preventDefault();
    const target = hiddenTriggerRef.current;
    const textTarget = spanRef.current;

    target.previousElementSibling.classList.toggle('is-expanded');
    target.classList.toggle('is-expanded');

    if (target.classList.contains('is-expanded')) {
      setText(textTarget.textContent);
      textTarget.textContent = 'Свернуть';
    } else {
      textTarget.textContent = text;
    }
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
            >
              <Picture src={item.brand} cls={styles.FilterComparsionBrand} />
            </FilterItem>
          )}
        </Fragment>
      ))}
      <div className={styles.FilterComparsionWrapperHidden}>
        {items.map((item, index) => (
          <Fragment key={item.label}>
            {index > 6 && (
              <FilterItem
                label={item.name}
                name={item.name}
                index={index}
                checked={checkedAlreadyChecked(item, Store.compared)}
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
        onClick={(e) => toggleHidden(e)}
        ref={hiddenTriggerRef}
      >
        <span ref={spanRef}>показать еще</span>
        <Icon cls={styles.FilterComparsionHiddenTriggerIcon} name="chevron-down-icon" />
      </button>
    </>
  );
});

export default FilterComparsion;
