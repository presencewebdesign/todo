import React, { Component } from 'react';
import Input from './form/Input';

class AddTodo extends Component {
    render() {
        return (
            <div>
                {<pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>}
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="addtodo"
                        type="text"
                        state={this.state}
                        control={this.control}
                        validate={this.validate}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
