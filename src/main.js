// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Teste from './components/test.vue'
// import Home from './components/home.vue'
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
    routes // short for routes: routes
})

new Vue({
    router,
    render: createElement => createElement(App)
}).$mount('#app')
