import React from 'react';
import { useMediaQuery } from 'react-responsive';
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
  const { items, className } = props;
  const { event: toggleHiddenEvent, spanRef, hiddenTriggerRef } = useToggleHidden();
  const toggleHidden = (e) => {
    e.preventDefault();
    toggleHiddenEvent();
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 1366px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1365px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      <div className={classes(styles.Wrapper, className)}>
        <h3 className="h3 medium">Платежные системы</h3>
        <div className={styles.PictureWrapper}>
          {isDesktop &&
            items.map(
              (i, index) => index < 12 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
            )}
          {isTablet &&
            items.map(
              (i, index) => index < 14 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
            )}
          {isMobile &&
            items.map(
              (i, index) => index < 9 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
            )}
        </div>
        {isDesktop && items.length > 11 && (
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
        {isTablet && items.length > 14 && (
          <>
            <div className={classes(styles.PictureHiddenWrapper, styles.PictureWrapper)}>
              {items.map(
                (i, index) =>
                  index > 13 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
              )}
            </div>
            <button
              type="button"
              className={hiddenTriggerClass}
              onClick={toggleHidden}
              ref={hiddenTriggerRef}
            >
              <span ref={spanRef}>{`показать еще ${items.length - 14}`}</span>
              <Icon cls={styles.PictureHiddenTriggerIcon} name="chevron-down-icon" />
            </button>
          </>
        )}
        {isMobile && items.length > 8 && (
          <>
            <div className={classes(styles.PictureHiddenWrapper, styles.PictureWrapper)}>
              {items.map(
                (i, index) => index > 8 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
              )}
            </div>
            <button
              type="button"
              className={hiddenTriggerClass}
              onClick={toggleHidden}
              ref={hiddenTriggerRef}
            >
              <span ref={spanRef}>{`показать еще ${items.length - 9}`}</span>
              <Icon cls={styles.PictureHiddenTriggerIcon} name="chevron-down-icon" />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default BrokerPaymentSystems;
