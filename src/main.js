import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from 'pinia';
import router from '@/router/index.js';
import 'vant/es/notify/style';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
