import React from 'react';
import ReactDOM from 'react-dom';
import rootReducers from "./store/reducer/index";
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
