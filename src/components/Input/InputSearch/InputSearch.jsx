import React, { useState, createRef } from 'react';
import classNames from 'classnames/bind';
// eslint-disable-next-line no-unused-vars
import API from '/src/utils/API';
// components
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
// styles
import styles from './InputSearch.local';

const classes = classNames.bind(styles);

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

  const Wrapper = classes({
    InputSearchWrapper: true,
    InputSearchWrapperExpanded: expanded,
    InputSearchWrapperLoading: loading,
  });

  return (
    <>
      <div className={Wrapper}>
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
