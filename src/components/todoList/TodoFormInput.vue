<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const content = ref('')
const emit = defineEmits(['addTodo'])
const store = useStore();

const addTodo = () => {
    if (content.value === '') return;
    else {
        const data = content.value
        content.value = ''

        store.commit('addWaitingTodoItem', {
            title: data,
        })

        fetch('http://192.168.5.131:9000', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: data })
        }).then(() => {
            emit('addTodo')
        })
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

.loading {
    width: 60%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    font-size: 1.2rem;
}
</style>