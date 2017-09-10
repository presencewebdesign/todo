import React from 'react';

const Todo = props => (
    <div onClick={() => {
        props.onToggle(props.id)
    }}>
        <input
            type="checkbox"
            defaultChecked={props.completed}
        />
        {props.text}
    </div>
);

export default Todo;
