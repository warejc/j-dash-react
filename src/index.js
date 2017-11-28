import './index.css';
import { config } from './config/default.js';
import HomePage from './components/HomePage';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
//import { Col, Grid, Panel, Row} from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { createStore, applyMiddleware } from 'redux';
import { Router, Redirect, Route } from 'react-router';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
console.log('config:', config)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path={`/home`} component={HomePage} config={config} />
            {/*<Route path{`/twitch`} component={TwitchPage} />*/}
            {/*<Route path={`/destiny`} component={DestinyPage} />*/}
            <Redirect from={`/`} to={`/home`} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
