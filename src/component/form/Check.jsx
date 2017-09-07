import React from 'react';
import { shape, objectOf, bool } from 'prop-types';

const Check = props => (
    <div>
        <label htmlFor={props.name}>
            <input
                type={props.type}
                checked={this.isChecked}
                onChange={this.control}
            />
            {props.label ? props.label : props.name}
        </label>
    </div>
);

Check.propTypes = {
    type: bool.isRequired,
    state: shape({
        values: objectOf(bool),
    }).isRequired,
};

export default Check;