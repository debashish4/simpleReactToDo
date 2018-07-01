import React, {Component} from 'react';
import Todo from './components/Todo.jsx';
import './styles/common.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            "test": "working"
        }
    }
    render(){
        return(
            <div>
                <Todo/>
            </div>
        )
    }
}

export default App