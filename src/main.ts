import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/styles/main.scss'
import 'nprogress/nprogress.css'
import App from './App.vue'
import router from '@/router'
const pinia = createPinia()
const app = createApp(App)
console.log(router)
app.use(router)
app.use(pinia)
app.mount('#app')
