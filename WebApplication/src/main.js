import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "fontawesome-free/css/all.min.css"
import "./assets/css/_variables.css"
import "./assets/css/nav-side-menu.css"
import "./assets/css/layout.css"
import "./assets/css/common.css"
import store from "./store"
import { router } from './router'
import interceptorSetup from "./interceptors"

interceptorSetup();

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')