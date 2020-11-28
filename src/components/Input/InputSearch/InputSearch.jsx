import React, { useState, createRef } from 'react';
// eslint-disable-next-line no-unused-vars
import API from '~u/API';
// components
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
// styles
import styles from './InputSearch.local';

const InputSearch = (props) => {
  const { name } = props;

  const [icon, setIcon] = useState('loupe-icon');
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = createRef();

  const onClickHandler = (e) => {
    e.preventDefault();

    if (!expanded) {
      setExpanded(!expanded);
      inputRef.current.focus();
    }

    if (expanded) {
      const query = inputRef.current.value;

      if (query.length > 0) {
        if (!loading) {
          setIcon('loading-icon');
          setLoading(!loading);

          // логика запроса тут
          // симуляция успешного ответа сервера без редиректа
          setTimeout(() => {
            setIcon('loupe-icon');
            setLoading(false);
            setExpanded(false);
          }, 2500);
        }
      }
    }
  };

  return (
    <>
      <div
        className={`${styles.InputSearchWrapper} ${
          !expanded ? '' : styles.InputSearchWrapperExpanded
        } ${!loading ? '' : styles.InputSearchWrapperLoading}`}
      >
        <Button
          variant="primary"
          type="link"
          href="#"
          cls={styles.InputSearchButton}
          onClick={(e) => onClickHandler(e)}
        >
          <Icon cls={styles.InputSearchIcon} name={icon} />
        </Button>
        <form className={styles.InputSearchFrom}>
          <input ref={inputRef} name={name} type="text" className={styles.InputSearch} />
        </form>
      </div>
    </>
  );
};

export default InputSearch;
