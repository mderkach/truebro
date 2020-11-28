// core
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
// app styles always before imported components
import './App.scss';
// components
import Header from '~m/Header/Header';
import Footer from '~m/Footer/Footer';

import Rating from '~v/Rating/Rating';
import Compare from '~v/Compare/Compare';

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
    path: '/',
  },
  {
    icon: 'tg',
    path: '/',
  },
];

const App = () => {
  const history = useHistory();

  return (
    <>
      <Router history={history}>
        <Header nav={NavMenu} socials={NavSocials} />
        <div className="compensate-header" />
        <Switch>
          <Route exact path="/" component={Rating} />
          <Route exact path="/compare" component={Compare} />
        </Switch>
        <Footer nav={NavMenu} socials={NavSocials} />
      </Router>
    </>
  );
};

export default observer(App);
