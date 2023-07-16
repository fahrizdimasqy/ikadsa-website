import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faWhatsapp)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
