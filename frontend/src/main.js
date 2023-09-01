import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import css from '@/assets/css/style.css'

createApp(App).use(store).use(router).use(bootstrap).use(css).mount('#app')
