import React, { Component } from 'react';
import Input from './form/Input';

class TodoSearch extends Component {
    render() {
        return (
            <div>
                {<pre>
                    {JSON.stringify(this.state, null, 4)}
                </pre>}
                <Input
                    name="searchText"
                    type="text"
                    state={this.state}
                    control={this.control}
                    validate={this.validate}
                    onChange={this.handleSearch}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={this.isChecked}
                        onChange={this.handleSearch}
                    />
                    Show completed todos
                </label>
            </div>
        );
    }
}
export default TodoSearch;
