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
  const { fetchPrognosis, fetchPrognosisText } = Store;

  const retryHandler = () => {
    fetchPrognosis();
    fetchPrognosisText();
    if (!MainStore.banner) MainStore.fetchBanner();
    if (!MainStore.quotes) MainStore.fetchQuotes();
  };

  useEffect(() => {
    fetchPrognosis();
    fetchPrognosisText();
    if (!MainStore.banner) MainStore.fetchBanner();
    if (!MainStore.quotes) MainStore.fetchQuotes();
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
