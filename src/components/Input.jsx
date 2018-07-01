import React, {Component} from 'react';
import '../styles/Input.css';

class Input extends Component{

    constructor(props){
        super(props);
    }

    updateParentState(e){
        this.props.newNote(e.target.value)
    }

    render(){
        return(
            <div className="input-box">
                <input placeholder={this.props.placeholder} type={this.props.type || 'text'} value={this.props.value} onChange={this.updateParentState.bind(this)}/>
            </div>
        )
    }
}

export default Input;


