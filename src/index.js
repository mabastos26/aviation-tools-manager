import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./mainStyles.css"
import Reducers from "./reducers"

import { createStore } from 'redux';
import {Provider} from 'react-redux'

const store=createStore(Reducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
