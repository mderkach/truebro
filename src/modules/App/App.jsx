/* eslint-disable react/display-name */
// core
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
// app styles always before imported components
import './App.scss';
// components
import Header from '~m/Header/Header';
import Footer from '~m/Footer/Footer';
import Modal from '~cmp/Modal/Modal';
// routes
const Rating = lazy(() => import('~v/Rating/Rating'));
const Compare = lazy(() => import('~v/Compare/Compare'));
const Broker = lazy(() => import('~v/Broker/Broker'));
const Prognosis = lazy(() => import('~v/Prognosis/Prognosis'));
const Forecast = lazy(() => import('~v/Forecast/Forecast'));

const NavMenu = [
  {
    label: 'Рейтинг брокеров',
    path: '/',
    exact: true,
  },
  {
    label: 'Котировки',
    path: '/forecast',
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
    render: (props) => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Rating {...props} />
      </Suspense>
    ),
    exact: true,
  },
  {
    key: 'compare',
    path: '/compare',
    render: (props) => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Compare {...props} />
      </Suspense>
    ),
    exact: true,
  },
  {
    key: 'broker',
    path: '/broker/:name?',
    exact: false,
    render: (props) => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Broker {...props} />
      </Suspense>
    ),
  },
  {
    key: 'prognosis',
    path: '/prognosis',
    exact: true,
    render: (props) => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Prognosis {...props} />
      </Suspense>
    ),
  },
  {
    key: 'forecast',
    path: '/forecast',
    exact: true,
    render: (props) => (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Forecast {...props} />
      </Suspense>
    ),
  },
];

const App = observer(() => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Header nav={NavMenu} socials={NavSocials} />
      <div className="compensate-header" />
      <Switch>
        {routes.map((route) => {
          return (
            <Route key={route.key} path={route.path} exact={route.exact} render={route.render} />
          );
        })}
      </Switch>
      <Footer nav={NavMenu} socials={NavSocials} />
      <Modal />
    </Router>
  );
});

export default App;
