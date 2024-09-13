import {createApp} from 'vue'
//import './style.css'
import App from './App.vue'
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//router
import router from '@/router/router.ts'

//CSS and Vuetify
import {aliases, mdi} from 'vuetify/iconsets/mdi'

// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css";
import {createPinia} from "pinia"; // Ensure you are using css-loader

//install vuetify
const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        },
    },
    components,
    directives,
})

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(vuetify);

//CREATE PINIA
const pinia = createPinia()
vue.use(pinia)


// Run!
router
    .isReady()
    .then(() => vue.mount('#app'))
    .catch(e => console.error(e));
