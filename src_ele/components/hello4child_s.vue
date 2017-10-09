<template>
  <div>
    <section class="head">
        <div class="left">
          <p><i class="icon-user-md"></i></p>
          <p class="text">在线客服</p>
        </div>
        <div class="right">
          <p><i class="icon-phone" style="color: rgb(106, 194, 11);"></i></p>
          <p class="text">在线客服</p>
        </div>
    </section>
    <section class="title">
      热门问题
    </section>
    <ul class="serverList">
      <li v-for="(item,index) in fuwuDefaultTit" :key="index">
        <span @click='jumpDefault(index)'>{{item}}</span>
        <x-icon type="ios-arrow-right" size="30" style="fill:#999"></x-icon>
      </li>
    </ul>
    <transition :name="direction">
      <router-view class="hello4child_s"></router-view>
    </transition>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        computed:{
          ...mapState(['direction']),
          ...mapState({
            'fuwuDefaultTit':(state)=>{
                return state.index.fuwuDefaultTit;
            },
          })
        },
      mounted(){
        var otaber = document.querySelector('.myself');
        otaber.style.bottom = 0;
        this.$store.dispatch('getFuwuDefaultPage');
      },
      methods:{
        jumpDefault(index){
            this.$store.commit('GETFUWUINDEXNUM',index);
            this.$router.push('/fuwudefault');
        }
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','服务中心');
          vm.$store.commit('changeshowBar',true);
          setTimeout(()=>{
            vm.$store.commit('changeTaber',false)
          })
        })
      },
      beforeRouteLeave (to, from, next) {
        var otaber = document.querySelector('.myself');
        otaber.style.bottom = 52+'px'
        this.$store.commit('changetit','我的');
        this.$store.commit('changeTaber',true);
        next()
      },
    }
</script>
<style lang="less" scoped>
  .hello4child_s{
    position: fixed;
    width:100%;
    /*height:100%;*/
    top:45px;
    bottom:0;
    background: #fff;
    transition:all .5s cubic-bezier(.55,0,.1,1);
    overflow: auto;
  }
  .forward-enter, .reverse-leave-active {
    opacity: 0;
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
  }
  .forward-leave-active, .reverse-enter {
    opacity: 0;
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
  }
  .title{
    height:23vw;
    line-height:23vw;
    padding-left:7vw;
    font-size:5vw
  }
  .serverList{
    background: #fff;
    li{
      height:11vw;
      border-bottom:1px solid #f5f5f5;
      border-top:1px solid #f5f5f5;
      font-size:4vw;
      display: flex;
      align-items: center;
      padding:2vw 3vw;
      &:active{
        background: #e5e5e5;
      }
      span{
        flex:1;
      }
    }
  }
  .head{
    height:27vw;
    border-bottom:1px solid #f1f1f1;
    display: flex;
    div{
      text-align: center;
      flex:1;
      .text{
        color: #999999;
        font-size:4vw;
      }
      &.left{
        border-right:1px solid #f1f1f1;
      }
      i{
        color: rgb(255, 123, 82);
        font-size:7vw;
        margin:6vw 0 2vw;
        display: inline-block;
      }
    }
  }
</style>
