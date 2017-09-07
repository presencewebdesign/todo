import React, { Component } from 'react';
import TodoList from './TodoList';
import uuid from 'node-uuid';
import validator from 'validator';
import Input from './form/Input';
import Check from './form/Check';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            values: {
                addtodo: '',
                searchText: '',
            },
            errors: {
                addtodo: false,
                searchText: false,
            },
            errorMessages: {
                addtodo: 'Please enter a value',
                searchText: 'Please enter a value',
            },
            todos: [
                {
                    id: uuid(),
                    text: 'Feed the cat',
                }, {
                    id: uuid(),
                    text: 'Clean the dishes',
                },
                {
                    id: uuid(),
                    text: 'Make dinner',
                },
            ],
        };
        this.control = this.control.bind(this);
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    control(e) {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            values: {
                ...this.state.values, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                [name]: value, // use [] to use a dynamic (variable) key
            },
        });
    }
    validate(e) {
        // const value = e.target.value;
        const name = e.target.name;
        switch (name) {
        case 'addtodo':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.addtodo), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'searchText':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: !validator.isAlpha(this.state.values.searchText), // use [] to use a dynamic (variable) key
                },
            });
            break;
        default: break;
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const todoText = this.state.values.addtodo;
        if (todoText.length > 0 && this.state.errors.addtodo === false) {
            console.log(`value:${todoText}`);
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: uuid(),
                        text: todoText,
                    },
                ],
            });
        }
    }
    handleSearch(e) {
        this.setState({
            isChecked: !this.state.isChecked,
        });
        const searchText = this.state.values.searchText;
        const showCompleted = this.state.isChecked;
        this.props.onSearch(showCompleted, searchText);
    }
    render() {
        const { todos } = this.state;
        return (
            <div>
                {<pre>
                  {JSON.stringify(this.state, null, 4)}
                </pre>}
                <Input
                    name="searchText"
                    type="text"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                    onChange={this.handleSearch}
                />
                <label>
                    <Check
                        type="checkbox"
                        checked={this.isChecked}
                        onChange={this.handleSearch}
                    />
                    Show completed todos
                </label>
                <TodoList todos={todos} />
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="addtodo"
                        type="text"
                        state={this.state}
                        control={this.control}
                        validate={this.validate}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default TodoApp;
