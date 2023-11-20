import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "font-awesome/css/font-awesome.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/index"

createApp(App).use(router).mount("#app")
