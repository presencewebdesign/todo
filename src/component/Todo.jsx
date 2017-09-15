import React from 'react';
import moment from 'moment';

const Todo = (props) => {
    const renderDate = () => {
        let message = 'Created ';
        let timestamp = props.createdAt;

        if (props.completed) {
            message = 'Completed ';
            timestamp = props.createdAt;
        }
        return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
        <label className="todoList">
            <input
                type="checkbox"
                defaultChecked={props.completed}
                name="checked"
                onClick={() => {props.onToggle(props.id)}}
            />
            {props.text}
            <p className='date'>{renderDate()}</p>
        </label>


    );
};

export default Todo;
