// core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import '~u/svg';
// components
import App from '~m/App/App';

ReactDOM.render(
  <>
    <Provider>
      <App />
    </Provider>
  </>,
  document.querySelector('#root'),
);
