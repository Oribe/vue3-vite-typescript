import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routers'

import setupAntd from './setup/antd'

const app = createApp(App)

app.use(router)

setupAntd(app)

app.mount('#app')
