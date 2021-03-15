import React from 'react';
import classNames from 'classnames/bind';
// components
import Picture from '/src/components/Picture/Picture';
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
// utils
import useToggleHidden from '/src/utils/useToggleHidden';
// styles
import s from './PrognosisBrokersTable.local';

const classes = classNames.bind(s);
const hiddenTriggerClass = classes({
  'text-small': true,
  medium: true,
  HiddenTrigger: true,
});

const PrognosisBrokersTable = () => {
  const { event: toggleHiddenEvent, spanRef, hiddenTriggerRef } = useToggleHidden();

  const toggleHidden = (e) => {
    e.preventDefault();
    toggleHiddenEvent();
  };

  return (
    <div className={s.Wrapper}>
      <h3 className="h3 medium">Лучшие форекс-брокеры</h3>
      <div className={s.Row}>
        <div className={s.RowInfo}>
          <Picture cls={s.Picture} src="./assets/img/alpari.png" />
          <p className="text-regular">Alpari</p>
        </div>
        <div className={s.RowAction}>
          <Button variant="tertiary" text="Открыть счет" />
        </div>
      </div>
      <div className={s.Row}>
        <div className={s.RowInfo}>
          <Picture cls={s.Picture} src="./assets/img/forex.png" />
          <p className="text-regular">Forex</p>
        </div>
        <div className={s.RowAction}>
          <Button variant="tertiary" text="Открыть счет" />
        </div>
      </div>
      <div className={s.HiddenWrapper}>
        <div className={s.Row}>
          <div className={s.RowInfo}>
            <Picture cls={s.Picture} src="./assets/img/bcs.png" />
            <p className="text-regular">BKS</p>
          </div>
          <div className={s.RowAction}>
            <Button variant="tertiary" text="Открыть счет" />
          </div>
        </div>
      </div>
      <button
        type="button"
        className={hiddenTriggerClass}
        onClick={toggleHidden}
        ref={hiddenTriggerRef}
      >
        <span ref={spanRef}>показать еще 1</span>
        <Icon cls={s.HiddenTriggerIcon} name="chevron-down-icon" />
      </button>
    </div>
  );
};

export default PrognosisBrokersTable;
