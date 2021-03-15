import React from 'react';
// components
import ScrollContainer from 'react-indiana-drag-scroll';
import Button from '/src/components/Button/Button';
// styles
import styles from './CommentsControls.local';

const CommentsControls = ({ action }) => {
  return (
    <div className={styles.CommentsControlsWrapper}>
      <ScrollContainer className={styles.CommentsControls}>
        <Button type="button" variant="chip" cls="is-active" text="Новые" />
        <Button type="button" variant="chip" text="Положительныее" />
        <Button type="button" variant="chip" text="Отрицательные" />
        <Button type="button" variant="chip" text="Все отзывы" />
      </ScrollContainer>
      <Button
        type="button"
        variant="tertiary"
        text="Написать отзыв"
        onClick={() => action('feedback')}
      />
    </div>
  );
};

export default CommentsControls;
