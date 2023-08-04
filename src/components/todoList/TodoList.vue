<script setup>
import Loading from './Loading.vue';
import TodoFormInput from './TodoFormInput.vue';
import TodoItem from './TodoItem.vue';
import { ref } from 'vue';

const todos = ref([])
const isLoading = ref(true)

const getTodo = () => {
    isLoading.value = true
    fetch('http://192.168.5.131:9000')
        .then(response => response.json()
            .then(data => {
                todos.value = data
                isLoading.value = false
            }))
}

getTodo();

</script>

<template>
    <div class="todo_list_wrapper">
        <TodoFormInput @addTodo="getTodo" @loading="loading"/>
        <TodoItem v-for="todo in todos" @deleteTodo="getTodo" @update="getTodo" :id="todo.id" :content="todo.title" />
        <div v-if="isLoading" class="loadingItem">
            <Loading />
        </div>
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