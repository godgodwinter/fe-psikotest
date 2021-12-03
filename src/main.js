import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { getCurrentInstance } from 'vue';
// import Axios from 'axios'



import DocsExample from '@/components/DocsExample'

const app = createApp(App)

app.config.globalProperties.appName = 'appName';
app.config.globalProperties.baseUrl = 'https://psikotest.baemon.web.id/api/';
app.use(VueSweetalert2)
app.use(router)
app.use(store)
app.use(CoreuiVue)
app.use(getCurrentInstance)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)

app.mount('#app')

// app.config.globalProperties.$http = Axios;
// App.config.globalProperties.$baseurl = 'http://localhost:8000/api/';
