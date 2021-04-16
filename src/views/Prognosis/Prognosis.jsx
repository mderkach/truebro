import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
// components
import ScreenBanner from '/src/components/Screen/ScreenBanner/ScreenBanner';
import Wrapper from '/src/components/Wrapper/Wrapper';
import PrognosisView from '/src/modules/Prognosis/Views/PrognosisView';
import Loader from '/src/components/Loader/Loader';
// store
import Store from '/src/modules/Prognosis/Utils/Store';
import MainStore from '/src/utils/Store';

const Prognosis = observer(() => {
  const { fetchPrognosis } = Store;

  const retryHandler = () => {
    fetchPrognosis();
    if (!MainStore.banner) MainStore.fetchBanner();
  };

  useEffect(() => {
    fetchPrognosis();
    if (!MainStore.banner) MainStore.fetchBanner();
  }, []);

  return (
    <>
      <ScreenBanner title="Прогнозы форекс. Рекомендации." />
      <Wrapper>
        {!Store.prognosisLoaded && !Store.isError && (
          <Loader text="Загрузка..." icon="loading-icon" />
        )}
        {!Store.prognosisLoaded && Store.isError && (
          <Loader
            text="Произошла ошибка! Попробуйте снова"
            action={retryHandler}
            actionText="Повторить"
            icon="loading-icon"
          />
        )}
        {Store.prognosisLoaded && !Store.isError && <PrognosisView />}
      </Wrapper>
    </>
  );
});

export default Prognosis;
