import React, {Component} from 'react';
import './shortInfoBlock.css';

export default class ShortInfoBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let containerVersion = "container-" + this.props.version;
        let h1Version = "h1-blue";
        let buttonVersion = "button-blue";
        if (this.props.version == "blue") {
            h1Version = "h1-white";
            buttonVersion = "button-white";
        }
        
        return (
            <div class={containerVersion}>
                <br />
                <h1 class={h1Version}>
                    {this.props.header}
                </h1>
                <div class="center">
                    <a class="button-link" href={this.props.link}>
                    <button class={buttonVersion}>
                        {this.props.buttonText}
                    </button> </a>
                </div>
                <br />
            </div>
        );
    };
}