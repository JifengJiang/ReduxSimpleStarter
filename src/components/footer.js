import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-sentence">
                    <span>{this.props.sentence}</span>
                    <span>{this.props.tell}</span>
                </div>
                <div className="">
                    <p>{this.props.standard}</p>
                </div>
            </div>
        )
    }
}
