import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidMenu, MdCloseRound } from "oh-vue-icons/icons";

addIcons(HiSolidMenu, MdCloseRound);

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.mount('#app')