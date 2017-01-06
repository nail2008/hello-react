import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

import './common/lib';

import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import FormDemo from './containers/FormDemo'
import MD_Practice from './containers/MD_Practice';
import Demo from './containers/MD_Practice/Demo';
import Article from './containers/MD_Practice/Article';

window.react = React;
window['react-dom'] = ReactDOM;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/static/docs" component={MD_Practice}>
        <Route path="/static/docs/md_practice/:mdName" component={Article}/>
        <Route path="/static/docs/button" component={Demo}/>
      </Route>
      <Link to="part2" component={Login} />
    </Route>
    <Route path="/part3" component={FormDemo} />
  </Router>
  , document.getElementById('react-content')
);
