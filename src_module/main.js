// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import http from './axios'
import App from './App'
import Home from './components/HelloFromVux'
import  { LoadingPlugin,AjaxPlugin,Scroller } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(http)
Vue.use(VueRouter)
Vue.use(Vuex);
Vue.component('scroller',Scroller);
const routes = [
  {
    path: '/',
    component: Home,
    children:[
      {
        path:'/hello1',
        component:require('./components/hello1.vue')
      },{
        path:'/hello2',
        component:require('./components/hello2.vue')
      },{
        path:'/hello3',
        component:require('./components/hello3.vue'),
        children:[
          {
            path:"/hello3child",
            component:require('./components/hello3child.vue')
          }
        ]
      },{
        path:'/hello4',
        component:require('./components/hello4.vue')
      },{
        path:'/hellochild',
        component:require('./components/hello.vue')
      },
    ],redirect:'/hello1'

  },{
    path:'*',redirect:'/hello1'
  }

]
const router = new VueRouter({
  routes,
});
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
function setRouter(rouList){
  rouList.forEach(function(v,i){
    history.setItem(v,i+1);
    history.setItem('count',i+1);
    historyCount = i+1;
  })
};
setRouter(['/hello1','/hello2','/hello3','/hello4','/hellochild'])

router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  store.commit('updateLoadingStatus', {isLoading: true})
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
});
router.afterEach(function (to) {
  setTimeout(()=>{
    store.commit('updateLoadingStatus', {isLoading: false})
  },500)
})

const store = new Vuex.Store({
  modules:{
    'vux':{
      state: {

      },
      mutations: {

      }
    }
  },
  state:{
    scrolltop:0,
    scrolltop2:0,
    scrolltop3:0,
    scrolltop4:0,
    tabberShow:true,
    ifShowbar:false,
    direction:'forward',
    headTit:'首页',
    isLoading: false
  },
  mutations:{
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    setscroll(state,scrolt){
      state.scrolltop = scrolt;
    },setscroll2(state,scrolt){
      state.scrolltop2 = scrolt;
    },setscroll3(state,scrolt){
      state.scrolltop3 = scrolt;
    },setscroll4(state,scrolt){
      state.scrolltop4 = scrolt;
    },
    changeshowBar(state,status){
      state.ifShowbar = status;
    },
    changeTaber(state,status){
      state.tabberShow = status;
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    },
    changetit(state,tit){
      state.headTit = tit
    }
  }
})
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
