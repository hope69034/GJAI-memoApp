
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { HashRouter as Router } from 'react-router-dom';
import rootReducer from './reducers/reducers';
import App from './containers/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const store = createStore(rootReducer, applyMiddleware(logger));
 
ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
    <Router>
      <App />
    </Router>
 </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);