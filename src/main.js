import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Fila from './components/Fila.vue'

const app = createApp(App)
app.component('formulario', Fila)


app.mount('#app')