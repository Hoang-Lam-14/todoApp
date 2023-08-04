<script setup>
import { ref } from 'vue';

const content = ref('');
const isLoading = ref(false);
const emit = defineEmits(['addTodo'])

const addTodo = () => {
    if (content.value === '') return;
    else {
        isLoading.value = true;
        fetch('http://192.168.5.131:9000', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: content.value })
        })
        emit('addTodo')
        isLoading.value = false;
    }   
}
</script>

<template>
    <form v-if="isLoading === false" @submit.prevent="addTodo">
        <input class="todo_input" type="text" placeholder="Nhập..." v-model="content">
        <button class="todo_button">Thêm</button>
    </form>
    <p v-else class="loading">Loading...</p>
</template>

<style scoped>
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
</style>