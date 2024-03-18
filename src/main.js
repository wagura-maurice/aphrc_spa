// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Assuming you're using Vuex
import router from './router'; // Assuming you're using Vue Router
import './assets/styles/tailwind.css';

const app = createApp(App);

// Other plugins like Vuex store, Vue Router can be used here
app.use(store);
app.use(router);

app.mount('#app');

