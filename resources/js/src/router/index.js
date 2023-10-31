import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminRoutes from './admin'
import ClientRoutes from './client'
import CommonRoutes from "./commonRoutes";
import {canNavigate} from '@/plugins/acl/routeProtection'

import store from '../store/index.js';

Vue.use(VueRouter)

const routes = [
    AdminRoutes,
    ClientRoutes,
    ...CommonRoutes,
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
})

let notAuthLoginRoutes = ['home','auth-login','auth-register','error404','register-success-page','auth-forgot-password','auth-reset-password','verify-account','send-email-verification']
let notAuthRoutes = ['error404','register-success-page','auth-reset-password']

const auth = function (to, from, next) {
    if (store.state.token == null) {
        return false;
    } else {
        if (user.id != null && user.id !== 'null' &&
            (user.id !== undefined && user.id !== 'undefined')) {
            return true;
        } else {
            return false
        }
    }
};
console.log('auth',store.state)
router.beforeEach((to, from, next) => {
    store.dispatch('setFullLoader',true)
    if (!notAuthLoginRoutes.includes(to.name) && !auth()) {
        next({name: 'auth-login'})
    }else {
        if(user != null && !notAuthRoutes.includes(to.name)){
            let pathArray = to.path.split('/')
            let navigationFunction = canNavigate

            if (!navigationFunction(to)) {
                return next({name: 'not-authorized'})
            }
            if (pathArray.includes(user.role)) {
                next()
            } else {
                pathArray[1] = user.role;
                next({path: pathArray.join('/')})
            }
        } else {
            next()
        }
    }
})

router.afterEach((to, from) => {
    store.dispatch('setFullLoader',false)
})

export default router
