import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import Auth from '@/components/auth/Auth'
import Industry from '@/components/industry/Industry'
import Education from '@/components/education/Education'
import Marketplace from '@/components/market/Marketplace'

import { userKey } from '@/global'
Vue.use(VueRouter)

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}, {
    name: 'industry',
    path: '/industry',
    component: Industry,
    meta: { requiresAdminEnterprise: true }
}, {
    name: 'education',
    path: '/education',
    component: Education,
    meta: { requiresManager: true }
}, {
    name: 'marketplace',
    path: '/marketplace',
    component: Marketplace
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.adminMaster ? next() : next({ path: '/' })
    } else if (to.matched.some(record => record.meta.requiresAdminEnterprise)) {
        const user = JSON.parse(json)
        user && (user.adminMaster || user.adminEnterprise) ? next() : next({ path: '/' })
    } else if (to.matched.some(record => record.meta.requiresManager)) {
        const user = JSON.parse(json)
        user && (user.adminMaster || user.manager) ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router