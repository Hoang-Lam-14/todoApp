import Vuex from 'vuex'

function updateLocalStorage(todoItems) {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

export const todoStore = new Vuex.Store({
    state: {
        todoItems: JSON.parse(localStorage.getItem("todoItems")) || [],
    },
    getters: {
        todoItems: (state) => {
            return state.todoItems;
        },
        done: (state) => {
            return state.todoItems.filter((item) => item.isDone).length;
        },
        notDone: (state) => {
            return state.todoItems.filter((item) => !item.isDone).length;
        },
        totaltodoItems: (state) => {
            return state.todoItems.length;
        },
    },
    mutations:{
        addTodoItem: (state, payload) => {
            state.todoItems.push(payload);
            updateLocalStorage(state.todoItems);
        },
        checkTodoItemDone: (state, payload) => {
            const index = state.todoItems.findIndex((item) => item.id === payload.id);
            state.todoItems[index].isDone = state.todoItems[index].isDone ? false : true;
            updateLocalStorage(state.todoItems);
        },
        deleteTodoItem: (state, payload) => {
            const index = state.todoItems.findIndex((item) => item.id === payload.id);
            if (index > -1) state.todoItems.splice(index, 1);
            updateLocalStorage(state.todoItems);
        },
    }
})