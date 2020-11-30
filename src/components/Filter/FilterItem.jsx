import React from 'react';
import { observer } from 'mobx-react';
import InputCheckbox from '~cmp/Input/InputCheckbox/InputCheckbox';

import styles from './FilterItem.local';

const FilterItem = observer(({ label, name, index, cls, children, checked }) => (
  <div className={`${styles.FilterItem} ${cls || ''}`}>
    <InputCheckbox name={name} description={label} mapIndex={index} checked={checked} />
    {children && children}
  </div>
));

export default FilterItem;
