/// <reference path="./components/interfaces.d.ts" />

import React from 'react';
import ReactDOM from 'react-dom';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import './assets/lib/fa/css/all.css'
import './assets/css/index.css';
import './assets/css/App.css';

import Loadable from 'react-loadable';
import { LoadingComponent } from './components/Loader';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { setFancy, requestJSON, componentProps } from './reducer/reducer';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const rootReducer = combineReducers({ setFancy, requestJSON, componentProps });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
const AsyncBase = Loadable({loader: () => import("./base/App"), loading: LoadingComponent});

ReactDOM.render(
    <Provider store={store}>
        <AsyncBase />
    </Provider>, document.getElementById('root') as Element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
