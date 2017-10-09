/**
 * Created by zjy on 2017/9/15.
 */
import Vue from 'vue'
import App from './app'
import MintUI from 'mint-ui'
import store from './store'
import '../static/reset.css'
import '../static/iconfont/iconfont.css'
import '../static/animate.css'
import 'mint-ui/lib/style.css'
import router from './router'
import { InfiniteScroll } from 'mint-ui';
import Loading from './components/loading'
// import store from './store/store'
// import axios from 'axios'
Vue.use(InfiniteScroll);
Vue.directive('goback', {
  bind: function (el) {
    el.addEventListener('click',function(){
      window.history.go(-1)
    },false)
  },
});
Vue.use(Loading);
Vue.use(MintUI);

const history = window.sessionStorage
history.clear();
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
function setRouter(rouList){
  rouList.forEach(function(v,i){
    history.setItem(v,i+1);
    history.setItem('count',i+1);
    historyCount = i+1;
  })
};
setRouter(['/index','/book','/movie','/me','/indexsub'])

router.beforeEach(function (to, from, next) {
    store.commit('GOBACKACTION',to.meta.gobackShow);
    store.commit('TABBERSHOW',to.meta.tabberShow);
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
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
  setTimeout(function(){
    var scrollDom = document.querySelector('.'+to.name);
    if(scrollDom){
      scrollDom.scrollTop = to.meta.scrollNum
    }
  })
    next()
});

router.afterEach((to, from)=>{
  var scrollDom = document.querySelector('.view');
  if(scrollDom){
    from.meta.scrollNum = scrollDom.scrollTop;
  }
});
new Vue({
  render:(h)=>h(App),
  router,
  store,
}).$mount('#app-box');
