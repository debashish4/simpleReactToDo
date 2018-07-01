import React, { Component } from 'react';
import { Button } from './Button.jsx';
import '../styles/List.css';


class List extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    generateList(n) {
        return n.map((item, index) => {
            return <div className="clearfix" key={index}>
                <p className="todo-name" >{item}</p>
                <Button name="X" onClick={() => this.props.deleteTodo(index)} />
            </div>
        })
    }
    render() {
        return (
            <div className="list-box">
                {this.generateList(this.props.value)}
            </div>
        )
    }
}
export default List;