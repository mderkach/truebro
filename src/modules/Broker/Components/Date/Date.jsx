import React from 'react';

const Date = (props) => {
  const { date = '27 июня 18:02', time } = props;
  return (
    <time className="text-regular" dateTime={time}>
      {date}
    </time>
  );
};

export default Date;
