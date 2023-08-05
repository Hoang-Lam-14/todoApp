<script setup>
import TodoFormInput from './TodoFormInput.vue';
import TodoItem from './TodoItem.vue';
import { ref } from 'vue';
import { useStore } from 'vuex'

const todos = ref([])
const waitingTodos = ref([])
const store = useStore()

const getTodo = () => {
    fetch('http://192.168.5.131:9000')
        .then(response => response.json()
            .then(data => {
                store.commit('getAllTodos', data)
                store.commit('deleteWaitingTodoItem')
                todos.value = store.getters.todoItems;
                waitingTodos.value = store.getters.waitingTodoItems;
            }))
}

getTodo();
</script>

<template>
    <div class="todo_list_wrapper">
        <TodoFormInput @loading="loading" @addTodo="getTodo"/>
        <TodoItem v-for="todo in todos" @deleteTodo="getTodo" @update="getTodo" :id="todo.id" :content="todo.title" :isWaiting="false"/>
        <TodoItem v-for="todo in waitingTodos" @deleteTodo="getTodo" @update="getTodo" :id="todo.id" :content="todo.title" :isWaiting="true"/>
    </div>
</template>

<style scope>
.todo_list_wrapper {
    background-color: #bbf1c8;
    min-height: 80vh;
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.loadingItem {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1180px;
    height: 600px;
    z-index: 10;
}
</style>