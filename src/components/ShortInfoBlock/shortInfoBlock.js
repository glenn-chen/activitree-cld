import React, {Component} from 'react';
import './shortInfoBlock.css';

export default class ShortInfoBlock extends Component {

    render() {
        let containerVersion = "container-" + this.props.version;

        // Default text/buttons are blue
        let textVersion = "blue";
        let buttonVersion = "blue";

        // White text/buttons on blue background
        if (this.props.version === "blue") {
            textVersion = "white";
            buttonVersion = "white";
        }
        
        return (
            <div class={containerVersion}>
                <br />
                <h1 class={textVersion}>
                    {this.props.header}
                </h1>
                <h2 class={textVersion}>{this.props.description}</h2>
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