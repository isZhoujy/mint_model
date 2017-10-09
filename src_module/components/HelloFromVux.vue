<template>
  <div style="height: 100%;">
    <!--<view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">-->
    <div style="height: 100%;">
      <x-header :left-options="{showBack: ifShowbar}" :title="headTit"></x-header>
      <transition :name="direction">
        <keep-alive>
          <router-view class="child-view"></router-view>
        </keep-alive>
      </transition>
    </div>
    <tabbar v-show="tabberShow">
      <tabbar-item :selected="state=='hello1'" link="/hello1">
        <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
        <i slot="icon" class="icon-bookmark"></i>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item :selected="state=='hello2'" show-dot link="/hello2">
        <img slot="icon" src="../assets/vux_logo.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item :selected="state=='hello3'" link="/hello3">
        <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item :selected="state=='hello4'" badge="2" link="/hello4">
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">News</span>
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
      ...mapState(['direction','headTit','tabberShow','ifShowbar']),
      ...mapState({
        isLoading: state => state.isLoading
      })
    },
    watch:{
      '$route':function(){
          this.state = window.location.hash.substr(2);
      }
    },
  }
</script>

<style>
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
    bottom: 55px;
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
  .vux-header{
    position: fixed!important;
    width:100%;
    z-index:100;
  }
  body,html{
    height:100%;
    width:100%;
  }
</style>
