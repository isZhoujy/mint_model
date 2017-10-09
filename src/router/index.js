/**
 * Created by zjy on 2017/9/15.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path:'*',name:'*',redirect:'/index'},
    {
      path:'/index',name:"index",component:(resolve)=>{
        require(['../components/index.vue'],resolve)
      },meta:{gobackShow:false,tabberShow:true,scrollNum:0},
     /* children:[
        {path:'/indexsub',name:'indexsub',component:(resolve)=>{
          require(['../components/indexsub.vue'],resolve)
        },meta:{gobackShow:true,tabberShow:false,scrollNum:0}}
      ]*/
    },
    {path:'/indexsub',name:"indexsub",component:(resolve)=>{
      require(['../components/indexsub.vue'],resolve)
    },meta:{gobackShow:true,tabberShow:false,scrollNum:0}},
    {path:'/book',name:"book",component:(resolve)=>{
      require(['../components/book.vue'],resolve)
    },meta:{gobackShow:false,tabberShow:true,scrollNum:0}},
    {path:'/movie',name:"movie",component:(resolve)=>{
      require(['../components/movie.vue'],resolve)
    },meta:{gobackShow:false,tabberShow:true,scrollNum:0}},
    {path:'/me',name:"me",component:(resolve)=>{
      require(['../components/me.vue'],resolve)
    },meta:{gobackShow:false,tabberShow:true,scrollNum:0}},
  ]
});
export default router;
