import $ from 'jquery';

const TodoApi = {
    setTodos (todos) {
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
    filterTodos(todos, isComplete, searchText) {
        var filteredTodos = todos;
        // Filter by isCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || isComplete;
        });

        // Filter by searchText

        // sort todos with non-completed first

        return filteredTodos;
    },
};
export default TodoApi;
