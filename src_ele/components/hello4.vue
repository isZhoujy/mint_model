<template>
  <div class="myself">
    <div class="mheader">
      <img src="./../assets/default.jpg" alt="">
      <div class="phone">
        <p class="pnum">18738135007</p>
        <p><i class="icon-mobile-phone"></i><span>暂无绑定手机号</span></p>
      </div>
      <x-icon type="ios-arrow-right" size="30" style="fill:white"></x-icon>
    </div>
    <section class="info">
      <div class="info-left child">
        <span class="l_top"><i>0.00</i>元</span>
        <span class="l_bot">我的余额</span>
      </div>
      <div class="info-mid child">
        <span class="l_top"><i style="color: #ff5f3e;">0</i>个</span>
        <span class="l_bot">我的优惠</span>
      </div>
      <div class="info-right child">
        <span class="l_top"><i style="color: #6ac20b;">0</i>分</span>
        <span class="l_bot">我的积分</span>
      </div>
    </section>
    <section class="profile">
      <div class="prolist" @click="jump('/hello3')">
          <i class="icon-list-alt icon"></i>
          <div class="proname">
            <span>我的订单</span>
            <x-icon type="ios-arrow-right" size="30" style="fill:#999"></x-icon>
          </div>
      </div>
      <div class="prolist">
          <i class="icon icon-envelope-alt" style="color: #ff5f3e;"></i>
          <div class="proname">
            <span>积分商城</span>
            <x-icon type="ios-arrow-right" size="30" style="fill:#999"></x-icon>
          </div>
      </div>
      <div class="prolist" @click="jump('/huiyuan')">
          <i class="icon icon-group" style="color: rgb(255, 198, 54);"></i>
          <div class="proname">
            <span>饿了么会员卡</span>
            <x-icon type="ios-arrow-right" size="30" style="fill:#999"></x-icon>
          </div>
      </div>
    </section>
    <section class="profile">
      <div class="prolist" @click="jump('/fuwu')">
        <i class="icon-coffee icon"></i>
        <div class="proname">
          <span>服务中心</span>
          <x-icon type="ios-arrow-right" size="30" style="fill:#999"></x-icon>
        </div>
      </div>
      <div @click="jump('/hello4child')" class="prolist">
        <i class="icon icon-download-alt" style="color: #ff5f3e;"></i>
        <div class="proname">
          <span>下载饿了么APP</span>
          <x-icon type="ios-arrow-right" size="30" style="fill:#999"></x-icon>
        </div>
      </div>
    </section>
    <transition :name="direction">
      <router-view class="hello4child"></router-view>
    </transition>
  </div>
</template>
<style lang="less" scoped>
  .hello4child{
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    background: #fff;
    transition:all .5s cubic-bezier(.55,0,.1,1)
  }
  .myself{
    background: #f5f5f5;
    .profile{
      margin-top:5vw;
      .prolist{
        &:active{
          background: #eaeaea;
        }
        height:11vw;
        padding-left:9vw;
        border-bottom:1px solid #f1f1f1;
        background: #fff;
        .icon{
          float: left;
          margin:4vw 0 0 -6vw;
          font-size:4vw;
          color: rgb(74, 165, 240);
        }
        .proname{
          height:100%;
          display: flex;
          align-items: center;
          span{
            flex:1;
            font-size:4vw;
          }
        }
      }

    }
    .info{
      height:25vw;
      background: #fff;
      display:flex;
      .child{
        width:33.3%;
        height:100%;
        text-align: center;
        &:nth-of-type(2){
          border-left:1px solid #f1f1f1;
          border-right:1px solid #f1f1f1
        }
        .l_bot{
          color: #666;
          font-size:3vw;
        }
        .l_top{
          display: inline-block;
          margin:3vw 0;
          margin-bottom:0;
          width:100%;
          i{
            color: #f90;
            font-size:7vw;
            font-weight:600;

          }
        }
      }
    }
    .mheader{
      background: #3190e8;
      padding:5vw;
      display: flex;
      align-items: center;
      img{
        width: 15vw;
        height:15vw;
        border-radius:50%
      }
      .phone{
        flex: 1;
        margin-left:5vw;
        .pnum{
          font-weight:700;
          font-size:5vw;
          color: #fff;
        }
        i{
          font-size:7vw;
          color: white;
          vertical-align: sub;
        }
        span{
          color: #ffffff;
          margin-left:10px;
          font-size:3vw;
        }
      }
    }
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
</style>
<script>
  import { mapState} from 'vuex'
  import {Group,Cell} from 'vux'
    export default {
      components:{
        Group,Cell
      },
        data(){
            return {

            }
        },
      computed:{
        ...mapState(['direction'])
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          vm.$store.commit('changetit','我的');
          vm.$store.commit('changeshowBar',true);
          vm.$store.commit('changeTaber',true);
        })
      },
      beforeRouteLeave(to, from, next){
        next();
      },
      mounted(){

      },
      methods:{
          jump(path){
              this.$router.push(path)
          }
      }
    }
</script>

