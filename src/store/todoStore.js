import Vuex from 'vuex'

function updateLocalStorage(todoItems) {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

function updateWaitLocalStorage(todoItems) {
    localStorage.setItem("waitingTodoItems", JSON.stringify(todoItems));
}

export const todoStore = new Vuex.Store({
    state: {
        todoItems: JSON.parse(localStorage.getItem("todoItems")) || [],
        waitingTodoItems: JSON.parse(localStorage.getItem("waitingTodoItems")) || [],
    },
    getters: {
        todoItems: (state) => {
            return state.todoItems;
        },
        waitingTodoItems: (state) => {
            return state.waitingTodoItems;
        }
    },
    mutations: {
        getAllTodos: (state, payload) => {
            state.todoItems = payload
            updateLocalStorage(state.todoItems)
            updateWaitLocalStorage(state.waitingTodoItems)
        },
        addWaitingTodoItem: (state, payload) => {
            state.waitingTodoItems.push(payload);
            updateLocalStorage(state.todoItems)
            updateWaitLocalStorage(state.waitingTodoItems)
        },
        addTodoItem: (state, payload) => {
            state.todoItems.push(payload);
            updateLocalStorage(state.todoItems)
            updateWaitLocalStorage(state.waitingTodoItems)
        },
        checkTodoItemDone: (state, payload) => {
            const index = state.todoItems.findIndex((item) => item.id === payload.id);
            state.todoItems[index].isDone = state.todoItems[index].isDone ? false : true;
            updateLocalStorage(state.todoItems)
            updateWaitLocalStorage(state.waitingTodoItems)
        },
        deleteTodoItem: (state, payload) => {
            const index = state.todoItems.findIndex((item) => item.id === payload.id);
            if (index > -1) state.todoItems.splice(index, 1);
            updateLocalStorage(state.todoItems)
            updateWaitLocalStorage(state.waitingTodoItems)
        },
        deleteWaitingTodoItem: (state) => {
            state.waitingTodoItems.splice(0, 1)
            updateLocalStorage(state.todoItems)
            updateWaitLocalStorage(state.waitingTodoItems)
        },
    }
})