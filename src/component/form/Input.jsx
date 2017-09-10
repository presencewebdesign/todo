import React from 'react';
import { string, func } from 'prop-types';

const Input = props => (
    <div>
        <input
            name={props.name}
            value={props.state.values[props.name]}
            type={props.type}
            onChange={props.control ? props.control : props.handleSearch}
            onKeyUp={props.validate}
            className={props.state.errors[props.name] ? 'invalid' : ''}
            placeholder={props.placeholder}
        />
        {props.state.errors[props.name] ? <p style={{ color: 'red' }}>{props.state.errorMessages[props.name]}</p> : null}
    </div>
);
Input.propTypes = {
    name: string.isRequired,
    type: string.isRequired,
    validate: func.isRequired,
};

export default Input;
