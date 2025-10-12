// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

// Vue Router
import router from './router'

const app = createApp(App)

app.use(router)

registerPlugins(app)

app.mount('#app')
