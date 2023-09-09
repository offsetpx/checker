import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { md2 } from 'vuetify/blueprints'

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md2
})
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
