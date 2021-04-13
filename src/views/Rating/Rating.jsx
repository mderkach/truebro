import React from 'react';
import { observer } from 'mobx-react';
// components
import ScreenBanner from '~cmp/Screen/ScreenBanner/ScreenBanner';
import ScreenBroker from '~cmp/Screen/ScreenBroker/ScreenBroker';
import Wrapper from '~cmp/Wrapper/Wrapper';
import Table from '~cmp/Table/Table/Table';
// store
import Store from '/src/utils/Store';

const Rating = observer(() => {
  return (
    <>
      <ScreenBanner
        title="Лучшие брокеры тут"
        descr="Рейтинг основанный на множестве характеристик, этот рейтинг Форекс брокеров поможет найти лучшие условия исходя из анализа спредов, максимального кредитного плеча и минимального депозита. Также были учтены независимые отзывы и оценки посетителей"
      />
      <Wrapper>
        <Table />
      </Wrapper>
      {!Object.entries(Store.staticBlock).some(([key, value]) => value === null || undefined) && (
        <ScreenBroker
          title={Store.staticBlock.title}
          descr={Store.staticBlock.text}
          svg={Store.staticBlock.image}
        />
      )}
    </>
  );
});

export default Rating;
