import 'antd/lib/index.css';
import './common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import Content from './containers/Content';

window.react = React;
window['react-dom'] = ReactDOM;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="part1" component={Content} />
      <Route path="part2" component={Login} />
      <Route path="part3" component={Login} />
    </Route>
  </Router>
  , document.getElementById('react-content')
);
