/**
 * Created by zjy on 2017/8/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axioss from 'axios'
Vue.use(Vuex);
const axios = axioss.create({
  baseURL:"http://cangdu.org:8001",
})
const store = new Vuex.Store({
  modules:{
    'index':{
      state: {
        headList:[],
        mainList:[],
        fuwuDefaultIndex:0,
        fuwuDefaultTit:[],
        fuwuDefaultList:[],
      },
      mutations: {
        GETHEAD(state,data){
          state.headList = data
        },
        GETMAINLIST(state,data){
          state.mainList = state.mainList.concat(data)
        },
        GETFUWUINDEXNUM(state,index){
          state.fuwuDefaultIndex = index;
        }
      },
      actions:{
        getHead({commit}){
          axios.get('/v2/index_entry?geohash=30.90392,121.82937&group_type=1&flags[]=F').then(function({data}){
            commit('GETHEAD',data)
          })
        },
        getMainlist({state,commit},obj){
          axios.get('/shopping/restaurants?latitude=30.90392&longitude=121.82937&offset='+obj.num+'&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=').then(function({data}){
            commit('GETMAINLIST',data);
            obj.fn();
          })
        },
        getFuwuDefaultPage({state,commit}){
          axios.get('/v3/profile/explain').then(function({data}){
            for(var i in data){
              if(i.substr(-7)=='Caption'){
                  state.fuwuDefaultTit.push(data[i])
              }else if(i.substr(-7)=='Content'){
               state.fuwuDefaultList.push(data[i])
              }
            }
          })
        }
      }
    }
  },
  state:{
    tabberShow:true,
    headshow:true,
    ifShowbar:false,
    direction:'forward',
    headTit:'首页',
    isLoading: false,
  },
  mutations:{
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    changeshowBar(state,status){
      state.ifShowbar = status;//返回按钮
    },
    changeTaber(state,status){
      state.tabberShow = status;
    },
    changeHead(state,status){
      state.headshow = status;
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    },
    changetit(state,tit){
      state.headTit = tit
    }
  },
  actions:{

  }
});
export default store
