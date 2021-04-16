// core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import '/src/utils/svg';
// components
import App from '/src/modules/App/App';

ReactDOM.render(
  <>
    <Provider>
      <App />
    </Provider>
  </>,
  document.querySelector('#root'),
);
