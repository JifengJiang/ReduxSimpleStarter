import React, { Component } from 'react';

export default class FormData extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="row form-container">
                <div className="col-xs-4 plan-title">
                    {this.props.title}
                </div>
                <div className="col-xs-4 plan-content">
                    {this.props.plan1}{this.props.plan1Period}
                </div>
                <div className="col-xs-4 plan-content">
                    {this.props.plan2}{this.props.plan1Period}
                </div>
            </div>
        )
    }
}
