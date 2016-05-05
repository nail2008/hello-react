import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './common/lib';

import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import Content from './containers/Content';
import FormDemo from './containers/FormDemo'

window.react = React;
window['react-dom'] = ReactDOM;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="part1" component={Content} />
      <Route path="part2" component={Login} />
    </Route>
    <Route path="/part3" component={FormDemo} />
  </Router>
  , document.getElementById('react-content')
);
