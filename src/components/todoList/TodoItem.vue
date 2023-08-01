<script setup>

</script>

<template>
    <div class="todo_item_wrapper">
        <input type="checkbox">
        <div class="todo_item_content">Hello, World</div>
        <button>Xóa</button>
    </div>
</template>

<style>
    .todo_item_wrapper{
        display: flex;
        height: 2rem;
        width: 650px;
        justify-content: space-around;
        background-color: antiquewhite;
        border: 1px solid #000;
        border-radius: 10px;
    }

    .todo_item_wrapper .todo_item_content{
        width: 70%;
        font-size: 1.2rem;
    }

    .todo_item_wrapper input{
        width: 10%;
    }

    .todo_item_wrapper button{
        width: 20%;
    }

</style>