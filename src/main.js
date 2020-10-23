import { createApp } from 'vue'
import App from './App.vue'
import Copilot from 'copilot2'
import 'copilot2/lib/theme-chalk/index.css';

createApp(App).use(Copilot).mount('#app')
// createApp(App).mount('#app')