<template>
  <div id="app">
    <mt-header title="多个按钮" fixed>
     <mt-button slot="left" icon="back" v-goback v-if="gobackShow">返回</mt-button>
      <mt-button icon="more" slot="right" @click="jump"></mt-button>
    </mt-header>
    <transition :name="direction">
      <keep-alive>
      <router-view class="view"></router-view>
      </keep-alive>
    </transition>
    <loading v-if="loadingShow"></loading>
    <m-tabbar :value="select" v-if="tabberShow">
      <m-tabbar-item id='index' isRouter>
        <i class="iconfont icon-shouye" slot="icon-active" style="color: #26a2ff;"></i>
        <i class="iconfont icon-shouye" slot="icon-normal"></i>
       <!-- <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active">-->
        首页
      </m-tabbar-item>
      <m-tabbar-item id='book' isRouter>
        <i class="iconfont icon-shoucang" slot="icon-active" style="color: #26a2ff;"></i>
        <i class="iconfont icon-shoucang" slot="icon-normal"></i>
        图书
      </m-tabbar-item>
      <m-tabbar-item id='movie' isRouter>
        <i class="iconfont icon-guanzhu" slot="icon-active" style="color: #26a2ff;"></i>
        <i class="iconfont icon-guanzhu" slot="icon-normal"></i>
        电影
      </m-tabbar-item>
      <m-tabbar-item id='me' isRouter>
        <i class="iconfont icon-wode" slot="icon-active" style="color: #26a2ff;"></i>
        <i class="iconfont icon-wode" slot="icon-normal"></i>
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>
<style lang="less">
  #app{
    width:100%;
    height:100%;
  }
  a:-webkit-any-link{
    text-decoration: none;
  }
  .view{
    position: fixed;
    top:0;
    bottom:0;
    width:100%;
    padding-top:40px;
    padding-bottom:50px;
    overflow: auto;
    transition: all .4s cubic-bezier(.55,0,.1,1);
  }
  .forward-enter, .reverse-leave-active {
    opacity: 0;
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
  }
  .forward-leave-active, .reverse-enter {
    opacity: 0;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  img{
    width: 40px;
    height:40px;}
</style>
<script>
  import {mapState} from 'vuex'
  import mTabbar from './components/tabbar'
  import mTabbarItem from './components/tabbar-item'
    export default {
      data(){
          return {
            select:"index",
            selected:'我的'
          }
      },
      computed:{
        ...mapState({
          gobackShow:(state)=> state.rouSta.gobackShow,
          tabberShow:(state)=> state.rouSta.tabberShow,
          loadingShow:(state)=> state.rouSta.loadingShow,
          direction:(state)=> state.rouSta.direction,
        })
      },
      mounted(){
      },
      components:{
        mTabbar,
        mTabbarItem,
      },
        methods:{
          jump(){
              this.$router.push('/index')
          },
        }
    }
</script>
