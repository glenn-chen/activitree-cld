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
        if (this.props.textSize === "big")
            textVersion += " big"
        
        if (this.props.hasButton == "false")
            buttonVersion = "none";
        
        return (
            <div class={containerVersion}>
                <br />
                <h3 class={textVersion}>
                    {this.props.header}
                </h3>
                <h4 class={textVersion}>{this.props.description}</h4>
                <div class="center">
                    <a class="button-link" href={this.props.link}>
                    <button class={buttonVersion}>
                        {this.props.buttonText}
                    </button> </a>
                </div>
            </div>
        );
    };
}