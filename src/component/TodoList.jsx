import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    const renderTodos = () => todos.map(todo => (
        <Todo key={todo.id} {...todo}/>
    ));
    return (
        <div>
            {renderTodos()}
        </div>
    );
  }
}
export default TodoList;
