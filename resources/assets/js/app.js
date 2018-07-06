
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'es'})

import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

import App from './components/App.vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import VueAWN from "vue-awesome-notifications";

Vue.use(VueAWN)

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router,
    template: '<App></App>',
    data() {
        return {
            dato1: 'Dato',
            dato2: 'Dato'
        }
    },

    components: {
        App
    }
});
