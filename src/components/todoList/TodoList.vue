<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([]);
const addTodo = () => {
    if (newTodo.value === '') return;
    todos.value.push({ content: newTodo.value, isDone: false });
    newTodo.value = '';
    console.log("object", todos.value);
};
const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo)
}

</script>

<template>
    <div class="todo_list_wrapper">
        <form @submit.prevent="addTodo">
            <input class="todo_input" type="text" placeholder="Nhập..." v-model="newTodo">
            <button class="todo_button">Thêm</button>
        </form>
        <div v-for="todo in todos" class="todo_item_wrapper" :class="{ isDone: todo.isDone }">
            <input id="check" type="checkbox" v-model="todo.isDone">
            <div class="todo_item_content">{{ todo.content }}</div>
            <button @click="removeTodo(todo)">Xóa</button>
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

#check {
    margin-right: 10px;
}

.todo_item_wrapper button {
    margin-left: 10px;
}

.todo_item_wrapper.isDone {
    background-color: dimgrey;
    opacity: 0.5;
}
</style>