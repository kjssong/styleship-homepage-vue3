import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from "./store";
import { createHead } from '@vueuse/head'
import setMeta from './modules/tools/setMeta'

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.config.globalProperties.setMeta = setMeta;
app
    .use(router)
    .use(store)
    .use(createHead())
    .mount('#app')