<script setup>
    import TodoItem from './TodoItem.vue';
</script>

<template>
    <div class="todo_list_wrapper">
        <TodoItem />
    </div>
</template>

<style scope>
    .todo_list_wrapper{
        background-color: #bbf1c8;
        min-height: 80vh;
        padding: 50px;
        display: flex;
        justify-content: center;
    }

    .todo_list_wrapper TodoItem{
        width: 60%;
    }
</style>