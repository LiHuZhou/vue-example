import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// import Login from '@/components/login'
import showImg from '@/views/showimg'
import Two from '@/views/two'
import Three from '@/views/three'
import Four from '@/views/four'
import userInfo from '@/views/userinfo'
import orderInfo from '@/views/orderinfo'
Vue.use(Router);

// let Login = (resolve) => {
//     return import (`@/components/login`)
// };
let router = new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            auth: true
        },
        children: [{
            path: 'showImg',
            name: 'showImg',
            component: showImg,
            meta: {
                auth: true,
                title: '管理中心'
            },
            children: [{
                path: 'userInfo',
                name: 'userInfo',
                component: userInfo,
                meta: {
                    auth: true,
                    title: '用户信息'
                }
            }, {
                path: 'orderInfo',
                name: 'orderInfo',
                component: orderInfo,
                meta: {
                    auth: true,
                    title: '订单信息'
                }
            }]
        }, {
            path: 'two',
            name: 'two',
            component: Two,
            meta: {
                auth: true,
                title: '个人中心'
            }
        }, {
            path: 'three',
            name: 'three',
            component: Three,
            meta: {
                auth: true,
                title: '疑难解答'
            }
        }, {
            path: 'four',
            name: 'four',
            component: Four,
            meta: {
                auth: true,
                title: '用户指南'
            }
        }]
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import (`@/components/login`)
    }, {
        path: '*',
        redirect: '/',
        meta: {
            auth: true
        }
    }]
})

router.beforeEach((to, from, next) => {
    let vm = new Vue();
    console.log(vm.$local.fetch("userInfo"));
    if (to.meta.auth) {
        if (vm.$local.fetch("userInfo")) {
            if (vm.$local.fetch("userInfo").username == "admin" && vm.$local.fetch("userInfo").password == "admin") {
                next();
            } else {
                next({
                    'path': '/login'
                })
            }
        } else {
            next({
                'path': '/login'
            })
        }

    } else {
        next();
    }
})
export default router;