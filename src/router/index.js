import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../components/Home";
import TemplateHome from "../components/templates/TemplateHome";

Vue.use(VueRouter)

const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/templates',
        name: 'Templates',
        component: TemplateHome
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router