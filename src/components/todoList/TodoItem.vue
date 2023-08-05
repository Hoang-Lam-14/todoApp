<script setup>
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
    content: String,
    isDone: Boolean,
    id: Number,
    isWaiting: Boolean,
})

const emit = defineEmits(['deleteTodo', 'updateTodo'])

const checkDone = (id) => {
    fetch(`http://192.168.5.131:9000/${id}`, {
        method: "PUT",
    }).then(() => {
        emit('updateTodo')
    })
}

const removeTodo = (id) => {
    fetch(`http://192.168.5.131:9000/${id}`, {
        method: "DELETE",
    }).then(() => {
        emit('deleteTodo')
    })
    store.commit('deleteTodoItem', {id})
}
</script>

<template>
    <div class="todo_item_wrapper" :class="{ isWaiting: isWaiting }">
        <input id="check" type="checkbox" :value="isDone" @click="checkDone(id)">
        <div class="todo_item_content">{{ content }}</div>
        <button @click="removeTodo(id)">Xóa</button>
    </div>
</template>

<style scoped>
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

.isWaiting{
    opacity: 0.5;
}
</style>