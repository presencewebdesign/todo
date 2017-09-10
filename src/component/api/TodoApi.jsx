import $ from 'jquery';

const TodoApi = {
    setTodos (todos) {
        alert('hello');
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos() {
        const stringTodos = localStorage.getItem('todos');
        let todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {}
        // Final check data is valid
        return $.isArray(todos) ? todos : [];
    },
};
export default TodoApi;
