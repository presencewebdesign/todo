import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [
            {
                id: 1,
                text: 'Feed the cat',
            }, {
                id: 2,
                text: 'Clean the dishes',
            },
            {
                id: 3,
                text: 'Make dinner',
            }
        ],
    };
  }
  render() {
    let { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default TodoApp;
