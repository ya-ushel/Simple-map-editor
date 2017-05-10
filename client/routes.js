import React, {Component} from 'react';
import {Route, IndexRoute, Redirect} from 'react-router'

import {App} from './containers';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ App }/>
        <Redirect from='*' to='/'/>

    </Route>
);
