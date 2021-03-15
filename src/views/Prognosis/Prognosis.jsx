import React from 'react';
import { observer } from 'mobx-react';
// components
import ScreenBanner from '/src/components/Screen/ScreenBanner/ScreenBanner';
import Wrapper from '/src/components/Wrapper/Wrapper';
import PrognosisView from '~m/Prognosis/Views/PrognosisView';

const Prognosis = observer(() => (
  <>
    <ScreenBanner title="Прогнозы форекс. Рекомендации." />
    <Wrapper>
      <PrognosisView />
    </Wrapper>
  </>
));

export default Prognosis;
