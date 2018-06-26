
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

import App from './components/App.vue';

const app = new Vue({
    el: '#app',
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
