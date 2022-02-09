import React, {Component} from 'react';
import './shortInfoBlock.css';

export default class ShortInfoBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let containerVersion = "container-" + this.props.version;

        // Default text/buttons are blue
        let h1Version = "h1-blue";
        let h2Version = "h2-blue";
        let buttonVersion = "button-blue";

        // White text/buttons on blue background
        if (this.props.version == "blue") {
            h1Version = "h1-white";
            h2Version = "h2-white";
            buttonVersion = "button-white";
        }
        
        return (
            <div class={containerVersion}>
                <br />
                <h1 class={h1Version}>
                    {this.props.header}
                </h1>
                <h2 class={h2Version}>{this.props.description}</h2>
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