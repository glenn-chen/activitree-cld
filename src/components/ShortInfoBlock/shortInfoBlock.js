import React, {Component} from 'react';
import './shortInfoBlock.css';

export default class ShortInfoBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={this.props.version == "blue" ? "container-blue" : "container-white"}>
                <br />
                <h1 class={this.props.version == "blue" ? "h1-white" : "h1-blue"}>
                    {this.props.header}
                </h1>
                <div class="center">
                    <a class="button-link" href={this.props.link}>
                    <button class={this.props.version == "blue" ? "button-white" : "button-blue"}>
                        JOIN THE DISCORD!
                    </button> </a>
                </div>
                <br />
            </div>
        );
    };
}