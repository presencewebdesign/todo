import React, { Component } from 'react';
import validator from 'validator';
import uuid from 'node-uuid';
import moment from 'moment';

import { Button, Row, Column } from 'react-foundation';
import TodoList from './TodoList';
import Input from './form/Input';
import Check from './form/Check';
import TodoApi from './api/TodoApi';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                addtodo: '',
                searchText: '',
                isComplete: false,
            },
            errors: {
                addtodo: false,
                searchText: false,
            },
            errorMessages: {
                addtodo: 'Please enter a value',
                searchText: 'Please enter a value',
            },
            todos: TodoApi.getTodos(),
        };
        this.control = this.control.bind(this);
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidUpdate() {
        TodoApi.setTodos(this.state.todos);
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
                    [name]: validator.isEmpty(this.state.values.addtodo), // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'searchText':
            this.setState({
                errors: {
                    ...this.state.errors, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: validator.isEmpty(this.state.values.searchText), // use [] to use a dynamic (variable) key
                },
            });
            break;
        default: break;
        }
    }
    handleToggle(id) {
        const updateTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos: updateTodos });
    }
    handleSubmit(e) {
        e.preventDefault();
        const todoText = this.state.values.addtodo;
        if (todoText.length > 0 && this.state.errors.addtodo === false) {
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: uuid(),
                        text: todoText,
                        completed: false,
                        createdAt: moment().unix(),
                        completedAt: undefined,
                    },
                ],
            });
        }
    }
    handleSearch(e) {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
        case 'searchText':
            this.setState({
                values: {
                    ...this.state.values, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: value, // use [] to use a dynamic (variable) key
                },
            });
            break;
        case 'isComplete':
            this.setState({
                values: {
                    ...this.state.values, // this takes all thats inside of this.state.values and puts it here - below you add the new data.
                    [name]: value, // use [] to use a dynamic (variable) key
                    isComplete: !this.state.values.isComplete,
                },
            });
            break;
        default: break;
        }
        // const searchText = this.state.values.searchText.toLowerCase();
        // const isComplete = this.state.values.isComplete;
    }
    render() {

        let todos = this.state.todos;
        let isComplete = this.state.values.isComplete;
        let searchText = this.state.values.searchText;

        const filteredTodos = TodoApi.filterTodos(todos, isComplete, searchText);
        return (
            <div>
            {/* {<pre>
                {JSON.stringify(this.state, null, 4)}
              </pre>} */}

                <div className="grid-center-example">
                    <div className="container">
                        <h1 className="page-title">Todo App</h1>
                        <Row className="display">
                            <Column small={11} medium={6} large={5}>
                                <Input
                                    name="searchText"
                                    type="text"
                                    state={this.state}
                                    handleSearch={this.handleSearch}
                                    validate={this.validate}
                                    placeholder="Search Todos..."
                                />
                                <Check
                                    name="isComplete"
                                    type="checkbox"
                                    label="Show Completed"
                                    state={this.state}
                                    handleSearch={this.handleSearch}
                                    checked={this.state.values.isComplete}
                                />
                                <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                                <form onSubmit={this.handleSubmit}>
                                    <Input
                                        name="addtodo"
                                        type="text"
                                        state={this.state}
                                        control={this.control}
                                        validate={this.validate}
                                        placeholder="Add Todos"
                                    />
                                    <Button type="submit">Add Todo</Button>
                                </form>
                            </Column>
                        </Row>
                    </div>
                </div>

            {/*
            <TodoSearch
                onSearch={this.handleSearch}
            />
            <TodoList
                todos={filteredTodos}
                onToggle={this.handleToggle}
            />
            <AddTodo
                onAddTodo={this.handleAddTodo}
            /> */}

          </div>
        );
    }
}

export default TodoApp;
