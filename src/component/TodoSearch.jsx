import React, { Component } from 'react';
import Input from './form/Input';
import Check from './form/Check';

class TodoSearch extends Component {
    render() {
        return (
            <div>
                <Input
                    name="searchText"
                    type="text"
                    state={this.state}
                    handleSearch={this.handleSearch}
                    validate={this.validate}
                    placeholder="Search Todos..."
                />
                <Check
                    name="isComplete"
                    type="checkbox"
                    label="Show Completed"
                    state={this.state}
                    handleSearch={this.handleSearch}
                    checked={this.isComplete}
                />
            </div>
        );
    }
}
export default TodoSearch;
