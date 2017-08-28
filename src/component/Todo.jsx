import React, { Component } from 'react';

class Todo extends Component {
  render() {
        var {id, text} = this.props;
    return (
        <div>
	        {id}. {text}
        </div>
    );
  }
}

export default Todo;
