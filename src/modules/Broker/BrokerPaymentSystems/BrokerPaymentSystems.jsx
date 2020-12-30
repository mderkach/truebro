import React from 'react';
// utils
import classNames from 'classnames/bind';
import useToggleHidden from '~u/useToggleHidden';
// components
import Picture from '~cmp/Picture/Picture';
import Icon from '~cmp/Icon/Icon';
// styles
import styles from './BrokerPaymentSystems.local';

const classes = classNames.bind(styles);

const hiddenTriggerClass = classes({
  'text-small': true,
  medium: true,
  PictureHiddenTrigger: true,
});

const BrokerPaymentSystems = (props) => {
  const { items } = props;
  const { event: toggleHiddenEvent, spanRef, hiddenTriggerRef } = useToggleHidden();
  const toggleHidden = (e) => {
    e.preventDefault();
    toggleHiddenEvent();
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <h3 className="h3 medium">Платежные системы</h3>
        <div className={styles.PictureWrapper}>
          {items.map(
            (i, index) => index < 12 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
          )}
        </div>
        {items.length > 11 && (
          <>
            <div className={classes(styles.PictureHiddenWrapper, styles.PictureWrapper)}>
              {items.map(
                (i, index) =>
                  index > 11 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
              )}
            </div>
            <button
              type="button"
              className={hiddenTriggerClass}
              onClick={toggleHidden}
              ref={hiddenTriggerRef}
            >
              <span ref={spanRef}>{`показать еще ${items.length - 12}`}</span>
              <Icon cls={styles.PictureHiddenTriggerIcon} name="chevron-down-icon" />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default BrokerPaymentSystems;
