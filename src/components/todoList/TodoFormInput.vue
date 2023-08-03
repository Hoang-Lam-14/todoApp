<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const content = ref('');
const addTodo = () => {
    if (content.value === '') return;
    else {
        store.commit('addTodoItem', {
            id: store.getters.todoItems.length + 1,
            content: content.value,
            isDone: false,
        })
        content.value = ''
    }
}

</script>

<template>
    <form @submit.prevent="addTodo">
        <input class="todo_input" type="text" placeholder="Nhập..." v-model="content">
        <button class="todo_button">Thêm</button>
    </form>
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
</style>