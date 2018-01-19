import React, {Component} from 'react';

export default class Banner extends Component {
    render() {
        return (
            <div className="row banner-container">
                <div className="col-md-6 banner-image">
                    <img src={this.props.imageUrl}/>
                </div>
                <div className="col-md-5 banner-content">
                    <h1>{this.props.title}</h1>
                    <p> {this.props.content}</p>
                    <button>{this.props.button}</button>
                </div>
            </div>
        )
    }
}
