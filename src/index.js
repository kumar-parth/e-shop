import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './configureStore';
import Home from './pages/Home';
import Cart from './pages/Cart';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);