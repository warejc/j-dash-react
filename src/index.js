import './index.css';
import HomePage from './components/HomePage';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
//import { Col, Grid, Panel, Row} from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Grid>
                <Route path={`/home`} component={HomePage} />
                {/*<Route path{`/twitch`} component={TwitchPage} />*/}
                {/*<Route path={`/destiny`} component={DestinyPage} />*/}
                <Redirect from={`/`} to={`/home`} />
            </Grid>
        </Router>
    </Provider>,
    document.getElementById('root')
);
