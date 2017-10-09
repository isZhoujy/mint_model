<template>
  <div style="height: 100%;" class="vux">
    <!--<view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">-->
    <div style="height: 100%;">
      <x-header :left-options="{showBack: ifShowbar,backText:''}" :title="headTit" v-if="headshow">
        <x-icon slot="left" v-if="!ifShowbar" @click="leftAction" type="ios-search" size="25" style="fill:#fff;position:relative;top:-2px;left:-3px;"></x-icon>
        <div slot="right" v-show="rightShow" @click="rightAction"><i>登录</i> | <i>注册</i></div>
      </x-header>
      <transition :name="direction">
        <keep-alive>
          <router-view class="child-view"></router-view>
        </keep-alive>
      </transition>
    </div>
    <tabbar v-show="tabberShow">
      <tabbar-item :selected="state=='hello1'" link="/hello1">
        <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
        <i slot="icon" class="icon-twitter"></i>
        <span slot="label">外卖</span>
      </tabbar-item>
      <tabbar-item :selected="state=='hello2'" link="/hello2">
        <i slot="icon" class="icon-adjust"></i>
        <span slot="label">搜索</span>
      </tabbar-item>
      <tabbar-item :selected="state=='hello3'" link="/hello3">
        <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
        <i slot="icon" class="icon-list-alt"></i>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item :selected="state=='hello4'" link="/hello4">
        <i slot="icon" class="icon-user"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <loading v-model="isLoading"></loading>
    <!--</view-box>-->
  </div>

</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell ,XHeader,Icon,Loading  } from 'vux'
  import { mapState } from 'vuex'
  export default {
    components: {
      Group,
      XHeader,
      Cell,
      Tabbar,
      TabbarItem,
      Icon,
      Loading
    },
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!',
        state:'hello1',
      }
    },
    mounted(){
      this.state = window.location.hash.substr(2);
     /* this.$http.get('https://www.vue-js.com/api/v1/topics').then(function(res){
//            console.log(res)
        })*/
    },
    computed:{
      ...mapState(['direction','headTit','tabberShow','ifShowbar','headshow']),
      ...mapState({
        isLoading: state => state.isLoading
      }),
      rightShow(){
          return this.state=='hello1'
      }
    },
    watch:{
      '$route':function(){
          this.state = window.location.hash.substr(2);
      }
    },
    methods:{
      leftAction(){
        console.log('left')
      },
      rightAction(){
          console.log('right')
      }
    }
  }
</script>

<style lang="less">
  .vux-demo {
    text-align: center;
    margin-bottom: 500px;
  }
  .weui-tabbar{
    position: fixed!important;
    transition: all 0.5s;
  }
  .logo {
    width: 100px;
    height: 100px
  }
  .child-view {
    position: absolute;
    width:100%;
    overflow: auto;
    /*padding-bottom:55px;*/
    /*padding-top:45px;*/
    top: 45px;
    bottom: 52px;
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
  .vux .vux-header{
    position: fixed!important;
    width:100%;
    z-index:100;
    background-color: #3190e8;
  }
  body,html{
    height:100%;
    width:100%;
    background-color: #f5f5f5;
  }
  .vux-header-right{
    i{
      font-style:normal;
      color: #ffffff;
      font-size:16px;
    }
  }
  .weui-bar__item_on .weui-tabbar__icon{
    i{
      color: #3190e8!important;
    }
  }
  .weui-bar__item_on .weui-tabbar__label span{
    color: #3190e8!important;
  }
  .vux-header .vux-header-left .left-arrow:before{
    border:1px solid #fff;
  }
  i{
    font-style: normal;
  }
</style>
