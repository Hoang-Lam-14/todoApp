<template>
    <div class="header_wrapper">
        <h1>To Do App</h1>

        <form>
            <input type="text" placeholder="Nhập...">
            <button>Thêm</button>
        </form>
    </div>
</template>

<script>

</script>

<style scoped>
.header_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20vh;
    background-color: #80bdab;
}

.header_wrapper h1 {
    font-size: 3rem;
    color: #000;
    margin-bottom: 50px;
}

.header_wrapper form{
    width: 60%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
}

.header_wrapper input{
    width: 50%;
    font-size: 1.2rem;
}

.header_wrapper button{
    font-size: 1.2rem;
}

</style>