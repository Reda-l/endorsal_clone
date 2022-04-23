import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue"
import Testimonials from "../views/Testimonials.vue"
import SignIn from "../views/Auth/SignIn.vue"
import Home from "../views/Home.vue"
import Integrations from '../views/Integrations.vue'
import Register from '../views/Auth/Register.vue'
import Pagenotfound from '../views/Auth/Pagenotfound.vue'
import ProfileSettings from '../views/User/ProfileSettings.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/testimonials',
                name: 'Testimonials',
                component: Testimonials
            },
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/integrations',
                name: 'Integrations',
                component: Integrations
            },
            {
                path: '/profile',
                name: 'ProfileSettings',
                component: ProfileSettings
            }

        ]

    },
    {
        path: '/sign',
        name: 'Sign',
        component: SignIn
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/:catchAll(.*)',
        component : Pagenotfound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})

export default router