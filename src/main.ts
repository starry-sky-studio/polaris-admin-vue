import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/styles/main.scss'
import 'nprogress/nprogress.css'
import App from './App.vue'
import router from '@/router'
import i18n from '@/i18n'
import 'vue-global-api'



const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
