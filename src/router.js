import VueRouter from "vue-router"
import Vue from 'vue'


Vue.use(VueRouter)


const lazyload = (path) => (resolve) => require([path], resolve)


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    // saveScrollPosition: true,
    routes: [{
        name: 'test',
        path: '/test',
        component: lazyload('./views/test/test.vue')
    },{
        path: '*',
        redirect: '/test'
    },{
    	name: 'test',
    	path: '/',
    	component: lazyload('./views/test/test.vue')

    }]
})



export default router


/**
 * 
 * 
 */



