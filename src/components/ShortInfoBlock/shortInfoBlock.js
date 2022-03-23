import React, {Component} from 'react';
import './shortInfoBlock.css';

export default class ShortInfoBlock extends Component {

    render() {
        let containerVersion = "container-" + this.props.version;

        // Default text/buttons are blue
        let textVersion = "blue";
        let buttonVersion = "blue";
        let divVersion = "center";

        // White text/buttons on blue background
        if (this.props.version === "blue") {
            textVersion = "white";
            buttonVersion = "white";
        }
        if (this.props.textSize === "big")
            textVersion += " big"
        
        if (this.props.hasButton == "false"){
            divVersion = "none";
            buttonVersion = "none";
        }
        
        return (
            <div class={containerVersion}>
                <br />
                <h3 class={textVersion}>
                    {this.props.header}
                </h3>
                <h4 class={textVersion}>{this.props.description}</h4>
                <div class={divVersion}>
                    <a class="button-link" href={this.props.link} target="_blank">
                    <button class={buttonVersion}>
                        {this.props.buttonText}
                    </button> </a>
                </div>
            </div>
        );
    };
}