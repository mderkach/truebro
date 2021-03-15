import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
// components
import InputCheckbox from '/src/components/Input/InputCheckbox/InputCheckbox';
// styles
import styles from './FilterItem.local';

const classes = classNames.bind(styles);

const FilterItem = observer(({ label, name, index, cls, children, checked, onChange }) => {
  const WrapperClass = classes({
    FilterItem: true,
    [cls]: cls,
  });

  return (
    <div className={WrapperClass}>
      <InputCheckbox
        name={name}
        description={label}
        mapIndex={index}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </div>
  );
});

export default FilterItem;
