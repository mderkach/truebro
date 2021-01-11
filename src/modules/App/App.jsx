// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
// app styles always before imported components
import './App.scss';
// components
import Header from '~m/Header/Header';
import Footer from '~m/Footer/Footer';
// routes
import Rating from '~v/Rating/Rating';
import Compare from '~v/Compare/Compare';
import Broker from '~m/Broker/Broker';

const NavMenu = [
  {
    label: 'Рейтинг брокеров',
    path: '/',
    exact: true,
  },
  {
    label: 'Котировки',
    path: '/cotirovki',
    exact: true,
  },
  {
    label: 'Прогнозы',
    path: '/prognosis',
    exact: true,
  },
];

const NavSocials = [
  {
    icon: 'vk',
    path: 'https://vk.com',
  },
  {
    icon: 'fb',
    path: 'https://facebook.com',
  },
  {
    icon: 'tg',
    path: 'https://web.telegram.org/',
  },
];

const routes = [
  {
    key: 'rating',
    path: '/',
    component: Rating,
    exact: true,
  },
  {
    key: 'compare',
    path: '/compare',
    component: Compare,
    exact: true,
  },
  {
    key: 'broker',
    path: '/broker/:name?',
    exact: false,
    component: Broker,
  },
];

const App = observer(() => {
  const history = useHistory();

  return (
    <Router history={history}>
      <div>
        <Header nav={NavMenu} socials={NavSocials} />
        <div className="compensate-header" />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            );
          })}
        </Switch>
        <Footer nav={NavMenu} socials={NavSocials} />
      </div>
    </Router>
  );
});

export default App;
