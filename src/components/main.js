import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';

import Header from './header';
import FormData from './form-data';
import Banner from './banner';
import Footer from './footer';
import {ENTRY_ID_PLANS} from "../environment/config";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchData(ENTRY_ID_PLANS);
    }

    componentWillReceiveProps(nextProps) {
        nextProps.fetchData(ENTRY_ID_PLANS)
            .then(console.log(this.props));
    }

    render() {
        if (!this.props.fetch) {
            return <div>Loading...</div>
        }

        return (
            <div className="landing-container">
                {JSON.stringify(this.props.site)}
            </div>
        )
    }
}

function mapStateToProps({fetch}) {
    return {fetch}
}

export default connect(mapStateToProps, actions)(Main);
