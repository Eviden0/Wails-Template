import {createApp} from 'vue'
import App from './App.vue'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入vue router
import router from '@/router/index'

// 引入pinia
import {createPinia} from 'pinia'
const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
