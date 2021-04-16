import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
// components
import Picture from '/src/components/Picture/Picture';
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
// utils
import useToggleHidden from '/src/utils/useToggleHidden';
import Store from '../../Utils/Store';
// styles
import s from './PrognosisBrokersTable.local';
import { observer } from 'mobx-react';

const classes = classNames.bind(s);
const hiddenTriggerClass = classes({
  'text-small': true,
  medium: true,
  HiddenTrigger: true,
});

const PrognosisBrokersTable = observer(() => {
  const { event: toggleHiddenEvent, spanRef, hiddenTriggerRef } = useToggleHidden();

  const toggleHidden = (e) => {
    e.preventDefault();
    toggleHiddenEvent();
  };

  useEffect(() => {
    console.debug('in');
    if (!Store.brokers) {
      console.debug('call');
      Store.fetchBest();
    }

    console.debug(Store.brokers);
  }, [Store.brokers]);

  if (!Store.brokers) return null

  return (
    <div className={s.Wrapper}>
      <h3 className="h3 medium">Лучшие форекс-брокеры</h3>
      {Store.brokers.map((item, index) => {
        return index <= 1 ? (
          <div className={s.Row}>
            <div className={s.RowInfo}>
              <Picture cls={s.Picture} src={item.brand} />
              <p className="text-regular">{item.name}</p>
            </div>
            <div className={s.RowAction}>
              <Button
                type="link"
                href={item.url}
                target="_blank"
                rel="nofollow noreferrer"
                variant="tertiary"
                text="Открыть счет"
              />
            </div>
          </div>
        ) : (
          <div className={s.HiddenWrapper}>
            <div className={s.Row}>
              <div className={s.RowInfo}>
                <Picture cls={s.Picture} src={item.brand} />
                <p className="text-regular">{item.name}</p>
              </div>
              <div className={s.RowAction}>
                <Button
                  type="link"
                  href={item.url}
                  target="_blank"
                  rel="nofollow noreferrer"
                  variant="tertiary"
                  text="Открыть счет"
                />
              </div>
            </div>
          </div>
        );
      })}
      {Store.brokers && Store.brokers.length > 2 && (
        <button
          type="button"
          className={hiddenTriggerClass}
          onClick={toggleHidden}
          ref={hiddenTriggerRef}
        >
          <span ref={spanRef}>показать еще {Store.brokers.length - 2}</span>
          <Icon cls={s.HiddenTriggerIcon} name="chevron-down-icon" />
        </button>
      )}
    </div>
  );
});

export default PrognosisBrokersTable;
