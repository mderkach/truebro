import { useState, createRef } from 'react';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const useScrollLock = () => {
  const [expanded, setExpanded] = useState(false);

  const ref = createRef();

  const Toggle = () => {
    setExpanded(!expanded);
    if (!expanded) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }
  };

  return {
    event: Toggle,
    expanded: expanded,
    ref: ref,
  };
};

export default useScrollLock;
