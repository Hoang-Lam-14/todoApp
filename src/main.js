import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { todoStore } from "./store/todoStore";

createApp(App).use(todoStore).mount('#app')
