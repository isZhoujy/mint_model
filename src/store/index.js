/**
 * Created by zjy on 2017/9/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

var store = new Vuex.Store({
  modules:{
    'rouSta':{
      state:{
        tabberShow:true,
        gobackShow:true,
        loadingShow:false,
        direction:'forward',
      },
      mutations:{
        GOBACKACTION(state,showstate){
          state.gobackShow = showstate;
        },
        TABBERSHOW(state,showstate){
          state.tabberShow = showstate;
        },
        LODINGSHOW(state,showstate){
          state.loadingShow = showstate;
        },
        updateDirection (state, payload) {
          state.direction = payload.direction
        },
      }
    }
  }
});
export default store;
