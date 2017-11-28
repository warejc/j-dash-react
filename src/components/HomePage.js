import React, { Component, PropTypes } from 'react';
import { fetchDestinyData, setConfig } from '../actions/index';
import { connect } from 'react-redux';
//import { Row } from 'react-bootstrap';

class HomePage extends Component {
    constructor(initialProps) {
        super(initialProps);
    }

    componentWillMount() {
        const config = this.props.route.config;
        this.props.setConfig(config);
        const destinyApiKey = config && config.get && config.get('DESTINY_API_KEY');

        this.props.fetchDestinyData(destinyApiKey);
    }

    render() {
        const { config } = this.props;
        const destinyApiKey = config && config.get && config.get('DESTINY_API_KEY');
        return (
            <div>
                <h1>Hello World!</h1>
                Don't tell anyone, but my API KEY is: {destinyApiKey}
            </div>
        );
    }
}

HomePage.propTypes = {
    config: PropTypes.shape({
        DESTINY_API_KEY: PropTypes.string.required
    }),
    destinyData: PropTypes.object,
    fetchDestinyData: PropTypes.func,
    setConfig: PropTypes.func
}

function mapStateToProps(state) {
    return {
        config: state.home.get('config'),
        destinyData: state.home.get('data')
    };
}


export default connect (mapStateToProps, { fetchDestinyData, setConfig })(HomePage);


