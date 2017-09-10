import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const { todos } = props;
    const renderTodos = () => todos.map(todo => (
        <Todo
            key={todo.id}
            {...todo}
            onToggle={props.onToggle}
        />
    ));
    return (
        <div>
            {renderTodos()}
        </div>
    );
};

export default TodoList;
