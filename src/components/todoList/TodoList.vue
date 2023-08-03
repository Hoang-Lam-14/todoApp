<script setup>
import TodoFormInput from './TodoFormInput.vue';
import TodoItem from './TodoItem.vue';
import { ref } from 'vue';

const todos = ref([])

fetch('http://192.168.5.131:9000')
    .then(response => response.json()
        .then(data => todos.value = data))

const getTodo = () => {
    fetch('http://192.168.5.131:9000')
        .then(response => response.json()
            .then(data => todos.value = data))
}

</script>

<template>
    <div class="todo_list_wrapper">
        <TodoFormInput @addTodo="getTodo"/>
        <TodoItem v-for="todo in todos" @deleteTodo="getTodo" @update="getTodo" :id="todo.id" :content="todo.title"/>
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

form {
    width: 60%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}

.todo_input {
    width: 50%;
    font-size: 1.2rem;
}

.todo_button {
    font-size: 1.2rem;
}

.loading {
    width: 60%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.todo_item_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 600px;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: white;
}

.todo_item_wrapper .todo_item_content {
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>