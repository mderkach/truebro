import Store from '~u/Store';

const checkedAlreadyChecked = (item, arr) => {
  if (arr && arr.length > 0 && arr.includes(item)) return true;
  return false;
};

const setCompare = (item) => {
  const isChecked = checkedAlreadyChecked(item, Store.compared);
  Store.setCompare(item, !isChecked);
};

export { checkedAlreadyChecked, setCompare };
