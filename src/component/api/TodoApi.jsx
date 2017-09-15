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
        let filteredTodos = todos;
        // Filter by isCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || isComplete;
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            let text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // sort todos with non-completed first
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || isComplete;
        });

        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    },
};
export default TodoApi;
