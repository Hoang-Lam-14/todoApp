<script setup>
import TodoFormInput from './TodoFormInput.vue';
import TodoItem from './TodoItem.vue';
import { useStore } from 'vuex';
import { ref } from 'vue'

const store = useStore();
const todos = ref([]);

fetch('http://192.168.5.131:9000')
    .then(response => response.json()
    .then(data => todos.value = data))

</script>

<template>
    <div class="todo_list_wrapper">
        <TodoFormInput />
        <TodoItem v-for="todo in todos" :id="todo.id" :content="todo.title" :isDone="todo.isDone" />
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
</style>