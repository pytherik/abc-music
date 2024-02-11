import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import './assets/main.css'
import Primevue from 'primevue/config';
//info componants
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'

//info directives
import Ripple from 'primevue/ripple'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Primevue)

app.directive('ripple', Ripple);
app.component('Avatar', Avatar);
app.component('Badge', Badge);
app.component('InputText', InputText)
app.component('Menubar', Menubar);

app.mount('#app')
