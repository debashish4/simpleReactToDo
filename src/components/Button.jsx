import React, {Component} from 'react';
import '../styles/Button.css'

class Button extends Component {
    render(){
        return(
            <div className="button-box">
                <button onClick={this.props.onClick}>{this.props.name || "Enter Name"}</button>
            </div>
        )
    }
}

export {Button};