import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import {Router, browserHistory} from 'react-router';

require('./styles/main.scss');

const store = configureStore();

let rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
        />
    </Provider>, rootElement
);
