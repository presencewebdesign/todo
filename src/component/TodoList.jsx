import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const { todos } = props;
    const renderTodos = () => todos.map(todo => (
        <Todo key={todo.id} {...todo} />
    ));
    return (
        <div>
            {renderTodos()}
        </div>
    );
};

export default TodoList;
