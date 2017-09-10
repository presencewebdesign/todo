import React from 'react';
import { string } from 'prop-types';

const Check = props => (
    <div>
        <label htmlFor={props.name}>
            <input
                name={props.name}
                type={props.type}
                value={props.state.values[props.name]}
                onChange={props.handleSearch}
                checked={props.state.values.isComplete}
            />
            {props.label ? props.label : props.name}
        </label>
    </div>
);

Check.propTypes = {
    name: string.isRequired,
    type: string.isRequired,
};

export default Check;