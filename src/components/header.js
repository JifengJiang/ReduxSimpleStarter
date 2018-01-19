import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-top-container">
                    <a className="header-title">{this.props.title}</a>
                    <a className="header-business">{this.props.business}</a>
                    <a className="header-health">{this.props.health}</a>
                    <a className="header-language">{this.props.language}</a>
                </div>
                <div className="row header-bottom-container">
                    <img src={this.props.telusAvatar}/>
                    <a className="header-solutions">{this.props.solutions}</a>
                    <a className="header-careers">{this.props.careers}</a>
                </div>
            </div>
        )
    }
}
