<script setup>
const props = defineProps({
    content: String,
    isDone: Boolean,
});
</script>

<template>
    <div class="todo_item_wrapper" :class="{ isDone: isDone }">
        <input id="check" type="checkbox" v-on:change="isDone" >
        <div class="todo_item_content">{{ content }}</div>
        <button>Xóa</button>
    </div>
</template>

<style>
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

button {
    margin-left: 10px;
}

.todo_item_wrapper.isDone {
    background-color: dimgrey;
}
</style>