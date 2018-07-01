import React, { Component } from 'react';
import { Button } from './Button.jsx';
import Input from './Input.jsx';
import List from './List.jsx';

import '../styles/Todo.css'

export default class Todo extends Component {
    constructor() {
        super()
        this.state = {
            newNote: '',
            button: "add",
            notes: []
        }
        this.newNote = this.newNote.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleAddClick() {
        if (this.state.newNote) {
            this.setState({
                newNote: '',
                notes: [...this.state.notes, this.state.newNote]
            })
        }else{
            alert("Cannot add blank note");
        }
    }
    newNote(note) {
        this.setState({
            newNote: note
        })
    }

    handleDeleteItem(itemPos) {
        console.log('sdf', itemPos);
        let allNotes = Array.from(this.state.notes);
        allNotes.splice(itemPos, 1);
        this.setState({
            notes: allNotes
        })
    }
    render() {
        return (
            <div className="todo-box">
                <Input type="text" placeholder="Enter ToDo.." newNote={this.newNote} value={this.state.newNote}></Input>
                <Button name={this.state.button} onClick={this.handleAddClick}></Button>
                <List value={this.state.notes} deleteTodo={(index) => this.handleDeleteItem(index)}></List>
            </div>
        )
    }
}
