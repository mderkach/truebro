import { useState, createRef } from 'react';

const useToggleHidden = () => {
  const spanRef = createRef();
  const hiddenTriggerRef = createRef();
  const [text, setText] = useState();

  const toggleHidden = () => {
    const target = hiddenTriggerRef.current;
    const textTarget = spanRef.current;

    target.previousElementSibling.classList.toggle('is-expanded');
    target.classList.toggle('is-expanded');

    if (target.classList.contains('is-expanded')) {
      setText(textTarget.textContent);
      textTarget.textContent = 'Свернуть';
    } else {
      textTarget.textContent = text;
    }
  };

  return {
    event: toggleHidden,
    spanRef: spanRef,
    hiddenTriggerRef: hiddenTriggerRef,
  };
};

export default useToggleHidden;
