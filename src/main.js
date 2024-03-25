import './assets/main.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
const options = {
    // You can set your default options here
};

app.use(pinia)
app.use(router)
app.use(Toast, options);
app.mount('#app')
