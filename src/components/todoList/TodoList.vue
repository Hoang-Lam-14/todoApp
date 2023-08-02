<script setup>
import TodoItem from './TodoItem.vue';

import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([]);
const addTodo = () => {
    if (newTodo.value === '') return;
    todos.value.push({ content: newTodo.value, isDone: false });
    newTodo.value = '';
    console.log("object", todos.value);
};
</script>

<template>
    <div class="todo_list_wrapper">

        <form @submit.prevent="addTodo">
            <input class="todo_input" type="text" placeholder="Nhập..." v-model="newTodo">
            <button class="todo_button">Thêm</button>
        </form>
        <TodoItem v-for="todo in todos" :content="todo.content" :isDone="todo.isDone"/>
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

.todo_list_wrapper TodoItem {
    width: 60%;
}

.todo_list_wrapper form {
    width: 60%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}

.todo_list_wrapper .todo_input {
    width: 50%;
    font-size: 1.2rem;
}

.todo_list_wrapper .todo_button {
    font-size: 1.2rem;
}
</style>