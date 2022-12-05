
import React from 'react';
//import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { HashRouter as Router } from 'react-router-dom';
import rootReducer from './reducers/reducers';
import App from './containers/App';
import './index.css';

import * as ReactDOM from 'react-dom/client'

const store = createStore(rootReducer, applyMiddleware(logger));

const rootNode = document.getElementById('root')
ReactDOM.createRoot(rootNode).render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

);

 